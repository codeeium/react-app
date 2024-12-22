import mongoose from "mongoose";

const connectDB = async () => {
    await mongoose.connect("mongodb://localhost:27017/admin");
};

export default connectDB;
