import mongoose from 'mongoose';
import env from 'dotenv'
env.config()
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.Db);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  
    

  }
};

export default connectDB;
