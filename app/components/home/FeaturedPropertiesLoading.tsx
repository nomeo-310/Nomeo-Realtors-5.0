"use client";

import React from "react";
import PropertyLoadingSkeleton from "../../(root)/property/components/PropertyLoadingSkeleton";

const FeaturedPropertiesLoading = () => {
  return (
    <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 lg:mt-10 lg:gap-x-5 md:gap-x-5 gap-y-6 md:gap-y-8">
      <PropertyLoadingSkeleton />
      <PropertyLoadingSkeleton />
      <PropertyLoadingSkeleton />
    </div>
  );
};

export default FeaturedPropertiesLoading;
