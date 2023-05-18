"use client";

import React, { useState, useContext } from "react";
import { UserViewContext, UserViewContextType } from "./User";
import DeleteUser from "./DeleteUser";
import { IUser } from "@/app/models/User";


const UserRow = ({name, surname, username, email, role, _id}:IUser) => {
  
  const { setMenu }:UserViewContextType = useContext(UserViewContext);

  const handleMenu = (param:string) => {
    setMenu(param)
    console.log(param)
  } 

  const [deletePopup, setDeletePopup] = useState(false);

  return (
    <tr>
      <td className="px-6 py-4 whitespace-no-wrap border-b dark:border-gray-700 border-gray-200">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <img
              className="h-10 w-10 rounded-full"
              src="https://cdn.icon-icons.com/icons2/1993/PNG/512/account_avatar_face_man_people_profile_user_icon_123197.png"
              alt=""
            />
          </div>

          <div className="ml-4">
            <div className="text-sm leading-5 font-medium dark:text-white text-gray-900">
              {name} {surname}
            </div>
            <div className="text-sm leading-5 dark:text-gray-400 text-gray-500">
              {email}
            </div>
          </div>
        </div>
      </td>

      <td className="px-6 py-4 whitespace-no-wrap border-b dark:border-gray-700 border-gray-200">
        <div className="text-sm leading-5 dark:text-white text-gray-900">{username}</div>
      </td>

      <td className="px-6 py-4 whitespace-no-wrap border-b dark:border-gray-700 border-gray-200 text-sm leading-5 dark:text-white text-gray-500">
        {_id}
      </td>

      <td className="px-6 py-4 whitespace-no-wrap border-b dark:border-gray-700 border-gray-200 text-sm leading-5 dark:text-white text-gray-500">
        {role}
      </td>

      <td className="px-6 py-4 whitespace-no-wrap text-right border-b dark:border-gray-700 border-gray-200 text-sm leading-5 font-medium">
        <div className="flex justify-between px-3">
            <button onClick={()=> handleMenu("Edit")} className="text-indigo-600 dark:text-indigo-500 hover:text-indigo-900 dark:hover:text-gray-300">
                Edit
            </button>
            <button onClick={() => setDeletePopup(true)} className="text-indigo-600 dark:text-indigo-500 hover:text-indigo-900 dark:hover:text-gray-300">
                Delete
            </button>
            <DeleteUser trigger={deletePopup} setTrigger={setDeletePopup}/>
        </div>
      </td>
    </tr>
  );
};

export default UserRow;
