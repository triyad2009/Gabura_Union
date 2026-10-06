import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { getDb } from "@/lib/mongodb";
import { isArchiveCollection } from "@/lib/archive";

const jsonError=(message:string,status=400)=>NextResponse.json({ok:false,error:message},{status});

export async function GET(request:NextRequest,{params}:{params:Promise<{collection:string}>}) {
  const {collection}=await params;
  if(!isArchiveCollection(collection)) return jsonError("Unknown collection",404);
  try {
    const url=new URL(request.url), id=url.searchParams.get("id"), slug=url.searchParams.get("slug");
    const limit=Math.min(Math.max(Number(url.searchParams.get("limit")??50),1),100);
    const filter:Record<string,unknown>={};
    if(id){if(!ObjectId.isValid(id)) return jsonError("Invalid id"); filter._id=new ObjectId(id);}
    else if(slug) filter.slug=slug;
    const data=await (await getDb()).collection(collection).find(filter).sort({createdAt:-1}).limit(limit).toArray();
    return NextResponse.json({ok:true,data,count:data.length});
  } catch(e){console.error(e);return jsonError("Database request failed",500);}
}

export async function POST(request:NextRequest,{params}:{params:Promise<{collection:string}>}) {
  const {collection}=await params;
  if(!isArchiveCollection(collection)||collection==="users"||collection==="audit_logs") return jsonError("Collection is not writable",403);
  try {
    const body=await request.json();
    if(!body||typeof body!=="object"||Array.isArray(body)) return jsonError("JSON object required");
    const now=new Date(), doc={...body,createdAt:now,updatedAt:now};
    const result=await (await getDb()).collection(collection).insertOne(doc);
    return NextResponse.json({ok:true,id:result.insertedId.toString(),data:{...doc,_id:result.insertedId}},{status:201});
  } catch(e){console.error(e);return jsonError("Insert failed",500);}
}

export async function PATCH(request:NextRequest,{params}:{params:Promise<{collection:string}>}) {
  const {collection}=await params;
  if(!isArchiveCollection(collection)||collection==="users"||collection==="audit_logs") return jsonError("Collection is not writable",403);
  const id=new URL(request.url).searchParams.get("id");
  if(!id||!ObjectId.isValid(id)) return jsonError("Valid id is required");
  try {
    const body=await request.json();
    if(!body||typeof body!=="object"||Array.isArray(body)) return jsonError("JSON object required");
    delete body._id; delete body.createdAt; body.updatedAt=new Date();
    const result=await (await getDb()).collection(collection).findOneAndUpdate({_id:new ObjectId(id)},{$set:body},{returnDocument:"after"});
    if(!result) return jsonError("Record not found",404);
    return NextResponse.json({ok:true,data:result});
  } catch(e){console.error(e);return jsonError("Update failed",500);}
}

export async function DELETE(request:NextRequest,{params}:{params:Promise<{collection:string}>}) {
  const {collection}=await params;
  if(!isArchiveCollection(collection)||collection==="users"||collection==="audit_logs") return jsonError("Collection is not writable",403);
  const id=new URL(request.url).searchParams.get("id");
  if(!id||!ObjectId.isValid(id)) return jsonError("Valid id is required");
  try {
    const result=await (await getDb()).collection(collection).deleteOne({_id:new ObjectId(id)});
    if(!result.deletedCount) return jsonError("Record not found",404);
    return NextResponse.json({ok:true,deleted:true});
  } catch(e){console.error(e);return jsonError("Delete failed",500);}
}
