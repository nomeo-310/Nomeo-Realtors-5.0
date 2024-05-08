import React from "react";
import PropertyClient from "../components/PropertyClient";
import { propertyList } from "@/components/data/constants";

interface pageProps {
  params: {id: string}
}

const PropertyPage = ({params}:pageProps) => {
  console.log(params.id);
  const property = propertyList.find((property) => property.id === params.id)
  console.log(property)
  return <PropertyClient />;
};

export default PropertyPage;
