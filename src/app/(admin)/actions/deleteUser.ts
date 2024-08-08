"use server";

import User from "@/app/(admin)/lib/User";

interface Rtype {
    msg?: string;
    success: boolean;
}

async function deleteUser(tempID: string): Promise<Rtype> {
    let user = User.findOne({
        tempID: tempID
    });

    if(!user) {
        return {
            success: false,

            msg: "User not found"
        }
    }

    let result = await User.deleteOne({
        tempID: tempID
    });

    return {
        success: result.acknowledged,
    }
}

export default deleteUser;