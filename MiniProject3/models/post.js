const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const postSchema = new Schema({
  userId: { type: Number, required: true, ref: "user" },
  id: { type: Number, trim: true, required: true },
  title: { type: String, trim: true, required: true },
  body: { type: String, trim: true, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("post", postSchema);
