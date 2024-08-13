const mongoose = require("mongoose");


// require("dotenv").config()


const dbconnect = async () => {
  await mongoose.connect(
    "mongodb+srv://Rashmi08:nodejs@cluster0.axnhsxm.mongodb.net/"
  );
  console.log("Connected to MongoDB");
};

module.exports = dbconnect;
