"use client";
import { poppins } from "@/app/(admin)/lib/fonts";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from 'next/navigation'

export default function Login() {
    const router = useRouter()
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    return <main className={`${poppins.className} w-full h-full flex items-center justify-center`}>
        <div className="bg-white p-5 flex flex-col border-2 rounded-lg relative">
            <h1 className="text-3xl mb-2">Newsletter Login</h1>
            <p className="mb-10 text-[14px] text-opacity-60 text-black">Login to use the ISTE newsletter admin page</p>
            <form className="flex flex-col">
                <label htmlFor="email">Email<span className="text-red-500 opacity-60">*</span></label>
                <input type="email"
                       name="email"
                       className="mt-2 mb-5 w-full rounded-full px-5 py-3 bg-[#f6f6f6]"
                       placeholder="xyz@abc.com"
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                       required />

                <label htmlFor="password">Password<span className="text-red-500 opacity-60">*</span></label>
                <input type="password"
                       name="password"
                       placeholder="very strong password"
                       className="w-full mt-2 mb-5 rounded-full px-5 py-3 bg-[#f6f6f6]"
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                       required />

                <button
                    className="hover:bg-green-400 transition-colors mt-5 mb-5 bg-primary_color rounded-full px-5 py-2"
                    onClick={(e) => {
                        e.preventDefault();
                        if (!email || !password) {
                            toast.error("Fields are empty");
                            return;
                        }

                        fetch("/api/login", {
                            method: "POST",
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                email,
                                password,
                            }),
                        }).then(e => e.json())
                            .then((e) => {
                                if(e.ok) {
                                    toast.success("Login success. Redirecting...");
                                    router.push('/newsletter');
                                } else {
                                    toast.error("Invalid email or password");
                                }
                            })
                            .catch(() => {
                                console.log("Error");
                            });
                    }}
                >
                    Login
                </button>
            </form>
            <span
                className="absolute bottom-1 right-1 text-[10px] select-none text-opacity-10 text-black">@fbn776</span>
        </div>
    </main>;
}