import mongoose from "mongoose"; // Import the Mongoose library for working with MongoDB.

// Define the schema for the 'Thread' collection in your MongoDB database.
const threadSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the 'User' model for the thread's author.
    required: true,
  },
  community: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Community", // Reference to the 'Community' model for the community to which the thread belongs.
  },
  createdAt: {
    type: Date,
    default: Date.now, // Default value is the current date and time.
  },
  parentId: {
    type: String,
  },
  children: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Thread", // Reference to the 'Thread' model for child threads.
    },
  ],
});

// Create a Mongoose model for 'Thread' if it doesn't exist, or use the existing one.
const Thread = mongoose.models.Thread || mongoose.model("Thread", threadSchema);

export default Thread; // Export the 'Thread' model for use in your application.
