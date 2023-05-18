"use client";

import React, { useState, useContext } from "react";
import { HotelViewContext, HotelViewContextType } from "./Hotel";
import DeleteHotel from "./DeleteHotel";
import { IHotel } from "@/app/models/hotels";


const HotelRow = ({name, address, city, country, rating, _id}:IHotel) => {
  
  const { setMenu }:HotelViewContextType = useContext(HotelViewContext);

  const handleMenu = (param:string) => {
    setMenu(param)
    console.log(param)
  } 

  const [deletePopup, setDeletePopup] = useState(false);

  return (
    <tr>
      <td className="px-6 py-4 whitespace-no-wrap border-b dark:border-gray-700 border-gray-200">
        <div className="flex items-center">
          <div className="ml-4">
            <div className="text-sm leading-5 font-medium dark:text-white text-gray-900">
              {name}
            </div>
            <div className="text-sm leading-5 dark:text-gray-400 text-gray-500">
              {address}
            </div>
          </div>
        </div>
      </td>

      <td className="px-6 py-4 whitespace-no-wrap border-b dark:border-gray-700 border-gray-200">
        <div className="text-sm leading-5 dark:text-white text-gray-900">{_id}</div>
      </td>

      <td className="px-6 py-4 whitespace-no-wrap border-b dark:border-gray-700 border-gray-200">
        <div className="text-sm leading-5 dark:text-white text-gray-900">{city}</div>
      </td>

      <td className="px-6 py-4 whitespace-no-wrap border-b dark:border-gray-700 border-gray-200">
        <div className="text-sm leading-5 dark:text-white text-gray-900">{country}</div>
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
            <DeleteHotel trigger={deletePopup} setTrigger={setDeletePopup}/>
        </div>
      </td>
    </tr>
  );
};

export default HotelRow;
