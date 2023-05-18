import React, { useContext } from "react";
import { HotelsContext } from "@/app/(user)/Home/HotelClient";
import Image from "next/image";
import { inter } from "@/app/fonts";
import { AiOutlineArrowRight } from "react-icons/ai";
import Rating from "./Rating";
import { IHotel } from "@/app/models/hotels";

const HotelCard = ({ address, city, country, name, rating, rooms, description }: IHotel) => {
  const { handleRightSlide, setSelectedHotel } = useContext(HotelsContext);

  const handleClick = () => {
    setSelectedHotel({
      address,
      city,
      country,
      name,
      rating,
      rooms,
      description,
    });

    handleRightSlide();
  };

  return (
    <div className="">
      <div
        onClick={handleClick}
        className="w-full max-w-[1000px] flex items-center h-full drop-shadow-2xl  border border-gray-300 rounded-md hover:bg-gray-100 transition-all cursor-pointer select-none"
      >
        <div className="relative overflow-hidden w-full max-w-[300px]  min-h-[300px]">
          <Image
            src={
              "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            }
            className="absolute object-cover w-full h-full"
            width={1000}
            height={1000}
            alt="hotel"
          />
        </div>

        <div className={`p-4 w-full`}>
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-2xl">{name}</h1>
            <h1 className={`${inter.className} font-light`}>{country}</h1>
          </div>
          <div className="wix-font py-3 flex justify-between">
            <div>
              <h2 className="text-xl font-medium">{city}</h2>
              <h3 className="text-sm font-light">{address}</h3>
            </div>
            <div className="py-4">
              <Rating rating={rating} />
            </div>
          </div>
          Rooms: <span className="font-bold px-4">{rooms?.length}</span>
          <button className="flex my-4 justify-center items-center">
            Show Rooms <AiOutlineArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
