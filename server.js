// Import Express framework
const express = require("express");

// Import database connection function
const connectDB = require("./config/db");

// Initialize Express app
const app = express();

// Use environment variable PORT if available, otherwise default to 5000
const PORT = process.env.PORT || 5000;

// Establish connection to MongoDB before starting the server
connectDB();

// Define a simple test route
// GET / -> responds with a friendly message
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// Start the server and listen on the defined PORT
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
