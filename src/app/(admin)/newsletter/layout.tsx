import "./globals.css";
import "../../global.css"
import {poppins} from "@/app/(admin)/lib/fonts";
import {Toaster} from "@/components/ui/sonner";

export const metadata = {
    title: "ISTE Newsletter Admin",
    description: "ISTE Newsletter Admin Page"
};

export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={poppins.className}>
        {children}
        <Toaster position="bottom-center" richColors pauseWhenPageIsHidden theme="light" closeButton/>

        </body>
        </html>
    );
}
