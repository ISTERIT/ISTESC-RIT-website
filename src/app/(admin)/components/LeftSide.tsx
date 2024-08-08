"use client";
import {IconLogout, IconSearch, IconX,} from "@tabler/icons-react";
import React, {useEffect, useState} from "react";
import {IUser} from "@/app/(admin)/lib/User";
import {getUserList} from "@/app/(admin)/actions/getUserList";
import Spinner from "@/app/(admin)/components/Loader";
import UsersList from "@/app/(admin)/components/UsersList";
import {useRouter} from "next/navigation";

let delete_cookie = function(name: string) {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};

export function LeftSide() {
    const router = useRouter();
    const [users, setUsers] = useState<IUser[]>([]);
    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        getUserList().then((data) => {
            setUsers(data);
            setIsLoading(false);
        });
    }, []);

    return <aside className="flex flex-col w-[25%] h-full bg-admin_bg">
        <div className="bg-white p-3">
            <div className="mb-4 flex justify-between items-center pr-3">
                <h1 className="text-2xl">ISTE Newsletter</h1>
                <button className="text-red-500" onClick={() => {
                    delete_cookie('token');
                    router.push("/login");
                }}><IconLogout size={25}/></button>
            </div>
            <form className="w-full flex">
                <input type="text" placeholder="Search"
                       className="w-[calc(100%-50px)] px-4 py-3 bg-[#f6f6f6] rounded-l-full placeholder:text-gray-400 focus:outline-0"
                       onChange={(e) => {
                           setSearch(e.target.value);
                       }} value={search}/>
                <button
                    className="w-[50px] bg-[#f6f6f6] flex items-center justify-center rounded-r-full hover:bg-[#f0f0f0]"
                    onClick={(e) => {
                        e.preventDefault();
                        setSearch('');
                    }}
                >
                    {search ? <IconX/> : <IconSearch/>}
                </button>
            </form>
        </div>
        <div className="w-full flex-1 bg-opacity-50 overflow-y-scroll p-2 space-y-1">
            {
                isLoading ?
                    <div className="flex items-center justify-center h-[200px]">
                        <Spinner className="w-[50px] border-black border-2"/>
                    </div> :
                    users.length === 0 ?
                        <div className="flex items-center justify-center h-[200px]">
                            No users found
                        </div>
                        :
                        <UsersList users={users} filter={search} setUsers={setUsers}/>
            }
        </div>
    </aside>
}