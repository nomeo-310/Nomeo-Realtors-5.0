import React from "react";
import SingleBlogClient from "../components/SingleBlogClient";
import { Metadata } from "next";
import { getSingleBlog } from "@/libs/actions/blogs.action";
import Footer from "../../components/footer/Footer";

interface pageProps {
  params: {id: string}
}

export const metadata: Metadata = {
  title: "Single Blog",
};

const SingleBlogPage = async ({params}: pageProps) => {
  const blog = await getSingleBlog(params.id);
  
  return (
    <React.Fragment>
      <SingleBlogClient blog={blog} />
      <Footer/>
    </React.Fragment>
  );
};

export default SingleBlogPage;
