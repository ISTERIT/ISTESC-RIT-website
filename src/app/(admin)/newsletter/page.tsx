import {IconSearch} from "@tabler/icons-react";
import {getUserList} from "@/app/(admin)/actions/getUserList";

export default function Home() {

    getUserList();

    return (
        <main className="flex gap-1 size-full">
            <aside className="flex flex-col w-[25%] h-full bg-admin_bg">
                <div className="bg-white p-3">
                    <h1 className="text-2xl mb-4">ISTE Newsletter</h1>
                    <form className="w-full flex">
                        <input type="text" placeholder="Search"
                               className="flex-1 px-4 py-3 bg-[#f6f6f6] rounded-l-full placeholder:text-gray-400 focus:outline-0"/>
                        <button className="bg-[#f6f6f6] rounded-r-full px-5"><IconSearch/></button>
                    </form>
                </div>
                <div className="w-full flex-1 bg-white bg-opacity-50">
                    {
                        "Hello"
                    }
                </div>
            </aside>

            <section className="bg-admin_bg flex-1 p-3">
                <h1>Newsletter Admin</h1>
                <p>Manage the newsletter here.</p>
            </section>
        </main>
    );
}
