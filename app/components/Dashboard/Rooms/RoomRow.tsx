"use client";

import React, { useState, useContext } from "react";
import { RoomViewContext, RoomViewContextType } from "./Room";
import DeleteRoom from "./DeleteRoom";
import { IRoom } from "@/app/models/rooms";


const RoomRow = ({number, type, price, rating, shortDescription, location, image, available}:IRoom) => {
  
  const { setMenu }:RoomViewContextType = useContext(RoomViewContext);

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
              src={image}
              alt=""
            />
          </div>
          <div className="ml-4">
            <div className="text-sm leading-5 font-medium dark:text-white text-gray-900">
              {number} {type}
            </div>
            <div className="text-sm leading-5 dark:text-gray-400 text-gray-500">
              {price}
            </div>
          </div>
        </div>
      </td>

      <td className="px-6 py-4 whitespace-no-wrap border-b dark:border-gray-700 border-gray-200">
        <div className="text-sm leading-5 dark:text-white text-gray-900">{shortDescription}</div>
      </td>

      <td className="px-6 py-4 whitespace-no-wrap border-b dark:border-gray-700 border-gray-200">
        <div className="text-sm leading-5 dark:text-white text-gray-900">{location}</div>
      </td>
      
      <td className="px-6 py-4 whitespace-no-wrap border-b dark:border-gray-700 border-gray-200">
        <div className="text-sm leading-5 dark:text-white text-gray-900">{available > false ? "True" : "False" }</div>
      </td>

      <td className="px-6 py-4 whitespace-no-wrap border-b dark:border-gray-700 border-gray-200">
        <div className="text-sm leading-5 dark:text-white text-gray-900">{rating}</div>
      </td>

      <td className="px-6 py-4 whitespace-no-wrap text-right border-b dark:border-gray-700 border-gray-200 text-sm leading-5 font-medium">
        <div className="flex justify-between px-3">
            <button onClick={()=> handleMenu("Edit")} className="text-indigo-600 dark:text-indigo-500 hover:text-indigo-900 dark:hover:text-gray-300">
                Edit
            </button>
            <button onClick={() => setDeletePopup(true)} className="text-indigo-600 dark:text-indigo-500 hover:text-indigo-900 dark:hover:text-gray-300">
                Delete
            </button>
            <DeleteRoom trigger={deletePopup} setTrigger={setDeletePopup}/>
        </div>
      </td>
    </tr>
  );
};

export default RoomRow;
