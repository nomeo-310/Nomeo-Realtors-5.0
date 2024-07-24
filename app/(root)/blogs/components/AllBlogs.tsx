"use client";

import React from "react";
import BlogCard from "./BlogCard";
import { featuredBlogProps } from "@/types/types";

type allBlogsProps = {
  blogList: featuredBlogProps[], 
  useAsAllPost?:boolean
}

const AllBlogs = ({ blogList, useAsAllPost }: allBlogsProps) => {
  return (
    <div className={`w-full grid ${useAsAllPost ? 'xl:grid-cols-3 md:grid-cols-2': 'xl:grid-cols-4 md:grid-cols-3'} grid-cols-1 mt-8 lg:mt-10 xl:gap-x-4 md:gap-x-3 gap-y-6`}>
      {blogList.map((blog, index: number) => (
        <BlogCard
          key={index}
          author={blog.blogAuthor.name}
          createdAt={blog.createdAt}
          title={blog.blogTitle}
          description={blog.blogIntro}
          id={blog._id}
          blogBanner={blog.blogpostBanner.secure_url}
          authorImage={blog.blogAuthor.image}
        />
      ))}
    </div>
  );
};

export default AllBlogs;
