import React, { useState, useEffect } from "react";
import HotelRow from "./HotelRow";
import AddHotel from "./AddHotel";
import { IHotel } from "@/app/models/hotels";

const HotelTable = () => {

    const [hotels, setHotels] = useState<IHotel[]>([]);

    const [addPopup, setAddPopup] = useState(false);

    useEffect (() => {
        async function getHotels() {
            const res = await fetch(`/api/Hotels/`, {
              next: {revalidate: 100}
            });
          
            if (!res.ok) throw new Error(res.statusText);
          
            const hotels: IHotel[] = await res.json();
            setHotels(hotels)
            console.log(hotels)
        }  

        getHotels();

        }, []);

    return(
        
        <div>
            <h3 className="text-gray-700 dark:text-white text-3xl font-semibold pt-5">Hotels</h3>
            <div className="flex justify-between my-6 text-sm">
              <button onClick={() => setAddPopup(true)} className="px-4 py-2 bg-gray-00 text-gray-300 rounded-md bg-indigo-700 hover:bg-indigo-500 hover:text-white focus:outline-none focus:bg-indigo-600">
                Add Hotel
              </button>
            </div>
            <div className="flex flex-col">
                <div className="-my-2 py-2 overflow-x-auto overflow-y-auto max-h-[490px] sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                    <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b dark:border-gray-700 border-gray-200">
                        <table className="min-w-full">
                            <thead>
                                <tr>
                                    <th className="px-6 py-3 border-b dark:border-gray-700 border-gray-200 dark:bg-[#100724] bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 dark:text-white uppercase tracking-wider">Name & Adress</th>
                                    <th className="px-6 py-3 border-b dark:border-gray-700 border-gray-200 dark:bg-[#100724] bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 dark:text-white uppercase tracking-wider">Id</th>
                                    <th className="px-6 py-3 border-b dark:border-gray-700 border-gray-200 dark:bg-[#100724] bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 dark:text-white uppercase tracking-wider">City</th>
                                    <th className="px-6 py-3 border-b dark:border-gray-700 border-gray-200 dark:bg-[#100724] bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 dark:text-white uppercase tracking-wider">Country</th>
                                    <th className="px-6 py-3 border-b dark:border-gray-700 border-gray-200 dark:bg-[#100724] bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 dark:text-white uppercase tracking-wider">Rating</th>
                                    <th className="px-6 py-3 border-b dark:border-gray-700 border-gray-200 dark:bg-[#100724] bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 dark:text-white uppercase tracking-wider">Rooms</th>
                                    <th className="px-6 py-3 border-b dark:border-gray-700 border-gray-200 dark:bg-[#100724] bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 dark:text-white uppercase tracking-wider">Options</th>
                                </tr>
                            </thead>

                            <tbody className="bg-white dark:bg-slate-800">
                                {hotels.map((hotel: IHotel) => (
                                    <HotelRow key={hotel.name} name={hotel.name} address={hotel.address} city={hotel.city} country={hotel.country} rating={hotel.rating} _id={hotel._id}/>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <AddHotel trigger={addPopup} setTrigger={setAddPopup}/>
        </div>

        
    );
}

export default HotelTable;