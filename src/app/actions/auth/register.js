"use server"
import ConnectDatabase, { collectionNames } from "@/lib/dbConnect"

export const RegisterUser = async (payload) => {

	try {
		// Need user Validation check

	const result = (await ConnectDatabase(collectionNames.TEST_USER)).insertOne(payload);
	return result;
	} catch (error) { 
		console.log(error)
		return null;
	}
	
}