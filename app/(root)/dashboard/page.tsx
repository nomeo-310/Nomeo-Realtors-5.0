import React from "react";
import DashBoardClient from "./components/DashBoardClient";
import { Metadata } from "next";
import { getCurrentUser } from "@/libs/actions/data.action";
import { getSingleUserProperty } from "@/libs/actions/properties.action";
import { getUsersBlogs } from "@/libs/actions/blogs.action";

export const metadata: Metadata = {
  title: "Nomeo Suites | Dashboard",
  description: "A real estate webapp built with nextjs. A webapp designed by Salomi Afolabi of Nomeo Consults. The app was initially intended as a real estate application to help in leasing and purchasing apartments but it will now serve as an app that advertise and monitors a certain real estate.",
};

const Dashboard = async () => {
  const currentUser = await getCurrentUser();
  const agentProperties = await getSingleUserProperty(currentUser._id);
  const agentPosts = await getUsersBlogs(currentUser._id);

  return <DashBoardClient currentUser={currentUser} properties={agentProperties} blogs={agentPosts} />;
};

export default Dashboard;
