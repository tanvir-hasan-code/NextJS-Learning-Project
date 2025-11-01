"use server"

import ConnectDatabase, { collectionNames } from "@/lib/dbConnect"

export const getProducts = async () => {
	try {
		const data = (await ConnectDatabase(collectionNames.TEST)).find().toArray();
		return data;
	} catch (error) {
		console.log(error)
		return [];
	}
}