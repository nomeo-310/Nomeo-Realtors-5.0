"use client";

import React from "react";
import { blog } from "@/components/data/constants";
import BlogCard from "./BlogCard";

const AllBlogs = ({ blogList }: { blogList: blog[] }) => {
  return (
    <div className="w-full grid xl:grid-cols-4 md:grid-cols-3 grid-cols-1 mt-8 lg:mt-10 xl:gap-x-4 md:gap-x-3 gap-y-6">
      {blogList.map((blog: blog, index: number) => (
        <BlogCard
          key={index}
          author={blog.author}
          createdAt={blog.createdAt}
          title={blog.title}
          description={blog.description}
          id={blog.id}
          blogBanner={blog.imageBanner}
          authorImage={blog.authorImage}
        />
      ))}
    </div>
  );
};

export default AllBlogs;
