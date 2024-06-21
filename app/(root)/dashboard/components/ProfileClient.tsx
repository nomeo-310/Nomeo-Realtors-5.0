"use client";

import React from "react";
import Profile from "./Profile";
import EditProfile from "./EditProfile";
import { user, user_2 } from "@/components/data/constants";

type Props = {};

const ProfileClient = (props: Props) => {
  
  return <EditProfile user={user_2} />;
};

export default ProfileClient;
