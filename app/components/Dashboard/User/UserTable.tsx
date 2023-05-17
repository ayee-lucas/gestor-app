import React, { useState } from "react";
import UserRow from "./UserRow";
import AddUser from "./AddUser";

const UserTable = () => {

    const [addPopup, setAddPopup] = useState(false);
    
    return(
        
        <div>
            <h3 className="text-gray-700 dark:text-white text-3xl font-semibold pt-5">Users</h3>
            <div className="flex justify-between my-6 text-sm">
              <button onClick={() => setAddPopup(true)} className="px-4 py-2 bg-gray-00 text-gray-300 rounded-md bg-indigo-700 hover:bg-indigo-500 hover:text-white focus:outline-none focus:bg-indigo-600">
                Add User
              </button>
            </div>
            <div className="flex flex-col">
                <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                    <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b dark:border-gray-700 border-gray-200">
                        <table className="min-w-full">
                            <thead>
                                <tr>
                                    <th className="px-6 py-3 border-b dark:border-gray-700 border-gray-200 dark:bg-[#100724] bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 dark:text-white uppercase tracking-wider">Names & Email</th>
                                    <th className="px-6 py-3 border-b dark:border-gray-700 border-gray-200 dark:bg-[#100724] bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 dark:text-white uppercase tracking-wider">Identifier</th>
                                    <th className="px-6 py-3 border-b dark:border-gray-700 border-gray-200 dark:bg-[#100724] bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 dark:text-white uppercase tracking-wider">Tel</th>
                                    <th className="px-6 py-3 border-b dark:border-gray-700 border-gray-200 dark:bg-[#100724] bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 dark:text-white uppercase tracking-wider">Role</th>
                                    <th className="px-6 py-3 border-b dark:border-gray-700 border-gray-200 dark:bg-[#100724] bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 dark:text-white uppercase tracking-wider">Options</th>
                                </tr>
                            </thead>

                            <tbody className="bg-white dark:bg-slate-800">
                                <UserRow name={"Juan"} surname={"Morales"} email={"jmorales@kinal.edu.gt"} identifier={"64513163106354"} tel={"45965301"} role={"Client"} />
                                <UserRow name={"Alan"} surname={"Lopez"} email={"alopez@kinal.edu.gt"} identifier={"54213241032"} tel={"00469351"} role={"Admin"} />
                                <UserRow name={"Fernando"} surname={"Alegria"} email={"falegria@kinal.edu.gt"} identifier={"46874065413"} tel={"21756410"} role={"Client"} />
                                <UserRow name={"Pablo"} surname={"Vasquez"} email={"pvasquez@kinal.edu.gt"} identifier={"04684640121"} tel={"21032650"} role={"Client"} />
                                <UserRow name={"Carlos"} surname={"Mendez"} email={"cmendez@kinal.edu.gt"} identifier={"9870890420"} tel={"84965320"} role={"Client"} />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <AddUser trigger={addPopup} setTrigger={setAddPopup}/>
        </div>

        
    );
}

export default UserTable;