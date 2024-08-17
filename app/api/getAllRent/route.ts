import { getCurrentUserRawData } from "@/libs/actions/data.action";
import Properties from "@/libs/schemas/properties";
import User from "@/libs/schemas/users";
import connectToDatabase from "@/libs/utils/connectToDatabase"

export const POST = async (request:Request) => {
  await connectToDatabase();

  const { page } = await request.json();
  const value = page || undefined;
  const pageNumber = parseInt(value as string);
  const pageSize = 6;

  
  try {
    const properties = await Properties.find({ propertyTag: 'rent' })
    .populate({
      path: "agentInCharge",
      model: User, 
      select: "_id name image agencyName agencyFee"
    })
    .skip((pageNumber - 1) * pageSize)
    .limit(pageSize + 1)
    .sort({createdAt: 'descending'});

    const nextPage = properties.length > pageSize ? pageNumber + 1 : undefined;

    const data = {
      properties: properties.slice(0, pageSize),
      nextPage: nextPage
    };

    return Response.json(data);
  } catch (error) {
    console.error(error)
    return Response.json({error: 'Internal server error'}, {status: 500});
  }
};