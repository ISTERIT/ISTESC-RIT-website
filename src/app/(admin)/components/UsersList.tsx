import {IUser} from "@/app/(admin)/lib/User";
import React, {memo} from "react";
import {IconGenderFemale, IconGenderMale, IconId, IconMail, IconPhone, IconTrashX} from "@tabler/icons-react";
import deleteUser from "@/app/(admin)/actions/deleteUser";
import Spinner from "@/app/(admin)/components/Loader";

function UsersList({users, setUsers, filter}: {
    users: IUser[],
    setUsers: React.Dispatch<React.SetStateAction<IUser[]>>,
    filter?: string
}) {

    let arr = users.filter((v) => v.name.toLowerCase().includes(filter?.toLowerCase() || '')).map((user, i) => {

            return <div className="p-2 bg-white rounded-md" key={user.tempID}>
                <div className='flex justify-between items-center'>
                <span className="font-bold flex items-center gap-2">
                    <div className="size-[30px] rounded-full bg-primary_color flex items-center justify-center p-1">
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
                    <div className="space-y-1 mt-2 opacity-60 font-bold text-[12px] max-w-[70%]">
                        <a href={`mailto:${user.email}`} className="flex gap-1 items-center hover:text-blue-700">
                            <IconMail size="20px"/>{user.email}
                        </a>
                        <a href={`tel:${user.phoneNumber}`} className="flex gap-1 items-center hover:text-blue-700">
                            <IconPhone size="20px"/>{user.phoneNumber}
                        </a>
                        <span className="flex gap-1 items-center truncate">
                            <IconId className="min-w-[20px]"/>{user.tempID}
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
                        <Spinner className="hidden w-[18px] spinner border-black border-2"/>
                    </button>
                </div>
            </div>
        });

    return <>
        {arr.length === 0 ? <div className="flex items-center justify-center h-[200px]">Noting found :(</div> : arr}
    </>
}

export default memo(UsersList);