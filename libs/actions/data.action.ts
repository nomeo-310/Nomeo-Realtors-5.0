"use server"


import connectToDatabase from "../utils/connectToDatabase";
import User from "../schemas/users"
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";

export const getUserByEmail = async (email: string) => {
  connectToDatabase();
  
  try {
    const user = await User.findOne({ email: email });
    return user;
  } catch (error) {
    return null;
  }
};

export const getUserSession = async () => {
  return await getServerSession(authOptions);
};

export const getCurrentUserRawData = async () => {
  const currentUserSession = await getUserSession();

  if (!currentUserSession?.user?.email) {
    return;
  }

  const currentUser = await getUserByEmail(currentUserSession.user.email);

  if (!currentUser) {
    return;
  }

  return currentUser;
};

export const getCurrentUser = async () => {
  const currentUserSession = await getUserSession();

  if (!currentUserSession?.user?.email) {
    return;
  }

  const currentUserData = await getUserByEmail(currentUserSession.user.email);

  if (!currentUserData) {
    return;
  }

  const currentUser = JSON.parse(JSON.stringify(currentUserData))

  return currentUser;
}
