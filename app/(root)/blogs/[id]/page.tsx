import React from "react";
import SingleBlogClient from "../components/SingleBlogClient";
import { Metadata } from "next";
import { blogList } from "@/components/data/constants";

interface pageProps {
  params: {id: string}
}

export const metadata: Metadata = {
  title: "Nomeo Suites | Single Blog",
  description: "A real estate webapp built with nextjs. A webapp designed by Salomi Afolabi of Nomeo Consults. The app was initially intended as a real estate application to help in leasing and purchasing apartments but it will now serve as an app that advertise and monitors a certain real estate.",
};

const SingleBlogPage = ({params}: pageProps) => {
  const blog = blogList.find((item) => item.id === params.id);

  if (!blog) {
    return;
  }

  return <SingleBlogClient blog={blog} />;
};

export default SingleBlogPage;
