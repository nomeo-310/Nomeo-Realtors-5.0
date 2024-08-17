"use client";

import React from "react";
import EditProfile from "./EditProfile";
import { currentUserProps } from "@/types/types";

type profileProps = {
  currentUser: currentUserProps
};

const ProfileClient = ({currentUser}: profileProps) => {
  
  return <EditProfile user={currentUser} />;
};

export default ProfileClient;
