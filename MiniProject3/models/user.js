const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  id: { type: Number, trim: true, required: true },
  name: { type: String, trim: true, required: true },
  username: { type: String, trim: true, required: true },
  email: { type: String, trim: true, required: true, ref: "user" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("user", userSchema);
