import jwt from "jsonwebtoken";

const key = process.env.TOKEN_KEY || "Some very secret key";

export default function createJWT(email: string, password: string) {
    return jwt.sign({email, password}, key, {
        expiresIn: 2 * 24 * 60 * 50
    });
}

