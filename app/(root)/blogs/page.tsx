import React from "react";
import BlogClient from "./components/BlogClient";
import { Metadata } from "next";
import { getAllBlogs } from "@/libs/actions/blogs.action";

export const metadata: Metadata = {
  title: "Nomeo Suites | Blogs",
  description: "A real estate webapp built with nextjs. A webapp designed by Salomi Afolabi of Nomeo Consults. The app was initially intended as a real estate application to help in leasing and purchasing apartments but it will now serve as an app that advertise and monitors a certain real estate.",
};


const BlogsPage = async () => {
  const blogs = await getAllBlogs();

  return <BlogClient blogs={blogs} />;
};

export default BlogsPage;
