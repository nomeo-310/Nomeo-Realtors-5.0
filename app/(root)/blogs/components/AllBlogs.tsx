"use client";

import React from "react";
import BlogCard from "./BlogCard";
import { featuredBlogProps } from "@/types/types";
import InfiniteScrollClient from "@/components/shared/InfiniteScrollClient";
import { useInfiniteQuery } from "@tanstack/react-query";
import BlogLoadingSkeletons from "./BlogLoadingSkeletons";
import { LuLoader2 } from "react-icons/lu";

type allBlogsProps = {
  useAsAllPost?:boolean
  useAgent?: boolean
}

const AllBlogs = ({ useAgent, useAsAllPost }: allBlogsProps) => {

  const fetchApiData = async ({pageParam}: {pageParam: number}) => {

    const response = await fetch('/api/getAllBlogs', {
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
    queryKey: ['all-blogs'],
    queryFn: fetchApiData,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage
  });

  const blogList:featuredBlogProps[] = data?.pages.flatMap(page => page.blogs) || [];

  if (status === 'pending') {
    return <BlogLoadingSkeletons useAsAllPost={useAsAllPost}/>
  }

  if (status === 'success' && !blogList.length && !hasNextPage) {
    return  (
      <p className='text-base lg:text-lg text-center text-muted-foreground'>
        No one has posted anything yet
      </p>
    )
  }

  if (status === 'error') {
    return (
      <p className='text-base lg:text-lg text-center text-destructive'>
        An error occur while loading posts
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

export default AllBlogs;
