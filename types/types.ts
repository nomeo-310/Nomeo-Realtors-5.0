export type currentUserProps = {
  _id: string,
  name: string,
  email: string,
  hashedPassword: string,
  isAgent: boolean,
  profileImage: { public_id: string, secure_url: string},
  image: string,
  mobileNumber: string,
  officeNumber: string,
  city: string,
  state: string,
  agencyName: string,
  agencyAddress: string,
  agencyFee: number,
  agentBio: string,
  occupation: string,
  isVerified: boolean,
  numberOfClient: number,
  numberOfBlogs: number,
  numberOfSoldProperties: number,
  numberOfPropertiesManaged: number,
  agencyWebsite: string,
  clients: string[],
  blogs: string[],
  liked: string[],
  saved: string[],
  profileCreated: boolean,
  properties: string[],
  createdAt: string,
  updatedAt: string,
  ratings: number,
};

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


export type featuredPropertiesProps = {
  _id: string
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
  agentInCharge: {
    _id: string
    name: string
    image: string
    agencyName: string
    agencyFee: number
  },
  likes: string[],
  bookmarks: string[],
  totalLikes: number,
  totalBookmarks: number,
  createdAt: string,
  updatedAt: string
};

export type featuredBlogProps = {
  _id: string
  blogTitle: string,
  blogIntro: string,
  content: string,
  blogpostBanner: {public_id: string, secure_url: string},
  blogAuthor: {
    _id: string 
    name: string
    image: string
    agentBio: string
  },
  likes: string[],
  totalLikes: number,
  reads: string[],
  totalReads: number,
  comments: string[],
  totalComments: number,
  totalReadingTime: number,
  createdAt: string,
  updatedAt: string
}