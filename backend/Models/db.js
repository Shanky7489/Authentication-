// const mongoose = require("mongoose");
// require("dotenv").config;

// const mongo_url = process.env.MONGO_URL;

// mongoose
//   .connect(mongo_url)
//   .then(() => {
//     console.log("dbconnected");
//   })
//   .catch(() => {
//     console.log("db not connected");
//   });
const mongoose = require("mongoose");
require("dotenv").config(); // Ensure config is called

const mongo_url = process.env.MONGO_URL;

mongoose
  .connect(mongo_url) // Add options for better compatibility
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    // Capture and log error details
    console.error("Database not connected:", error);
  });
