import React from "react";
import { Metadata } from "next";
import ProfileClient from "../components/ProfileClient";
import { getUserById } from "@/libs/actions/user.action";
import { getSingleUserProperty } from "@/libs/actions/properties.action";
import { getUsersBlogs } from "@/libs/actions/blogs.action";

interface pageProps {
  params: {id: string}
}

export const metadata: Metadata = {
  title: "Nomeo Suites | Profile",
  description: "A real estate webapp built with nextjs. A webapp designed by Salomi Afolabi of Nomeo Consults. The app was initially intended as a real estate application to help in leasing and purchasing apartments but it will now serve as an app that advertise and monitors a certain real estate.",
};

const ProfilePage = async({params}:pageProps) => {
  const singleUser = await getUserById(params.id);
  const singleUserProperty = await getSingleUserProperty(params.id);
  const singleUserBlogs = await getUsersBlogs(params.id);

  return <ProfileClient user={singleUser} properties={singleUserProperty} blogs={singleUserBlogs}/>;
};

export default ProfilePage;
