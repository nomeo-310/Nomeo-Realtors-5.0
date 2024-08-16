import React from "react";
import BuyPropertiesClient from "./components/BuyPropertiesClient";
import { Metadata } from "next";
import { getCurrentUser } from "@/libs/actions/data.action";
import Footer from "../components/footer/Footer";


export const metadata: Metadata = {
  title: "Buy Properties",
};

const page = async () => {
  
  const currentUser = await getCurrentUser();

  return (
    <React.Fragment>
      <BuyPropertiesClient currentUser={currentUser} />
      <Footer/>
    </React.Fragment>
  );
};

export default page;
