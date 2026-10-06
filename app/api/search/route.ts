import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import { PUBLIC_COLLECTIONS } from "@/lib/archive";

const PUBLIC_TYPES = new Set(PUBLIC_COLLECTIONS);

function escapeRegex(value: string) {
  return value.replace(/[.*+?^()|[\]\\]/g, "\\$&");
}

export async function GET(request: NextRequest) {
  const params = new URL(request.url).searchParams;
  const q = params.get("q")?.trim() ?? "";
  const section = params.get("section")?.trim() ?? "";
  const type = params.get("type")?.trim() ?? "";
  const limit = Math.min(Math.max(Number(params.get("limit") ?? 40), 1), 80);

  if (type && type !== "archive_layers" && !PUBLIC_TYPES.has(type as typeof PUBLIC_COLLECTIONS[number])) {
    return NextResponse.json({ ok: false, error: "Invalid type" }, { status: 400 });
  }

  const db = await getDb();
  const results: Record<string, unknown>[] = [];

  // Section structure uses Atlas Search. If the index is still building,
  // the endpoint safely falls back to a normal MongoDB regex query.
  if (!type || type === "archive_layers") {
    const layerCollection = db.collection("archive_layers");
    const searchIndexes = q
      ? await layerCollection.listSearchIndexes("archive_layers_search").toArray().catch(() => [])
      : [];
    const indexReady = searchIndexes.some((index) =>
      index.name === "archive_layers_search" &&
      (index.queryable === true || index.status === "READY")
    );

    if (q && indexReady) {
      const compound: Record<string, unknown>[] = [
        {
          text: {
            query: q,
            path: ["title", "titleBn", "slug"],
            fuzzy: { maxEdits: 1, prefixLength: 1 }
          }
        }
      ];
      if (section) compound.push({ equals: { path: "sectionSlug", value: section } });
      compound.push({ equals: { path: "published", value: true } });

      const docs = await layerCollection.aggregate([
        {
          $search: {
            index: "archive_layers_search",
            compound: { must: compound }
          }
        },
        {
          $project: {
            _id: 1,
            title: 1,
            titleBn: 1,
            slug: 1,
            sectionSlug: 1,
            contentStatus: 1,
            score: { $meta: "searchScore" }
          }
        },
        { $limit: limit }
      ]).toArray();

      for (const doc of docs) {
        results.push({ ...doc, _collection: "archive_layers", _kind: "layer" });
      }
    } else if (!q) {
      const filter: Record<string, unknown> = { published: true };
      if (section) filter.sectionSlug = section;
      const docs = await layerCollection.find(filter).sort({ order: 1 }).limit(limit).toArray();
      for (const doc of docs) {
        results.push({ ...doc, _collection: "archive_layers", _kind: "layer" });
      }
    } else {
      const escaped = escapeRegex(q);
      const regex = { $regex: escaped, $options: "i" };
      const filter: Record<string, unknown> = {
        published: true,
        $or: [{ title: regex }, { titleBn: regex }, { slug: regex }]
      };
      if (section) filter.sectionSlug = section;
      const docs = await layerCollection.find(filter).limit(limit).toArray();
      for (const doc of docs) {
        results.push({ ...doc, _collection: "archive_layers", _kind: "layer" });
      }
    }
  }

  // Existing archive records use a collection-per-domain model. Until the
  // unified search index is built, use a safe indexed/fallback text scan here.
  const collections = type && type !== "archive_layers"
    ? [type]
    : [...PUBLIC_COLLECTIONS];

  if (q) {
    const regex = { $regex: escapeRegex(q), $options: "i" };
    for (const collection of collections) {
      const docs = await db.collection(collection).find({
        $or: [
          { title: regex },
          { titleBn: regex },
          { name: regex },
          { description: regex },
          { summary: regex },
          { excerpt: regex },
          { content: regex },
          { slug: regex }
        ]
      }).limit(Math.min(limit, 12)).toArray();

      for (const doc of docs) {
        results.push({ ...doc, _collection: collection, _kind: "record" });
      }
    }
  }

  return NextResponse.json({
    ok: true,
    q,
    section: section || null,
    type: type || null,
    count: results.length,
    data: results.slice(0, limit)
  });
}
