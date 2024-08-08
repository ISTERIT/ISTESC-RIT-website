import { cookies } from "next/headers";
import { NextRequest } from "next/server";
import { checkIfCorrect } from "@/app/(admin)/utils/utils";

export async function POST(req: NextRequest) {
    const { email, password } = await req.json();
    try {
        if (!email || !password)
            return Response.json({
                ok: false,
                message: "All fields are required",
            }, {
                status: 400,
            });

        let isCorrect = checkIfCorrect(email, password);

        if (!isCorrect)
            return Response.json({
                ok: false,
                message: "Incorrect email or password",
            }, {
                status: 401,
            });


        cookies().set("token", Buffer.from((JSON.stringify({email, password}))).toString('base64'), {
            secure: true,
            httpOnly: false,
        });

        return Response.json({
            ok: true
        }, {
            status: 201
        });
    } catch (error) {
        console.error(error);
    }
}