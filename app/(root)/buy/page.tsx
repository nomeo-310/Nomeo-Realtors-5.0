import React from "react";
import BuyPropertiesClient from "./components/BuyPropertiesClient";
import { Metadata } from "next";
import { getsaleProperties } from "@/libs/actions/properties.action";
import { getCurrentUser } from "@/libs/actions/data.action";


export const metadata: Metadata = {
  title: "Nomeo Suites | Buy Properties",
  description: "A real estate webapp built with nextjs. A webapp designed by Salomi Afolabi of Nomeo Consults. The app was initially intended as a real estate application to help in leasing and purchasing apartments but it will now serve as an app that advertise and monitors a certain real estate.",
};

const page = async ({searchParams}: {searchParams: { [key: string]: string | undefined }}) => {
  const currentUser = await getCurrentUser();
  const buyProperties = await getsaleProperties();

  return <BuyPropertiesClient currentUser={currentUser} buyProperties={buyProperties}/>;
};

export default page;
