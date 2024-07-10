"use server"

import connectToDatabase from "../utils/connectToDatabase";
import bcryptjs from "bcryptjs"
import User from "../schemas/users"
import { getCurrentUserRawData, getUserByEmail } from "./data.action";
import { capitalizeFirstLetter } from "@/hooks/capitalizeFirstLetter";
import { revalidatePath } from "next/cache";
import { deleteCloudinaryImages } from "./deleteCloudinaryImage";

type createUserProps = {
  email: string
  password: string
  surname: string
  lastname: string
};

type createAgentProps = {
  surname: string;
  lastname: string;
  email: string;
  password: string;
  profileImage: { public_id:string, secure_url:string };
  image: string;
  city: string;
  state: string;
  agencyName: string;
  officeAddress: string;
  mobileNumber: string;
  officeNumber: string;
  inspectionFee: number;
  bio?: string;
  agencyWebsite?: string;
};

type updateUserProps = {
  profileImage: { public_id:string, secure_url:string };
  isNewImage: boolean;
  occupation: string;
  city: string;
  state: string;
  mobileNumber: string;
  path: string;
};

type updateAgentProps = {
  profileImage: { public_id:string, secure_url:string };
  isNewImage: boolean;
  city: string;
  state: string;
  agencyName: string;
  agentBio: string;
  mobileNumber: string;
  officeNumber: string;
  agencyAddress: string;
  agencyFee: number;
  path: string;
};

type updatePasswordProps = {
  currentPassword: string;
  newPassword: string;
  path: string;
};


export const createUser = async ({email, password, surname, lastname}:createUserProps) => {
  await connectToDatabase();

  const name = capitalizeFirstLetter(surname) + ' ' + capitalizeFirstLetter(lastname);

  const userAlreadyExists = await getUserByEmail(email);

  if (userAlreadyExists) {
    return {error: 'User already exists! Login'}
  };

  try {
    const hashedPassword = await bcryptjs.hash(password, 10);
    const user = await User.create({name, email, hashedPassword});
    user.save();
    revalidatePath('/');

    return {success: 'Account successfully created, Log in'}
  } catch (error) {
    return {error: 'Internal server error, try again later'}
  }
};

export const createAgent = async ({surname, lastname, email, password, profileImage, image, city, state, agencyName, officeAddress, mobileNumber, officeNumber, inspectionFee, bio, agencyWebsite}:createAgentProps) => {
  await connectToDatabase();

  const agentAlreadyExist = await getUserByEmail(email);

  if (!agentAlreadyExist) {
    try {
      const name = capitalizeFirstLetter(surname) + ' ' + capitalizeFirstLetter(lastname);

      const hashedPassword = await bcryptjs.hash(password, 10);
      const agentData = {name, email, hashedPassword, profileImage, image, city, state, agencyName, agencyAddress: officeAddress, mobileNumber, officeNumber, agencyFee: inspectionFee, agentBio: bio, agencyWebsite, isAgent: true, profileCreated: true }
  
      const agent = await User.create(agentData);
      agent.save();
      revalidatePath('/');

      return {success: 'Account successfully created, Log in'}
    } catch (error) {
      return {error: 'Internal server error, try again later'}
    };

  };

  return {error: 'Agent already exist in database, login'}
};

export const updateUserProfile = async ({isNewImage, profileImage, occupation, city, state, mobileNumber, path}:updateUserProps) => {
  await connectToDatabase();

  const currentUser = await getCurrentUserRawData();
  
  if (!currentUser) {
    return;
  };

  const oldProfileImage = currentUser.profileImage;

  try {
    if (isNewImage) {
      deleteCloudinaryImages(oldProfileImage.public_id);
  
      const updateData = { profileImage, occupation, city, state, mobileNumber, image: profileImage.secure_url }
      await User.findOneAndUpdate({_id: currentUser._id}, updateData);
      revalidatePath(path);
  
      return {success: 'Profile successfully updated!'};
    } else {
  
      const updateData = { occupation, city, state, mobileNumber }
      await User.findOneAndUpdate({_id: currentUser._id}, updateData);
      revalidatePath(path);
  
      return {success: 'Profile successfully updated!'};
    }
  } catch (error) {
    return {error: 'Internal server error, try again later'}
  }
  

};

export const updateAgentProfile = async ({isNewImage, profileImage, city, state, mobileNumber, officeNumber, agencyAddress, agencyFee, agencyName, agentBio, path}:updateAgentProps) => {
  await connectToDatabase();

  const currentUser = await getCurrentUserRawData();
  
  if (!currentUser) {
    return;
  };

  const oldProfileImage = currentUser.profileImage;

  try {
    if (isNewImage) {
      deleteCloudinaryImages(oldProfileImage.public_id);
  
      const updateData = { profileImage, city, state, mobileNumber, image: profileImage.secure_url, officeNumber, agencyAddress, agencyFee, agencyName, agentBio }
      await User.findOneAndUpdate({_id: currentUser._id}, updateData);
      revalidatePath(path);
  
      return {success: 'Profile successfully updated!'};
    } else {
  
      const updateData = { city, state, mobileNumber, officeNumber, agencyAddress, agencyFee, agencyName, agentBio }
      await User.findOneAndUpdate({_id: currentUser._id}, updateData);
      revalidatePath(path);
  
      return {success: 'Profile successfully updated!'};
    }
  } catch (error) {
    return {error: 'Internal server error, try again later'}
  }
};

export const updatePassword = async ({currentPassword, newPassword, path}:updatePasswordProps) => {
  await connectToDatabase();

  const currentUser = await getCurrentUserRawData();

  if (!currentUser) {
    return;
  }

  const googleAuthenticated = currentUser.hashedPassword === '';

  if (googleAuthenticated) {
    return {error: 'You cannot change password because you logged in with google.'};
  };

  const passwordMatch = await bcryptjs.compare(currentPassword, currentUser.hashedPassword);

  if (!passwordMatch) {
    return {error: 'Wrong password, type in the correct password'};
  };

  try {
    const hashedPassword = await bcryptjs.hash(newPassword, 10);

    await User.findOneAndUpdate({_id: currentUser._id}, { hashedPassword: hashedPassword });
    revalidatePath(path);

    return {success: 'Password successfully updated'}
  } catch (error) {
    return {error: 'Internal server error, try again later'}
  };
};