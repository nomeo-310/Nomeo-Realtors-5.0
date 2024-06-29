import React from "react";
import SearchClient from "./components/SearchClient";

const SearchPage = ({searchParams,}: {searchParams: { [key: string]: string | undefined }}) => {
  
  return <SearchClient />;
};

export default SearchPage;
