import React from "react";
import RentClient from "./components/RentClient";
import { Metadata } from "next";
import { getCurrentUser } from "@/libs/actions/data.action";
import Footer from "../../components/footer/Footer";

export const metadata: Metadata = {
  title: "Rent Properties",
};

const page = async () => {
  const currentUser = await getCurrentUser();

  return (
    <React.Fragment>
      <RentClient currentUser={currentUser} />
      <Footer />
    </React.Fragment>
  );
};

export default page;
