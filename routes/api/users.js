// Import Express and create a router instance
const express = require("express");
const router = express.Router();

// Import bcrypt for password hashing
const bcrypt = require("bcryptjs");

// Import User model
const User = require("../../models/User");

// Test route to verify the user route is working
// GET /api/users
router.get("/", (req, res) => res.send("User route"));

// Register a new user
// POST /api/users
router.post("/", async (req, res) => {
  // Destructure user data from request body
  const { name, email, password } = req.body;

  try {
    // Check if a user with the same email already exists
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({
        errors: [{ msg: "User already exists" }],
      });
    }

    // Create a new user instance
    user = new User({
      name,
      email,
      password,
    });

    // Generate a salt to strengthen password hashing
    const salt = await bcrypt.genSalt(10);

    // Hash the user's password before saving to the database
    user.password = await bcrypt.hash(password, salt);

    // Save the new user to MongoDB
    await user.save();

    // Respond with created user information (excluding password)
    res.json({
      id: user.id,
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    // Log server errors for debugging
    console.error(error.message);

    // Return generic server error response
    res.status(500).send("Server error");
  }
});

// Export router to be used in the main server file
module.exports = router;
