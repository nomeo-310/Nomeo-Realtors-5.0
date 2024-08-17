import Blogs from "@/libs/schemas/blogs";
import User from "@/libs/schemas/users";
import connectToDatabase from "@/libs/utils/connectToDatabase"

export const POST = async (request: Request) => {
  const { page } = await request.json();

  try {
    await connectToDatabase();

    const pageNumber = parseInt(page as string);
    const pageSize = 6;

    const blogs = await Blogs.find()
    .populate({
      path: "blogAuthor",
      model: User,
      select: "_id name image agentBio"
      })
    .sort({createdAt: 'descending'})
    .skip((pageNumber - 1) * pageSize)
    .limit(pageSize + 1);

    
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