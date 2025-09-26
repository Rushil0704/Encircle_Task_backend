import mongoose from "mongoose";

const MONGO_URI = 'mongodb://localhost:27017/task_crud';

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, {

        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    }
};

export default connectDB;