"use client";

import React from "react";
import Box from "@/components/shared/Box";
import { blogData, blogList } from "@/components/data/constants";
import RecentBlogSection from "./RecentBlogSection";
import AllBlogs from "./AllBlogs";
import LoadMoreButton from "@/components/shared/LoadMoreButton";

const BlogClient = () => {
  return (
    <Box className="pt-16 lg:pt-20">
      <div className="pt-10">
        <h2 className="lg:text-2xl text-xl text-center">Blog</h2>
        <p className="lg:text-xl md:text-lg mt-5 mb-2">{blogData.mainTitle}</p>
        <div className="w-full mt-8 lg:mt-10">
          <h2 className="lg:text-2xl text-xl mb-8 lg:mb-10">
            Recent blog posts
          </h2>
          <RecentBlogSection blogList={blogList} />
        </div>
        <div className="w-full mt-8 lg:mt-10">
          <h2 className="lg:text-2xl text-xl">All blog posts</h2>
          <AllBlogs blogList={blogList} />
          <LoadMoreButton label="Load more" loadmoreFunction={() => {}}/>
        </div>
      </div>
    </Box>
  );
};

export default BlogClient;
