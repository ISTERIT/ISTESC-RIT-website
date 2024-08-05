import * as mongoose from "mongoose";


export default async function connectDB(mongoURI?: string) {
    mongoURI = process.env.MONGO_URI || mongoURI;

    if(!mongoURI) {
        throw new Error("MONGO_URI is not set in environment variables");
    }

    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB");
}