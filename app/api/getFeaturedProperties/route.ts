import Properties from "@/libs/schemas/properties";
import User from "@/libs/schemas/users";
import connectToDatabase from "@/libs/utils/connectToDatabase"

export const GET = async () => {
  await connectToDatabase();

  try {
    const properties = await Properties.find()
    .populate({
      path: "agentInCharge",
      model: User, 
      select: "_id name image agencyName agencyFee"
    })
    .limit(6)
    .sort({createdAt: -1});

    return Response.json(properties);
  } catch (error) {
    console.error(error)
    return Response.json({error: 'Internal server error'}, {status: 500});
  }
};