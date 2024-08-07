"use client";
import {IconSearch, IconX,} from "@tabler/icons-react";
import React, {useEffect, useState} from "react";
import {IUser} from "@/app/(admin)/lib/User";
import {getUserList} from "@/app/(admin)/actions/getUserList";
import Spinner from "@/app/(admin)/components/Loader";
import UsersList from "@/app/(admin)/components/UsersList";

export function LeftSide() {
    const [users, setUsers] = useState<IUser[]>([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        getUserList().then((data) => {
            setUsers(data);
        });
    }, []);

    return <aside className="flex flex-col w-[25%] h-full bg-admin_bg">
        <div className="bg-white p-3">
            <h1 className="text-2xl mb-4">ISTE Newsletter</h1>
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
                users.length === 0 ?
                    <div className="flex items-center justify-center h-[200px]">
                        <Spinner className="w-[50px] border-black border-2"/>
                    </div>
                    :
                    <UsersList users={users} filter={search} setUsers={setUsers}/>
            }
        </div>
    </aside>
}