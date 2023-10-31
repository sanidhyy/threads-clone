import mongoose from "mongoose"; // Import the Mongoose library for working with MongoDB.

// Define the schema for the 'Community' collection in your MongoDB database.
const communitySchema = new mongoose.Schema({
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
  image: String, // An optional field for the community's image.
  bio: String, // An optional field for the community's description.
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the 'User' model to specify the creator of the community.
  },
  threads: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Thread", // Reference to the 'Thread' model for the threads associated with the community.
    },
  ],
  members: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the 'User' model for the members of the community.
    },
  ],
});

// Create a Mongoose model for 'Community' if it doesn't exist, or use the existing one.
const Community =
  mongoose.models.Community || mongoose.model("Community", communitySchema);

export default Community; // Export the 'Community' model for use in your application.
