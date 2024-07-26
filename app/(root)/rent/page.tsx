import React from "react";
import RentClient from "./components/RentClient";
import { Metadata } from "next";
import { getCurrentUser } from "@/libs/actions/data.action";
import { getRentProperties } from "@/libs/actions/properties.action";


export const metadata: Metadata = {
  title: "Nomeo Suites | Rent Properties",
  description: "A real estate webapp built with nextjs. A webapp designed by Salomi Afolabi of Nomeo Consults. The app was initially intended as a real estate application to help in leasing and purchasing apartments but it will now serve as an app that advertise and monitors a certain real estate.",
};


const page = async ({searchParams}: {searchParams: { [key: string]: string | undefined }}) => {
  const currentUser = await getCurrentUser();
  const rentProperties = await getRentProperties();


  return <RentClient rentProperties={rentProperties} currentUser={currentUser}/>;
};

export default page;
