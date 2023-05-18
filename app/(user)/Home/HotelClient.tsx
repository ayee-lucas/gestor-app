"use client";

import React, { useState, createContext } from "react";
import HotelSlide from "@/app/components/elements/HotelSlide";
import SearchBar from "@/app/components/elements/SearchBar";
import HotelCard from "@/app/components/elements/HotelCard";
import { IHotel } from "@/app/models/hotels";

interface Props extends IHotel {
  rightSlide: boolean;
  setRightSlide: (value: boolean) => void;
  selectedHotel: IHotel;
  setSelectedHotel: (value: IHotel) => void;
}

export const HotelsContext = createContext<Props>({} as Props);

const HotelClient = ({ hotelsData }: { hotelsData: IHotel[] }) => {
  const [rightSlide, setRightSlide] = useState(false);

  const [selectedHotel, setSelectedHotel] = useState<IHotel>({} as IHotel);

  const value = {
    hotelsData,
    rightSlide,
    selectedHotel,
    setSelectedHotel,
    setRightSlide,
  };

  console.log(rightSlide);

  return (
    <HotelsContext.Provider value={value}>
      <div className="w-full min-h-screen dark:bg-zinc-950">
        <h1 className="py-10 px-4 text-indigo-700 text-4xl font-bold text-right">
          Explore Our Collection of Premier Hotels{" "}
        </h1>

        <SearchBar />

        <div className="grid grid-cols-2 justify-center items-start pl-4 gap-5 w-full">
          <div className="flex flex-col gap-7 py-2 w-full">
            <h1 className="text-2xl font-bold text-indigo-700">Selection</h1>
            {hotelsData.map((hotel: IHotel) => (
              <HotelCard
                key={hotel.name}
                address={hotel.address}
                admin={hotel.admin}
                city={hotel.city}
                country={hotel.country}
                name={hotel.name}
                rating={hotel.rating}
                rooms={hotel.rooms}
              />
            ))}
          </div>
          <div className="relative w-full h-full px-4">
            <div>
              <h1 className="text-4xl  pb-3 font-bold text-black">
                {
                    rightSlide ?  selectedHotel.name :  "Locations" 
                }
              </h1>
            </div>
            <HotelSlide />
          </div>
        </div>
      </div>
    </HotelsContext.Provider>
  );
};

export default HotelClient;
