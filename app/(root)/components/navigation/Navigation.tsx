import React from "react";
import NavigationClient from "./NavigationClient";
import { getCurrentUser } from "@/libs/actions/data.action";


const Navigation = async () => {
  const currentUser = await getCurrentUser();

  return <NavigationClient currentUser={currentUser} />;
};

export default Navigation;
