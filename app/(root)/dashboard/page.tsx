import React from "react";
import DashBoardClient from "./components/DashBoardClient";
import { Metadata } from "next";
import { getCurrentUser } from "@/libs/actions/data.action";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Nomeo Suites | Dashboard",
  description: "A real estate webapp built with nextjs. A webapp designed by Salomi Afolabi of Nomeo Consults. The app was initially intended as a real estate application to help in leasing and purchasing apartments but it will now serve as an app that advertise and monitors a certain real estate.",
};

const Dashboard = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    redirect('/')
  }

  return <DashBoardClient currentUser={currentUser}/>;
};

export default Dashboard;
