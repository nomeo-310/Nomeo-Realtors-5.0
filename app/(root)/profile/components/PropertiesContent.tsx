"use client";

import React from "react";
import { currentUserProps, featuredPropertiesProps } from "@/types/types";
import PropertyCard from "@/components/shared/PropertyCard";
import EmptyState from "@/components/shared/EmptyState";
import { useInfiniteQuery } from "@tanstack/react-query";
import FeaturedPropertiesLoading from "../../../components/home/FeaturedPropertiesLoading";
import { LuLoader2 } from "react-icons/lu";
import InfiniteScrollClient from "@/components/shared/InfiniteScrollClient";

type propertiesContentProps = {
  user: currentUserProps;
};

const PropertiesContent = ({ user }: propertiesContentProps) => {
  const fetchApiData = async ({ pageParam }: { pageParam: number }) => {
    const response = await fetch("/api/getAgentProperties", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ page: pageParam }),
    });

    if (!response.ok) {
      throw new Error("Something went wrong, try again later");
    }

    const data = await response.json();
    return data;
  };

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["all-agent-properties", user._id],
    queryFn: fetchApiData,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });

  const properties: featuredPropertiesProps[] =
    data?.pages.flatMap((page) => page.properties) || [];

  if (status === "pending") {
    return <FeaturedPropertiesLoading />;
  }

  if (status === "success" && !properties.length && !hasNextPage) {
    return <EmptyState message="Agent has not added any properties yet" />;
  }

  if (status === "error") {
    return (
      <p className="text-base lg:text-lg text-center text-destructive">
        An error occur while loading properties.
      </p>
    );
  }

  return (
    <InfiniteScrollClient
      className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-x-4 md:gap-x-3 gap-y-6 md:gap-y-8"
      onBottomReached={() => hasNextPage && !isFetching && fetchNextPage()}
    >
      {properties.map((property) => (
        <PropertyCard
          key={property._id}
          id={property._id}
          propertTag={property.propertyTag}
          furnitureTag={property.furnitureStatus}
          propertyImage={property.images[0].secure_url}
          propertySize={property.apartmentArea}
          beds={property.bedNumber}
          baths={property.bathNumber}
          toilets={property.toiletNumber}
          agentInCharge={property.agentInCharge.name}
          agentInChargeImage={property.agentInCharge.image}
          title={property.title}
          state={property.state}
          city={property.city}
          propertyCost={property.fullPropertyPrice}
          monthlyRent={property.monthlyRent}
          liked={property.likes.includes(user._id)}
          saved={property.bookmarks.includes(user._id)}
          hideTag={true}
          agentDisplay={false}
          hideAgentInCharge={true}
        />
      ))}
      {isFetchingNextPage && (
        <LuLoader2 className="mx-auto animate-spin my-3" />
      )}
    </InfiniteScrollClient>
  );
};

export default PropertiesContent;
