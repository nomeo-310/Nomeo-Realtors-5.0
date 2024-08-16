"use client";

import React from "react";
import { currentUserProps, featuredBlogProps } from "@/types/types";
import InfiniteScrollClient from "@/components/shared/InfiniteScrollClient";
import { useInfiniteQuery } from "@tanstack/react-query";
import { LuLoader2 } from "react-icons/lu";
import BlogLoadingSkeletons from "../../blogs/components/BlogLoadingSkeletons";
import BlogCard from "../../blogs/components/BlogCard";
import EmptyState from "@/components/shared/EmptyState";

type allBlogsProps = {
  useAsAllPost?:boolean
  useAgent?: boolean
  user: currentUserProps
}

const AllAgentBlogs = ({ user, useAgent, useAsAllPost }: allBlogsProps) => {

  const fetchApiData = async ({pageParam}: {pageParam: number}) => {

    const response = await fetch('/api/getAgentBlogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', },
      body: JSON.stringify({ page: pageParam})
    });
    
    if (!response.ok) {
      throw new Error('Something went wrong, try again later');
    }

    const data = await response.json();
    return data
  };

  const {data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } = useInfiniteQuery({
    queryKey: ['all-agent-blogs', user._id],
    queryFn: fetchApiData,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage
  });

  const blogList:featuredBlogProps[] = data?.pages.flatMap(page => page.blogs) || [];

  if (status === 'pending') {
    return <BlogLoadingSkeletons useAsAllPost agentBlogsDisplay />
  }

  if (status === 'success' && !blogList.length && !hasNextPage) {
    return  <EmptyState message="Agent has not created any blog post yet. Hope he creates some soon"/>
  }

  if (status === 'error') {
    return (
      <p className='text-base lg:text-lg text-center text-destructive'>
        An error occur while loading blog posts.
      </p>
    )
  }

  return (
    <InfiniteScrollClient 
      className={`w-full grid ${useAsAllPost ? 'xl:grid-cols-3 md:grid-cols-2': 'xl:grid-cols-4 md:grid-cols-3'} grid-cols-1 mt-8 lg:mt-10 xl:gap-x-4 md:gap-x-3 gap-y-6`}
      onBottomReached={() => hasNextPage && !isFetching && fetchNextPage()}>
      { blogList.map((blog, index: number) => (
        <BlogCard
          key={index}
          author={blog.blogAuthor.name}
          createdAt={blog.createdAt}
          title={blog.blogTitle}
          description={blog.blogIntro}
          id={blog._id}
          blogBanner={blog.blogpostBanner.secure_url}
          authorImage={blog.blogAuthor.image}
          useAgent={useAgent}
        />
      ))}
      { isFetchingNextPage && <LuLoader2 className='mx-auto animate-spin my-3'/> }
    </InfiniteScrollClient>
  );
};

export default AllAgentBlogs;