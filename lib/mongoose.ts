import mongoose from "mongoose";
import { setServers } from "node:dns/promises";

let isConnected = false; // Variable to track the connection status

export const connectToDB = async () => {
  setServers(["1.1.1.1", "8.8.8.8"]);

  // Set strict query mode for Mongoose to prevent unknown field queries.
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) throw new Error("Missing MongoDB URL");

  // If the connection is already established, return without creating a new connection.
  if (isConnected) {
    console.log("MongoDB connection already established");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      serverSelectionTimeoutMS: 15000,
    });

    isConnected = true; // Set the connection status to true
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    // Rethrow so callers don't run queries while disconnected
    throw error;
  }
};
