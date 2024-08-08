"use client";

import {toast} from "sonner";
import {useState} from "react";
import getEmails from "@/app/(admin)/actions/getEmails";

async function sendMailToAll(subject: string, message: string) {
    try {
        let emails = await getEmails();
        // let emails = ["fbn776@gmail.com"];

        if(emails.length === 0) {
            return {
                ok: false,
                message: "No emails found"
            }
        }

        await fetch("/api/mail", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                subject: subject,
                message: message,
                emails: emails
            }),
        });

        return {
            ok: true,
            message: "Success",
            emailLen: emails.length
        }
    } catch (e) {

    }
}

export function RightSide() {
    let [subject, setSubject] = useState('');
    let [message, setMessage] = useState('');

    return <section className="bg-admin_bg w-[calc(100%-25%)] p-3 overflow-hidden">
        <form className="rounded-md bg-white w-full h-full p-5 flex flex-col justify-between gap-5">
            <div className="flex flex-col flex-1">
                <label htmlFor="subject">Subject</label>
                <textarea value={subject} onChange={(e) => setSubject(e.target.value)} name="subject" className="mt-2 bg-[#f6f6f6] w-full p-2 rounded-md border border-gray-300 resize-none"
                          placeholder="Enter subject here"/>

                <label htmlFor="message" className="mt-4">Message</label>
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    name="message"
                    className="flex-1 mt-2 h-[300px] bg-[#f6f6f6] w-full p-2 rounded-md border border-gray-300 resize-none"
                    placeholder="Hope you're having a good day..."/>
            </div>
            <div className="flex w-full justify-end">
                <button onClick={(e) => {
                    e.preventDefault();

                    if (!subject || !message) {
                        toast.error("Please fill in all fields.");
                        return;
                    }
                    let status = sendMailToAll(subject, message);

                    toast.promise(status, {
                        loading: 'Sending mails...',
                        success: (data) => {
                            return `Successfully sent ${data?.emailLen} emails`;
                        },
                        error: `Failed to send emails`,
                    });
                }} className="px-10 py-2 font-bold hover:scale-110 transition-transform rounded-full bg-green-500 text-white">Send</button>
            </div>
        </form>
    </section>
}