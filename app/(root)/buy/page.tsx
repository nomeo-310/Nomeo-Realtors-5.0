import React from "react";
import BuyPropertiesClient from "./components/BuyPropertiesClient";
import { Metadata } from "next";
import { getCurrentUser } from "@/libs/actions/data.action";


export const metadata: Metadata = {
  title: "Buy Properties",
};

const page = async () => {
  
  const currentUser = await getCurrentUser();

  return <BuyPropertiesClient currentUser={currentUser} />;
};

export default page;
