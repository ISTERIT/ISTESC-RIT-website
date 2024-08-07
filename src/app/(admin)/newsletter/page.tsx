import {LeftSide} from "@/app/(admin)/components/LeftSide";
import {RightSide} from "@/app/(admin)/components/RightSide";
import "./common.css";
import {Toaster} from "@/components/ui/sonner";

export default async function Home() {
    return (
        <main className="flex gap-1 size-full overflow-hidden">
            <LeftSide/>
            <RightSide/>
            <Toaster position="bottom-center" richColors pauseWhenPageIsHidden theme="light" closeButton/>
        </main>
    );
}
