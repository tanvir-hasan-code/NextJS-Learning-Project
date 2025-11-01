import ConnectDatabase, { collectionNames } from "@/lib/dbConnect";

export const postSingleProduct = async (productData) => {
  try {
    const result = (await ConnectDatabase(collectionNames.TEST)).insertOne(productData);
    revalidatePath("/products");

    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};
