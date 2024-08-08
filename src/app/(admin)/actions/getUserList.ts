"use server";

import connectDB from "@/lib/mongo-connect";
import User, {IUser} from "@/app/(admin)/lib/User";

export async function getUserList(): Promise<IUser[]> {
    await connectDB();

    let users = await User.find() as IUser[];

    return users.map((user) => {
            return {
                name: user.name,
                tempID: user.tempID,
                email: user.email,
                phoneNumber: user.phoneNumber,
                branch: user.branch,
                duration: user.duration,
                gender: user.gender
            }

        }
    );
}