import { IHotel } from "@/app/models/hotels";
import Image from "next/image";
import React from "react";



const LocationCard = ({ country, city }: IHotel) => {
  return (
    <div className="w-full h-full border my-2 to-black max-h-[500px] shadow-md select-none hover:bg-slate-50 cursor-pointer">
      <div className="w-full h-full flex flex-col max-h-[500px] rounded-lg">
        <div className="w-full max-h-[400px] overflow-hidden">
          <Image
            src={
              "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
            }
            width={1000}
            height={1000}
            className="max-h-[500px] object-right-bottom  object-cover"
            alt="location"
          />
        </div>
        <div className="dark:text-white p-4 font-semibold text-xl">
          { country } <br />
          <span className="text-gray-400 font-normal">{ city }</span>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
