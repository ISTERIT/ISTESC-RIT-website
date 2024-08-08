"use server";

import connectDB from "@/lib/mongo-connect";
import User from "@/app/(admin)/lib/User";

export default async function getEmails() {
    await connectDB();

    let mailArr = await User.find({}, {email: 1, _id: 0});
    return mailArr.map((v) => v.email as string);
}