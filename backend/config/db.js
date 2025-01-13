import mongoose from "mongoose";

console.log("MONGO_URI:", process.env.MONGO_URI);

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // process code 1 means exit with failure, 0 means exit with success
  }
}