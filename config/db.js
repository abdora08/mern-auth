// Import Mongoose for MongoDB object modeling
const mongoose = require("mongoose");

// Import config package to manage environment configuration
const config = require("config");

// Retrieve MongoDB connection URI from configuration file
const db = config.get("mongoDB_URI");

// Asynchronous function to establish connection to MongoDB
const connectDB = async () => {
  try {
    // Attempt to connect to MongoDB using the URI
    await mongoose.connect(db);

    // Log success message if connection is established
    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    // Log error message if connection fails
    console.log(error.message);

    // Exit the application with failure status
    process.exit(1); //exit process with failure code
  }
};

// Export the connection function to be used in other files (e.g., server.js)
module.exports = connectDB;
