import {LeftSide} from "@/app/(admin)/components/LeftSide";
import {RightSide} from "@/app/(admin)/components/RightSide";
import "./common.css";

export default async function Home() {
    return (
        <main className="flex gap-1 size-full">
            <LeftSide/>
            <RightSide/>
        </main>
    );
}
