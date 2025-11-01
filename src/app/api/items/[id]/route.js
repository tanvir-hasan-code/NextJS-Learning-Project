import ConnectDatabase, { collectionNames } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req, {params}) {

	const p = await params;

	const result = await ConnectDatabase(collectionNames.TEST).findOne({ _id: new ObjectId(p.id) });
 
  return Response.json(result)
}



export async function PATCH(req, {params}) {

	const p = await params;

	const updateData = await req.json()

	const filter = await { _id: new ObjectId(p.id) }

	const result = await ConnectDatabase(collectionNames.TEST).updateOne(filter, {$set:{...updateData}}, {upsert: true} );
 
  return Response.json(result)
}


export async function DELETE(req, {params}) {

	const p = await params;
	
	const result = await ConnectDatabase(collectionNames.TEST).deleteOne({_id: new ObjectId(p.id)});
  return Response.json(result)
}