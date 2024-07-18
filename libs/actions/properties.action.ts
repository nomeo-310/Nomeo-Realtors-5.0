'use server'

import connectToDatabase from "../utils/connectToDatabase"
import Properties from "../schemas/properties"
import { getCurrentUserRawData, getUserByEmail } from "./data.action"
import { revalidatePath } from "next/cache"


type mainFeeProps = {
  mainFeeName: string;
  mainFeeAmount: number
};

type optionalFeeProps = {
  optFeeName: string;
  optFeeAmount: number
};

type closeLandmarkProps = {
  landmarkName: string;
  distance: string
};

type imageProps = {
  public_id: string;
  secure_url: string
}


type createPropertyProps = {
  title: string,
  address: string,
  state: string,
  city: string,
  description: string,
  furnitureStatus: string,
  propertyTag: string,
  annualMortgage: number,
  fullPropertyPrice: number,
  annualRent: number,
  monthlyRent: number,
  verifiableAmenities: string[],
  mainFees: mainFeeProps[],
  optionalFees: optionalFeeProps[],
  closestLandmark: closeLandmarkProps[],
  bedNumber: number,
  toiletNumber: number,
  bathNumber: number,
  apartmentArea: number,
  images: imageProps[],
  availabilityTag: boolean,
  path: string
}


export const createProperty = async ({title, address, state, city, description, furnitureStatus, propertyTag, annualMortgage, fullPropertyPrice, annualRent, monthlyRent, verifiableAmenities, mainFees, optionalFees, closestLandmark, bedNumber, toiletNumber, bathNumber, apartmentArea, images, availabilityTag, path}:createPropertyProps) => {
  await connectToDatabase();
  const currentUser = await getCurrentUserRawData();

  if (!currentUser) {
    return;
  };

  if (currentUser.isAgent) {
    const propertyData = {
      title: title,
      address: address,
      state: state,
      city: city,
      description: description,
      furnitureStatus: furnitureStatus,
      propertyTag: propertyTag,
      annualMortgage: annualMortgage,
      fullPropertyPrice: fullPropertyPrice,
      annualRent: annualRent,
      monthlyRent: monthlyRent,
      verifiableAmenities: verifiableAmenities,
      mainFees: mainFees,
      optionalFees: optionalFees,
      closestLandmark: closestLandmark,
      bedNumber: bedNumber,
      toiletNumber: toiletNumber,
      bathNumber: bathNumber,
      apartmentArea: apartmentArea,
      images: images,
      availabilityTag: availabilityTag,
      agentInCharge: currentUser._id
    };

    try {
      const property = await Properties.create(propertyData);
      property.save();
      revalidatePath(path)

      return {success: 'Property successfully created'}
    } catch (error) {
      return {error: 'Internal server error, try again later!'}
    }
  }
};

export const getFeaturedProperties = async () => {
  await connectToDatabase();

  const properties = await Properties.find()
  .populate("agentInCharge", "_id name image agencyName agencyFee")
  .limit(6)
  .sort({createdAt: 1});

  const featuredProperties = JSON.parse(JSON.stringify(properties));

  return featuredProperties;
};

export const getSingleProperty = async (id:string) => {
  await connectToDatabase();
  

  const property = await Properties.findById(id)
  .populate("agentInCharge", "_id name image agencyName agencyFee");
  const singleProperty = JSON.parse(JSON.stringify(property));

  return singleProperty;
}
 

