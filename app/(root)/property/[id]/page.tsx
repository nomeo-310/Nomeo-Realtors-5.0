import React from "react";
import PropertyClient from "../components/PropertyClient";
import { propertyList } from "@/components/data/constants";
import { Metadata } from "next";

interface pageProps {
  params: {id: string}
}

export const metadata: Metadata = {
  title: "Nomeo Suites | Property",
  description: "A real estate webapp built with nextjs. A webapp designed by Salomi Afolabi of Nomeo Consults. The app was initially intended as a real estate application to help in leasing and purchasing apartments but it will now serve as an app that advertise and monitors a certain real estate.",
};

const PropertyPage = ({params}:pageProps) => {
  const property = propertyList.find((property) => property.id === params.id)

  if (!property) {
    return 
  }

  return <PropertyClient property={property} />;
};

export default PropertyPage;
