import { getCurrentUserRawData } from "@/libs/actions/data.action";
import Blogs from "@/libs/schemas/blogs";
import User from "@/libs/schemas/users";
import connectToDatabase from "@/libs/utils/connectToDatabase"

export const POST = async (request:Request) => {
  await connectToDatabase();

  const { page } = await request.json();
  const value = page || undefined;
  const pageNumber = parseInt(value as string);
  const pageSize = 6;

  const currentUser = await getCurrentUserRawData();

  if (!currentUser) {
    return Response.json({error: 'Unauthorized'}, {status: 404});
  };

  try {
    const blogs = await Blogs.find({ blogAuthor: currentUser._id })
    .populate({
      path: "blogAuthor",
      model: User,
      select: "_id name image agentBio"      
    })
    .skip((pageNumber - 1) * pageSize)
    .limit(pageSize + 1)
    .sort({createdAt: 'descending'});

    const nextPage = blogs.length > pageSize ? pageNumber + 1 : undefined;

    const data = {
      blogs: blogs.slice(0, pageSize),
      nextPage: nextPage
    };

    return Response.json(data);
  } catch (error) {
    console.error(error)
    return Response.json({error: 'Internal server error'}, {status: 500});
  }
};