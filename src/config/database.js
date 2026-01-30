// import mongoose from "mongoose";


// const connectDb= async() =>{
//     try{
//     await mongoose.connect(process.env.MONGODB_URI);
//     console.log("Local MongoDB Connected Successfully!");
//     }
//     catch(error){
//         console.log("Error: ",error);
//         process.exit(1);
//     }
// }
// export default connectDb;

import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ Local MongoDB Connected Successfully!");
  } catch (error) {
    console.error("❌ MongoDB Error:", error);
    process.exit(1);
  }
};

export default connectDb;



/*
import mongoose from 'mongoose'; // Or const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // 127.0.0.1 is often preferred over 'localhost' in Node.js 18+ to avoid IPv6 issues
    const uri = "mongodb://127.0.0.1:27017/myFirstProject"; 
    
    await mongoose.connect(uri);
    console.log("Local MongoDB Connected Successfully!");
  } catch (error) {
    console.error("Connection Failed:", error.message);
    process.exit(1);
  }
};

connectDB();

*/