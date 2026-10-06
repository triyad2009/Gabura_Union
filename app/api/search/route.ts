import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import { PUBLIC_COLLECTIONS } from "@/lib/archive";

export async function GET(request:NextRequest){
  const q=new URL(request.url).searchParams.get("q")?.trim();
  if(!q) return NextResponse.json({ok:true,data:[]});
  const escaped=q.replace(/[.*+?^()|[\]\\]/g,"\\$&");
  const regex={$regex:escaped,$options:"i"};
  const data:Record<string,unknown>[]=[];
  for(const collection of PUBLIC_COLLECTIONS){
    const docs=await (await getDb()).collection(collection).find({
      $or:[{title:regex},{name:regex},{description:regex},{summary:regex},{excerpt:regex},{content:regex}]
    }).limit(10).toArray();
    for(const doc of docs) data.push({...doc,_collection:collection});
  }
  return NextResponse.json({ok:true,data:data.slice(0,50),count:Math.min(data.length,50)});
}
