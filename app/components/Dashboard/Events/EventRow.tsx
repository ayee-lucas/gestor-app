"use client";

import React, { useState, useContext } from "react";
import { EventViewContext, EventViewContextType } from "./Event";
import DeleteEvent from "./DeleteEvent";
import { IEvent } from "@/app/models/event";

interface PropsRow extends IEvent {
  _id?: any;
}


const EventRow = ({name, type, description, price, maxCapacity, _id}:PropsRow) => {
  
  const { setMenu }:EventViewContextType = useContext(EventViewContext);
  const [deletePopup, setDeletePopup] = useState(false);

  const handleMenu = (param:string) => {
    setMenu(param)
    console.log(param)
  } 

  const handleDelete = () => {
    setDeletePopup(true);
  };

  return (
    <tr>
      <td className="px-6 py-4 whitespace-no-wrap border-b dark:border-gray-700 border-gray-200">
        <div className="flex items-center">
        <div className="flex-shrink-0 h-10 w-10">
            <img
              className="h-10 w-10 rounded-lg"
              src={"https://images.unsplash.com/photo-1642784353782-91bfdd65920c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"}
              alt=""
            />
          </div>
          <div className="ml-4">
            <div className="text-sm leading-5 font-medium dark:text-white text-gray-900">
              {name}
            </div>
            <div className="text-sm leading-5 dark:text-gray-400 text-gray-500">
              {type}
            </div>
          </div>
        </div>
      </td>

      <td className="px-6 py-4 whitespace-no-wrap border-b dark:border-gray-700 border-gray-200">
        <div className="text-sm leading-5 dark:text-white text-gray-900">{description}</div>
      </td>
      
      <td className="px-6 py-4 whitespace-no-wrap border-b dark:border-gray-700 border-gray-200">
        <div className="text-sm leading-5 dark:text-white text-gray-900">{price}</div>
      </td>

      <td className="px-6 py-4 whitespace-no-wrap border-b dark:border-gray-700 border-gray-200">
        <div className="text-sm leading-5 dark:text-white text-gray-900">{maxCapacity}</div>
      </td>

      <td className="px-6 py-4 whitespace-no-wrap text-right border-b dark:border-gray-700 border-gray-200 text-sm leading-5 font-medium">
        <div className="flex justify-between px-3">
            <button onClick={()=> handleMenu("Edit")} className="text-indigo-600 dark:text-indigo-500 hover:text-indigo-900 dark:hover:text-gray-300">
                Edit
            </button>
            <button onClick={handleDelete} className="text-indigo-600 dark:text-indigo-500 hover:text-indigo-900 dark:hover:text-gray-300">
                Delete
            </button>
            <DeleteEvent trigger={deletePopup} _id={_id} setTrigger={setDeletePopup}/>
        </div>
      </td>
    </tr>
  );
};

export default EventRow;
