import mongoose from "mongoose";
import {MONGODB} from './config.js'

export async function connectDB() {
    try{
    const db = await mongoose.connect(MONGODB)
    console.log("connected")
    }catch(error){
        console.log(error);
    }

}