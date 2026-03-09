// Import Mongoose for MongoDB object modeling
const mongoose = require('mongoose');

// Define a schema for User collection
const UserSchema = new mongoose.Schema({
    // User's full name (required)
    name: {
        type: String,
        required: true
    },

    // User's email (required, must be unique)
    email: {
        type: String,
        required: true,
        unique: true
    },

    // User's hashed password (required)
    password: {
        type: String,
        required: true
    }
});

// Create a Mongoose model for User and export it
// Collection name will be 'users' (Mongoose automatically pluralizes 'user')
module.exports = User = mongoose.model('user', UserSchema);