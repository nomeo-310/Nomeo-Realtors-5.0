import React from "react";
import PropertyClient from "../components/PropertyClient";
import { propertyList } from "@/components/data/constants";
import { Metadata } from "next";
import { getSingleProperty } from "@/libs/actions/properties.action";
import { getCurrentUser } from "@/libs/actions/data.action";

interface pageProps {
  params: {id: string}
}

export const metadata: Metadata = {
  title: "Nomeo Suites | Property",
  description: "A real estate webapp built with nextjs. A webapp designed by Salomi Afolabi of Nomeo Consults. The app was initially intended as a real estate application to help in leasing and purchasing apartments but it will now serve as an app that advertise and monitors a certain real estate.",
};

const PropertyPage = async({params}:pageProps) => {
  const property = await getSingleProperty(params.id);
  const currentUser = await getCurrentUser();

  if (!property) {
    return 
  }

  return <PropertyClient property={property} currentUser={currentUser}/>;
};

export default PropertyPage;
