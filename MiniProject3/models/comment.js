const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  postId: { type: Number, required: true, ref: "post" },
  id: { type: Number, required: true },
  name: { type: String, trim: true, required: true },
  email: { type: String, trim: true, required: true, ref: "user" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("comment", commentSchema);
