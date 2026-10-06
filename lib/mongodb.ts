import { MongoClient, Db } from "mongodb";

const uri = process.env.MONGODB_URI;
if (!uri) throw new Error("Missing MONGODB_URI");

declare global { var _mongoClientPromise: Promise<MongoClient> | undefined; }

const clientPromise =
  global._mongoClientPromise ?? new MongoClient(uri, { maxPoolSize: 10, serverSelectionTimeoutMS: 5000 }).connect();

if (process.env.NODE_ENV !== "production") global._mongoClientPromise = clientPromise;

export async function getDb(): Promise<Db> {
  const client = await clientPromise;
  return client.db(process.env.MONGODB_DB ?? "gabura_archive");
}
