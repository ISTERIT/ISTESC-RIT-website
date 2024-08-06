"use client";

import {
    IconGenderFemale,
    IconGenderMale,
    IconId,
    IconMail,
    IconPhone,
    IconSearch,
    IconTrashX
} from "@tabler/icons-react";
import React, {useEffect, useState} from "react";
import {IUser} from "@/app/(admin)/lib/User";
import {getUserList} from "@/app/(admin)/actions/getUserList";
import {Skeleton} from "@/components/ui/skeleton";
import Spinner from "@/app/(admin)/components/Loader";
import deleteUser from "@/app/(admin)/actions/deleteUser";

function Loading() {
    return <div>
        <div className="flex gap-2">
            <Skeleton className="h-[50px] w-[50px] rounded-xl"/>
            <Skeleton className="h-[50px] flex-1 rounded-xl"/>
        </div>
        <div className="flex justify-between items-end">
            <div>
                <Skeleton className="h-[15px] w-[60%] mt-2 rounded-xl"/>
                <Skeleton className="h-[15px] w-[60%] mt-2 rounded-xl"/>
                <Skeleton className="h-[15px] w-[60%] mt-2 rounded-xl"/>
            </div>
            <Skeleton className="h-[40px] w-[40px] rounded-xl"/>
        </div>
    </div>
}


export function LeftSide() {
    const [users, setUsers] = useState<IUser[]>([]);

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
                       className="flex-1 px-4 py-3 bg-[#f6f6f6] rounded-l-full placeholder:text-gray-400 focus:outline-0"/>
                <button className="bg-[#f6f6f6] rounded-r-full px-5"><IconSearch/></button>
            </form>
        </div>
        <div className="w-full flex-1 bg-opacity-50 overflow-y-scroll p-2 space-y-1">
            {
                users.length === 0 ?
                    <div className="flex flex-col gap-4">
                        <Loading/>
                        <Loading/>
                        <Loading/>
                    </div>
                    :
                    users.map((user, i) => {
                        return <div className="p-2 bg-white rounded-md" key={user.tempID}>
                            <div className='flex justify-between items-center'>
                                <span className="font-bold flex items-center gap-2">
                                    <div
                                        className="size-[30px] rounded-full bg-primary_color flex items-center justify-center p-1">
                                        {
                                            user.gender === 'M' ?
                                                <IconGenderMale/> :
                                                <IconGenderFemale/>
                                        }
                                    </div>
                                    {user.name}
                                </span>
                                <span
                                    className="flex py-1 items-center text-sm font-bold w-[40px] bg-primary_color justify-center rounded">
                                    {user.branch}
                                </span>
                            </div>
                            <div className="flex justify-between items-end">
                                <div className="space-y-1 mt-2 opacity-60 font-bold text-[12px]">
                                    <a href={`mailto:${user.email}`}
                                       className="flex gap-1 items-center hover:text-blue-700"><IconMail
                                        size="20px"/>{user.email}</a>
                                    <a href={`tel:${user.phoneNumber}`}
                                       className="flex gap-1 items-center hover:text-blue-700"><IconPhone
                                        size="20px"/>{user.phoneNumber}</a>
                                    <span className="flex gap-1 items-center">
                                        <IconId/>
                                        {user.tempID}
                                    </span>
                                </div>
                                <button id={user.tempID}
                                        className="user-del-btn hover:scale-125 disabled:grayscale disabled:hover:scale-1"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            if (confirm(`Are you sure you want to remove the user ${user.name}?`)) {
                                                let elm = document.getElementById(user.tempID);
                                                if (elm) {
                                                    elm.setAttribute('disabled', 'true');
                                                    deleteUser(user.tempID).then(r => {
                                                        if (r.success) {
                                                            setUsers(users.filter(u => u.tempID !== user.tempID));
                                                        } else {
                                                            elm.setAttribute('disabled', 'false');
                                                        }
                                                    }).finally(() => {
                                                        elm.setAttribute('disabled', 'false');
                                                    });
                                                }
                                            }
                                        }}>
                                    <IconTrashX className="text-red-500 del-ic"/>
                                    <Spinner className="hidden w-[24px] spinner"/>
                                </button>
                            </div>
                        </div>
                    })}
        </div>
    </aside>
}