import React from "react";
import SearchClient from "./components/SearchClient";
import { getCurrentUser } from "@/libs/actions/data.action";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search Results",
};

const SearchPage = async ({searchParams,}: {searchParams: { [key: string]: string | undefined }}) => {
  const currentUser = await getCurrentUser();
  
  return <SearchClient query={searchParams} user={currentUser}/>;
};

export default SearchPage;
