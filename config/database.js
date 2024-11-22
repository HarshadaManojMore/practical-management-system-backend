import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    const mongoUri ="mongodb+srv://harshada:harshada@practical-cluster.rnekf.mongodb.net/practical";
    await mongoose.connect(mongoUri);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("Connection failed", error);
  }
};

export default dbConnect;
