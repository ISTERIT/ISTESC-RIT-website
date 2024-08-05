import "./globals.css";
import "../../global.css"
import {Poppins} from "next/font/google";

export const metadata = {
    title: "ISTE Newsletter Admin",
    description: "ISTE Newsletter Admin Page"
};

const poppins = Poppins({
    weight: "400",
    subsets: ["latin"],
})

export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={poppins.className}>
        {children}
        </body>
        </html>
    );
}
