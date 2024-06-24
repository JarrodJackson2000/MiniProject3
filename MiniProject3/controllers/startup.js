"use strict";
let Models = require("../models");

const initiateDatabase = async () => {
  Models.Post.deleteMany({}).exec();
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();
    data.forEach((item) => {
      new Models.Post(item).save();
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = initiateDatabase;
