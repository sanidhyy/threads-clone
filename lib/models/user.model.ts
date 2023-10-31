import mongoose from "mongoose"; // Import the Mongoose library for working with MongoDB.

// Define the schema for the 'User' collection in your MongoDB database.
const userSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    unique: true, // Ensure that usernames are unique.
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: String, // An optional field for the user's image.
  bio: String, // An optional field for the user's description.
  threads: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Thread", // Reference to the 'Thread' model for threads created by the user.
    },
  ],
  onboarded: {
    type: Boolean,
    default: false, // Default value is 'false'.
  },
  communities: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Community", // Reference to the 'Community' model for communities the user is a member of.
    },
  ],
});

// Create a Mongoose model for 'User' if it doesn't exist, or use the existing one.
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User; // Export the 'User' model for use in your application.
