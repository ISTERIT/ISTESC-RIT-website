import {NextRequest} from "next/server";

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
        user: process.env.GMAIL_mail,
        pass: process.env.GMAIL_password,
    },
    secure: true,
});

export async function POST(req: NextRequest) {
    const { emails, subject, message } = await req.json();

    await new Promise((resolve, reject) => {
        transporter.verify(function (error, success) {
            if (error) {
                console.log(error);
                reject(error);
            } else {
                console.log("Server is ready to take our messages");
                resolve(success);
            }
        });
    });


    const mailData = {
        from: process.env.GMAIL_mail,
        to: emails,
        subject: subject,
        text: message,
        html: `${message}`,
    };

    console.log(mailData);

    await new Promise((resolve, reject) => {
        transporter.sendMail(mailData, (err, info) => {
            if (err) {
                console.error(err);
                reject(err);
            } else {
                console.log(info);
                resolve(info);
            }
        });
    });

    return Response.json({
        message: "Success",
    }, {
        status: 200
    });
}