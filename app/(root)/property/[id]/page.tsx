import React from "react";
import PropertyClient from "../components/PropertyClient";
import { propertyList } from "@/components/data/constants";

interface pageProps {
  params: {id: string}
}

const PropertyPage = ({params}:pageProps) => {
  const property = propertyList.find((property) => property.id === params.id)

  if (!property) {
    return 
  }

  return <PropertyClient property={property} />;
};

export default PropertyPage;
