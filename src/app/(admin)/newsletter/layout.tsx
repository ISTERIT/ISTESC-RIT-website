import "./globals.css";

export const metadata = {
    title: "ISTE Newsletter Admin",
    description: "ISTE Newsletter Admin Page"
};

export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
        {children}
        </body>
        </html>
    );
}
