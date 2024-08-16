import React from "react";
import BlogClient from "./components/BlogClient";
import { Metadata } from "next";
import Footer from "../components/footer/Footer";

export const metadata: Metadata = {
  title: "Blogs",
};


const BlogsPage = async () => {

  return (
    <React.Fragment>
      <BlogClient />
      <Footer/>
    </React.Fragment>
  );
};

export default BlogsPage;
