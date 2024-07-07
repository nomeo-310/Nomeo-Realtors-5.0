"use server"

import connectToDatabase from "../utils/connectToDatabase";
import bcryptjs from "bcryptjs"
import User from "../schemas/users"
import { getUserByEmail } from "./data.action";
import { capitalizeFirstLetter } from "@/hooks/capitalizeFirstLetter";

type createUserProps = {
  email: string
  password: string
  surname: string
  lastname: string
}

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
      const agentData = {name, email, hashedPassword, profileImage, image, city, state, agencyName, officeAddress, mobileNumber, officeNumber, inspectionFee, agentBio: bio, agencyWebsite, isAgent: true, profileCreated: true }
  
      const agent = await User.create(agentData);
      agent.save();
      return {success: 'Account successfully created, Log in'}
    } catch (error) {
      return {error: 'Internal server error, try again later'}
    };

  };

  return {error: 'Agent already exist in database, login'}
};