import Blogs from "@/libs/schemas/blogs";
import connectToDatabase from "@/libs/utils/connectToDatabase"

export const GET = async () => {
  await connectToDatabase();

  try {
    const blogs = await Blogs.find()
    .populate("blogAuthor", "_id name image agentBio")
    .limit(3)
    .sort({createdAt: -1});

    return Response.json(blogs);
  } catch (error) {
    console.error(error)
    return Response.json({error: 'Internal server error'}, {status: 500});
  }
};