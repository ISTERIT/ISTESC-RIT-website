import "./reset.css";
import "./globals.css";
import "./shorthand.css";
import "../global.css"
import Font from "@/components/Font";
import Nav from "@/components/Nav/Nav";

export const metadata = {
  title: "ISTE SC RIT",
  description:
    "The ISTE student branch of Rajiv Gandhi Institute of Technology, Kottayam is one of the innovative and performing student branches in Kerala section.Many  technical events are conducted by ISTE  through which we build the top quality engineers needed by our society.",
};

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <Font />
    </head>
    <body>
      <div className="bg"></div>
      <Nav />
      {children}
    </body>
    </html>
  );
}
