import ConnectDatabase, { collectionNames } from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";

 
export async function GET() {
	const data = await ConnectDatabase(collectionNames.TEST).find().toArray();
 
  return Response.json(data)
}
export async function POST(req) {

	const postData = await req.json();
	const result = await ConnectDatabase(collectionNames.TEST).insertOne(postData);
	revalidatePath("/products")
 
  return Response.json(result)
}