import "../../global.css"
import "./login.css"
import {Toaster} from "@/components/ui/sonner";

export const metadata = {
    title: 'Login | ISTE Newsletter',
    description: 'Login to Newsletter',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
        {children}
        <Toaster position="bottom-center" richColors pauseWhenPageIsHidden theme="light" closeButton/>
        </body>
        </html>
    )
}
