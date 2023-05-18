import React, { useState, useEffect } from "react";
import AddRoom from "./AddRoom";
import RoomRow from "./RoomRow";
import { IRoom } from "@/app/models/rooms";

const RoomTable = () => {

    const [rooms, setRooms] = useState<IRoom[]>([]);

    const [addPopup, setAddPopup] = useState(false);

    useEffect (() => {
        async function getRooms() {
            const res = await fetch(`/api/Rooms/`, {
              next: {revalidate: 100}
            });
          
            if (!res.ok) throw new Error(res.statusText);
          
            const rooms: IRoom[] = await res.json();
            setRooms(rooms)
            console.log(rooms)
        }  

        getRooms();

        }, []);

    return(
        
        <div>
            <h3 className="text-gray-700 dark:text-white text-3xl font-semibold pt-5">Rooms</h3>
            <div className="flex justify-between my-6 text-sm">
              <button onClick={() => setAddPopup(true)} className="px-4 py-2 bg-gray-00 text-gray-300 rounded-md bg-indigo-700 hover:bg-indigo-500 hover:text-white focus:outline-none focus:bg-indigo-600">
                Add Room
              </button>
            </div>
            <div className="flex flex-col">
                <div className="-my-2 py-2 overflow-x-auto overflow-y-auto max-h-[490px] sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                    <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b dark:border-gray-700 border-gray-200">
                        <table className="min-w-full">
                            <thead>
                                <tr>
                                    <th className="px-6 py-3 border-b dark:border-gray-700 border-gray-200 dark:bg-[#100724] bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 dark:text-white uppercase tracking-wider">Number, Type & Price</th>
                                    <th className="px-6 py-3 border-b dark:border-gray-700 border-gray-200 dark:bg-[#100724] bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 dark:text-white uppercase tracking-wider">Short Description</th>
                                    <th className="px-6 py-3 border-b dark:border-gray-700 border-gray-200 dark:bg-[#100724] bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 dark:text-white uppercase tracking-wider">Location</th>
                                    <th className="px-6 py-3 border-b dark:border-gray-700 border-gray-200 dark:bg-[#100724] bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 dark:text-white uppercase tracking-wider">Available</th>
                                    <th className="px-6 py-3 border-b dark:border-gray-700 border-gray-200 dark:bg-[#100724] bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 dark:text-white uppercase tracking-wider">Rating</th>
                                    <th className="px-6 py-3 border-b dark:border-gray-700 border-gray-200 dark:bg-[#100724] bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 dark:text-white uppercase tracking-wider">Options</th>
                                </tr>
                            </thead>

                            <tbody className="bg-white dark:bg-slate-800">
                                {rooms.map((room: IRoom) => (
                                    <RoomRow key={room.number} number={room.number} type={room.type} description={room.description} price={room.price} rating={room.rating} shortDescription={room.shortDescription} location={room.location} image={room.image} available={room.available}/>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <AddRoom trigger={addPopup} setTrigger={setAddPopup}/>
        </div>

        
    );
}

export default RoomTable;