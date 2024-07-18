import mongoose from "mongoose"
import { Schema } from "mongoose"


const PropertiesSchema = new Schema({
  title: {type: String, default: ""},
  address: {type: String, default: ""},
  state: {type: String, default: ""},
  city: {type: String, default: ""},
  description: {type: String, default: ""},
  furnitureStatus: {type: String, default: ""},
  propertyTag: {type: String, default: ""},
  annualMortgage: {type: Number, default: 0},
  fullPropertyPrice: {type: Number, default: 0},
  annualRent: {type: Number, default: 0},
  monthlyRent: {type: Number, default: 0},
  verifiableAmenities: [{type: String, default: ""}],
  mainFees: { type: Array, default: { mainFeeName: "", mainFeeAmount: 0 }},
  optionalFees: { type: Array, default: { optFeeName: "", optFeeAmount: 0 }},
  closestLandmark: { type: Array, default: { landmark: "", distance: "" }},
  bedNumber: {type: Number, default: 0},
  toiletNumber: {type: Number, default: 0},
  bathNumber: {type: Number, default: 0},
  apartmentArea: {type: Number, default: 0},
  images: {type: Array, default:{public_id:"", secure_url: ""}},
  agentInCharge: { type: mongoose.Schema.ObjectId, ref: "User" },
  likes: [{ type: mongoose.Schema.ObjectId, ref: "User" }],
  totalLikes: {type: Number, default: 0},
  bookmarks: [{ type: mongoose.Schema.ObjectId, ref: "User" }],
  totalBookmarks: {type: Number, default: 0},
  availabilityTag: {type: Boolean, default: false},
  createdAt: {type: Date, default: Date.now()},
  updatedAt: {type: Date, default: Date.now()}
});

(mongoose.models as any) = {};

const Properties = mongoose.model("Properties", PropertiesSchema);

export default Properties;