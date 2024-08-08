import type {NextRequest} from "next/server";
import {checkIfCorrect} from "@/app/(admin)/utils/utils";

export function middleware(request: NextRequest) {
    const token = request.cookies.get("token")?.value;

    if (!token) {
        return Response.redirect(new URL("/login", request.url));
    }

    try {
        let data = JSON.parse(Buffer.from(token, 'base64').toString('utf-8'));
        if (!checkIfCorrect(data.email || '', data.password || '')) {
            return Response.redirect(new URL("/login", request.url));
        }
    } catch (e) {
        return Response.redirect(new URL("/login", request.url));
    }
}

export const config = {
    matcher: "/newsletter/:path*",
};