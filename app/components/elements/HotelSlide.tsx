import React, { useContext } from "react";

import { HotelsContext } from "@/app/(user)/Home/HotelClient";
import LocationCard from "./LocationCard";
import { IRoom } from "@/app/models/rooms";
import RoomCard from "../Home/RoomCard";
import Image from "next/image";

const HotelSlide = () => {
  const { selectedHotel, rightSlide } = useContext(HotelsContext);

  const roomData = selectedHotel.rooms;
  const hotelData = selectedHotel;

  if (rightSlide == false) {
    return (
      <div className="w-full h-full">
        <LocationCard />
      </div>
    );
  }

  if (!roomData?.[0]?.number) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full h-full border border-indigo-300 max-h-[800px] overflow-auto">
      <div className="flex flex-col min-h-[300px] w-full p-5 overflow-hidden z-3 rounded-2xl">
        <div className="flex justify-between py-4 px-3 items-center w-full">
          <h1 className="text-3xl font-bold text-black  ">
            {selectedHotel.country}
          </h1>
        </div>
        <div className=" flex justify-between py-4 px-3 items-center w-full
         max-h-[300px] overflow-hidden rounded-2xl 
        ">
          <Image
            src={
              "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2127&q=80"
            } 
            alt="location"
            className="mt-[4rem] py-3 -z-[1]"
            width={1000}
            height={500}
          />
        </div>
        <div className="w-full">
          0

        </div>
      </div>

      <div className="flex flex-wrap justify-evenly p-7  items-center gap-4">
        {roomData?.map((room: IRoom) =>
          room?.available ? (
            <RoomCard
              available
              description={room.description}
              image="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=Mn wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
              price={room.price}
              hotel={hotelData}
              location={room.location}
              number={room.number}
              rating={room.rating}
              type={room.type}
              key={room.number}
            />
          ) : null
        )}
      </div>
    </div>
  );
};

export default HotelSlide;
