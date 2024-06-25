"use strict";
let Models = require("../models");

const initiateDatabaseUser = async () => {
  await Models.User.deleteMany({}).exec();
  await Models.Post.deleteMany({}).exec();
  await Models.Comment.deleteMany({}).exec();
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    for (let item of data) {
      await new Models.User(item).save().catch((err) => console.log(err));
    }
    await initiateDatabasePost();
    await initiateDatabaseComment();
  } catch (err) {
    console.log(err);
  }
};

const initiateDatabasePost = async () => {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();
    for (let item of data) {
      await new Models.Post(item).save().catch((err) => console.log(err));
    }
  } catch (err) {
    console.log(err);
  }
};

const initiateDatabaseComment = async () => {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/comments");
    let data = await response.json();
    for (let item of data) {
      await new Models.Comment(item).save().catch((err) => console.log(err));
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = { initiateDatabaseUser };
