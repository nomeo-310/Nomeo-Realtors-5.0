import React from "react";
import DashBoardClient from "./components/DashBoardClient";
import { Metadata } from "next";
import { getCurrentUser } from "@/libs/actions/data.action";
import Footer from "../../components/footer/Footer";

export const metadata: Metadata = {
  title: "Dashboard",
};

const Dashboard = async () => {
  const currentUser = await getCurrentUser();

  return (
    <React.Fragment>
      <DashBoardClient currentUser={currentUser} />
      <Footer />
    </React.Fragment>
  );
};

export default Dashboard;
