import React, { useState, useEffect } from "react";
import UserRow from "./UserRow";
import AddUser from "./AddUser";
import { IUser } from "@/app/models/User";

interface Props extends IUser{
    _id?: any;
}

const UserTable = () => {

    const [users, setUsers] = useState<IUser[]>([]);

    const [addPopup, setAddPopup] = useState(false);

    const [noData, setNoData] = useState(false);

    useEffect (() => {
        async function getUsers() {
            const res = await fetch(`/api/User/listusers/`, {
              next: {revalidate: 100}
            });
          
            if (!res.ok) {
                console.log(res)
                setNoData(true);
            }
          
            const users: Props[] = await res.json();
            setUsers(users)
            console.log(users)
        }  

        getUsers();

        }, []);



    return(
        
        <div>
            <h3 className="text-gray-700 dark:text-white text-3xl font-semibold pt-5">Users</h3>
            <div className="flex justify-between my-6 text-sm">
              <button onClick={() => setAddPopup(true)} className="px-4 py-2 bg-gray-00 text-gray-300 rounded-md bg-indigo-700 hover:bg-indigo-500 hover:text-white focus:outline-none focus:bg-indigo-600">
                Add User
              </button>
            </div>
            <div className="flex flex-col">
                <div className="-my-2 py-2 overflow-x-auto overflow-y-auto max-h-[490px] sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                    <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b dark:border-gray-700 border-gray-200">
                        <table className="min-w-full">
                            <thead>
                                <tr>
                                    <th className="px-6 py-3 border-b dark:border-gray-700 border-gray-200 dark:bg-[#100724] bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 dark:text-white uppercase tracking-wider">Names & Email</th>
                                    <th className="px-6 py-3 border-b dark:border-gray-700 border-gray-200 dark:bg-[#100724] bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 dark:text-white uppercase tracking-wider">Username</th>
                                    <th className="px-6 py-3 border-b dark:border-gray-700 border-gray-200 dark:bg-[#100724] bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 dark:text-white uppercase tracking-wider">Identifier</th>
                                    <th className="px-6 py-3 border-b dark:border-gray-700 border-gray-200 dark:bg-[#100724] bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 dark:text-white uppercase tracking-wider">Role</th>
                                    <th className="px-6 py-3 border-b dark:border-gray-700 border-gray-200 dark:bg-[#100724] bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 dark:text-white uppercase tracking-wider">Options</th>
                                </tr>
                            </thead>

                            {noData ? <div>No Data</div> : <tbody className="bg-white dark:bg-slate-800">
                                {users.map((user: IUser) => (
                                    <UserRow key={user.username} name={user.name} surname={user.surname} username={user.username} email={user.email} role={user.role} _id={user._id}/>
                                ))}
                            </tbody>

                            }
                        </table>
                    </div>
                </div>
            </div>
            <AddUser trigger={addPopup} setTrigger={setAddPopup}/>
        </div>

        
    );
}

export default UserTable;