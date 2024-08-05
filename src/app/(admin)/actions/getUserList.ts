"use server";

import connectDB from "@/lib/mongo-connect";
import User from "@/app/(admin)/lib/User";

export async function getUserList() {
    await connectDB();

    return User.find();
}