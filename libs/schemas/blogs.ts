import mongoose from "mongoose"
import { Schema } from "mongoose"


const BlogsSchema = new Schema({
  blogTitle: {type: String, default: ""},
  blogIntro: {type: String, default: ""},
  content: {type: String, default: ""},
  blogpostBanner: {type: Object, default:{public_id:"", secure_url: ""}},
  blogAuthor: { type: mongoose.Schema.ObjectId, ref: "User" },
  likes: [{ type: mongoose.Schema.ObjectId, ref: "User" }],
  totalLikes: {type: Number, default: 0},
  reads: [{ type: mongoose.Schema.ObjectId, ref: "User" }],
  totalReads: {type: Number, default: 0},
  comments: [{ type: mongoose.Schema.ObjectId, ref: "Comments" }],
  totalComments: {type: Number, default: 0},
  totalReadingTime: {type: Number, default: 0},
  createdAt: {type: Date, default: Date.now()},
  updatedAt: {type: Date, default: Date.now()}
});

(mongoose.models as any) = {};

const Blogs = mongoose.model("Blogs", BlogsSchema);

export default Blogs;