'use server'

import { revalidatePath } from "next/cache";
import Blogs from "../schemas/blogs";
import connectToDatabase from "../utils/connectToDatabase"
import { getCurrentUserRawData } from "./data.action";
import User from "../schemas/users";

type createBlogProps = {
  blogTitle: string,
  blogIntro: string,
  content: string,
  blogpostBanner: {public_id: string, secure_url: string},
  path: string,
}


export const createBlogPost = async ({blogTitle, blogIntro, blogpostBanner, content, path}:createBlogProps) => {

  const currentUser = await getCurrentUserRawData();

  if (!currentUser) {
    return;
  };

  const contentLength = content.length;

  const newBlogData = {
    blogTitle: blogTitle,
    blogIntro: blogIntro,
    content: content,
    blogpostBanner: blogpostBanner,
    blogAuthor: currentUser._id,
    totalReadingTime: (contentLength / 200).toFixed(2),
  };

  try {
    await connectToDatabase();
    const newBlog = await Blogs.create(newBlogData);
    newBlog.save();

    await User.findOneAndUpdate({_id: currentUser._id}, {$push: {blogs: newBlog._id}, $inc: {numberOfBlogs: +1}});

    revalidatePath(path);
    return {success: 'Blog post successfully created'}
  } catch (error) {
    return {error: 'Internal server error, try again later'}
  };

};


export const getSingleBlog = async (id: string) => {
  await connectToDatabase();

  const blog = await Blogs.findById(id)
  .populate({
    path: "blogAuthor",
    model: User,
    select: "_id name image agentBio"      
  })

  const singleBlog = JSON.parse(JSON.stringify(blog));

  return singleBlog;
};
