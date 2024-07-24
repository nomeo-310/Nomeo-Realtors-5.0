import mongoose from "mongoose"
import { Schema } from "mongoose"

const UserSchema = new Schema({
  name: {type: String, default: ""},
  email:{ type: String, default: ""},
  hashedPassword: { type: String, default: "" },
  isAgent: {type: Boolean, default: false},
  profileImage: {type: Object, default: { public_id: "", secure_url: ""}},
  image: { type: String, default: "" },
  mobileNumber: {type: String, default: ""},
  officeNumber: {type: String, default: ""},
  city: {type: String, default: ""},
  state: {type: String, default: ""},
  agencyName: {type: String, default: ""},
  agencyAddress: {type: String, default: ""},
  agencyFee: {type: Number, default: 0},
  agentBio: {type: String, default: ""},
  occupation: {type: String, default: ""},
  isVerified: {type: Boolean, default: false},
  numberOfClient: {type: Number, default: 0},
  numberOfBlogs: {type: Number, default: 0},
  numberOfSoldProperties: {type: Number, default: 0},
  numberOfPropertiesManaged: {type: Number, default: 0},
  agencyWebsite: {type: String, default: ""},
  clients: [{ type: mongoose.Schema.ObjectId, ref: "User" }],
  blogs: [{ type: mongoose.Schema.ObjectId, ref: "Blog" }],
  profileCreated: {type: Boolean, default: false},
  properties: [{ type: mongoose.Schema.ObjectId, ref: "Properties" }],
  liked: [{ type: mongoose.Schema.ObjectId, ref: "Properties" }],
  saved: [{ type: mongoose.Schema.ObjectId, ref: "Properties" }],
  createdAt: {type: Date, default: Date.now()},
  updatedAt: {type: Date, default: Date.now()},
  ratings: {type: Number, default: 0},
});

(mongoose.models as any) = {};

const User = mongoose.model("User", UserSchema);

export default User;