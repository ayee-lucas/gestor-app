"use client";

import React, { useState, createContext } from "react";
import HotelSlide from "@/app/components/elements/HotelSlide";
import SearchBar from "@/app/components/elements/SearchBar";
import HotelCard from "@/app/components/elements/HotelCard";
import { IHotel } from "@/app/models/hotels";
import LocationCard from "@/app/components/elements/LocationCard";
import { ILocation } from "@/app/models/locations";

interface Props extends IHotel {
  rightSlide: boolean;
  handleRightSlide: () => void;
  selectedHotel: IHotel;
  setSelectedHotel: (value: IHotel) => void;
}

interface PropsHotelClient {
  hotelsData: IHotel[];
  locationData: ILocation[];
}

export const HotelsContext = createContext<Props>({} as Props);

const HotelClient = (
  { hotelsData, locationData }:PropsHotelClient ,

) => {
  const [rightSlide, setRightSlide] = useState(false);

  const [selectedHotel, setSelectedHotel] = useState<IHotel>({} as IHotel);

  const handleRightSlide = () => {
    setRightSlide(!rightSlide);
  };

  const value = {
    hotelsData,
    rightSlide,
    selectedHotel,
    setSelectedHotel,
    handleRightSlide,
  };

  return (
    <HotelsContext.Provider value={value}>
      <div
        className={
          rightSlide
            ? "fixed cursor-pointer top-0 right-0 bottom-0 left-0  bg-black opacity-40 transition-all z-40"
            : "fixed top-0 right-[100%] bottom-0 left-0  bg-black duration-[300ms] opacity-10 transition-all z-40"
        }
        onClick={handleRightSlide}
      />

      <HotelSlide />

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
                description={hotel.description}
                _id={hotel._id}
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
              <h1 className="text-4xl py-3  pb-3 font-bold text-black">
                Locations
                <div className="py-4">
                {locationData.map((location: ILocation) => (
                  <LocationCard country={location.name} city={location.address} key={location.name} />
                ))}
                </div>

              </h1>
            </div>
          </div>
        </div>
      </div>
    </HotelsContext.Provider>
  );
};

export default HotelClient;
