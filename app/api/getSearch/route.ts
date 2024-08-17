import { getCurrentUserRawData } from "@/libs/actions/data.action";
import Properties from "@/libs/schemas/properties";
import User from "@/libs/schemas/users";
import connectToDatabase from "@/libs/utils/connectToDatabase"
import { FilterQuery } from "mongoose";


type searchQueryProps = {
  minimumCost: string;
  maximumCost: string;
  minimumRent: string;
  maximumRent: string;
  numberOfBeds: string
  numberOfBaths: string;
  state: string;
  city: string;
  propertyTag: string;
};

export const POST = async (request:Request) => {
  await connectToDatabase();

  const { page, query } = await request.json();

  const value = page || undefined;
  const pageNumber = parseInt(value as string);
  const pageSize = 6;


  let searchValue;

  const buildQuery = (filters:searchQueryProps ): FilterQuery<any> => {
    const query: FilterQuery<any> = { propertyTag: 'sale', };
    if (parseInt(filters.minimumCost) > 0 ) {
      query.fullPropertyPrice = { $gte: filters.minimumCost };
    }
    if (parseInt(filters.maximumCost) > 0) {
      query.fullPropertyPrice = query.fullPropertyPrice || {};
      query.fullPropertyPrice.$lte = filters.maximumCost;
    }
    
    if (parseInt(filters.minimumRent) > 0 ) {
      query.annualRent = { $gte: filters.minimumRent };
    }

    if (parseInt(filters.maximumRent) > 0) {
      query.annualRent = query.annualRent || {};
      query.annualRent.$lte = filters.maximumRent;
    }
    if (filters.state) {
      query.state = filters.state;
    }
    if (filters.city) {
      query.city = filters.city;
    }
    if (parseInt(filters.numberOfBeds) > 0) {
      query.bedNumber = filters.numberOfBeds;
    }
    if (parseInt(filters.numberOfBaths) > 0) {
      query.bathNumber = filters.numberOfBaths;
    }
    if (filters.propertyTag) {
      query.propertyTag = filters.propertyTag;
    }
  
    return query;
  };
  

  if (query !== undefined) {
    searchValue = buildQuery(query);
  } else {
    searchValue = {};
  }

  try {
    const properties = await Properties.find(searchValue)
    .populate({
      path: "agentInCharge",
      model: User, 
      select: "_id name image agencyName agencyFee"
    })
    .skip((pageNumber - 1) * pageSize)
    .limit(pageSize + 1)
    .sort({createdAt: 'descending'});

    const nextPage = properties.length > pageSize ? pageNumber + 1 : undefined;

    const data = {
      properties: properties.slice(0, pageSize),
      nextPage: nextPage
    };

    return Response.json(data);
  } catch (error) {
    console.error(error)
    return Response.json({error: 'Internal server error'}, {status: 500});
  }
};