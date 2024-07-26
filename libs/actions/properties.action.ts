'use server'

import connectToDatabase from "../utils/connectToDatabase"
import Properties from "../schemas/properties"
import { getCurrentUserRawData, getPropertyById, getUserByEmail } from "./data.action"
import { revalidatePath } from "next/cache"
import { ObjectId } from "mongodb"
import User from "../schemas/users"


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
};


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

      await User.findOneAndUpdate({_id: currentUser._id}, {$push: {properties: property._id}, $inc: {numberOfPropertiesManaged: +1}});

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
  .sort({createdAt: -1});

  const featuredProperties = JSON.parse(JSON.stringify(properties));

  return featuredProperties;
};

export const getSingleProperty = async (id:string) => {
  await connectToDatabase();
  

  const property = await Properties.findById(id)
  .populate("agentInCharge", "_id name image agencyName agencyFee");
  const singleProperty = JSON.parse(JSON.stringify(property));

  return singleProperty;
};

export const getSingleUserProperty = async (id:string) => {
  await connectToDatabase();

  const property = await Properties.find({agentInCharge: id})
  .populate("agentInCharge", "_id name image agencyName agencyFee");
  const singleUserProperty = JSON.parse(JSON.stringify(property));

  return singleUserProperty;
};

export const bookmarkProperty = async ({id, path}:{id:string, path:string}) => {
  const newPropertyId = new ObjectId(id);
  const currentUser = await getCurrentUserRawData();
  const currentProperty = await getPropertyById(id);

  if (!currentUser) {
    return;
  };

  if (!currentProperty) {
    return;
  };

  const alreadyBookmarked = currentProperty.bookmarks.includes(currentUser._id);

  try {
    await connectToDatabase();

    if (alreadyBookmarked) {
      await Properties.findOneAndUpdate({_id: id}, {$pull: {bookmarks: currentUser._id}, $inc: {totalBookmarks: -1}})
      await User.findOneAndUpdate({_id: currentUser._id}, {$pull: {saved: newPropertyId}});
  
      revalidatePath(path);
      return { success: "You no longer bookmark this property"};
    } else {
      await Properties.findOneAndUpdate({_id: id}, {$push: {bookmarks: currentUser._id}, $inc: {totalBookmarks: +1}})
      await User.findOneAndUpdate({_id: currentUser._id}, {$push: {saved: newPropertyId}});
  
      revalidatePath(path);
      return { success: "You have bookmarked this property"};
    };

  } catch (error) {
    return {error: 'Internal server error, try again later'}
  }



};

export const likeProperty = async ({id, path}:{id:string, path:string}) => {

  const newPropertyId = new ObjectId(id);
  const currentUser = await getCurrentUserRawData();
  const currentProperty = await getPropertyById(id);

  if (!currentUser) {
    return;
  };

  if (!currentProperty) {
    return;
  };

  const alreadyLiked = currentProperty.likes.includes(currentUser._id);

  try {
    await connectToDatabase();

    if (alreadyLiked) {
      await Properties.findOneAndUpdate({_id: id}, {$pull: {likes: currentUser._id}, $inc: {totalLikes: -1}})
      await User.findOneAndUpdate({_id: currentUser._id}, {$pull: {liked: newPropertyId}});
  
      revalidatePath(path);
      return { success: "You no longer like this property"};
    } else {
      await Properties.findOneAndUpdate({_id: id}, {$push: {likes: currentUser._id}, $inc: {totalLikes: +1}})
      await User.findOneAndUpdate({_id: currentUser._id}, {$push: {liked: newPropertyId}});
  
      revalidatePath(path);
      return { success: "You like this property"};
    };
  } catch (error) {
    return {error: 'Internal server error, try again later'}
  };
};

export const getRentProperties = async () => {
  await connectToDatabase();

  const properties = await Properties.find({propertyTag: 'rent'})
  .populate("agentInCharge", "_id name image agencyName agencyFee")
  .limit(6)
  .sort({createdAt: -1});

  const rentProperties = JSON.parse(JSON.stringify(properties));

  return rentProperties;
};

export const getsaleProperties = async () => {
  await connectToDatabase();

  const properties = await Properties.find({propertyTag: 'sale'})
  .populate("agentInCharge", "_id name image agencyName agencyFee")
  .limit(6)
  .sort({createdAt: -1});

  const saleProperties = JSON.parse(JSON.stringify(properties));

  return saleProperties;
};
 

