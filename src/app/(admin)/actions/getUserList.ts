"use server";

import connectDB from "@/lib/mongo-connect";

export async function getUserList() {
    await connectDB();

}