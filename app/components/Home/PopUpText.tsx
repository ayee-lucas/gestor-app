import React from "react";
import { playfair } from "@/app/fonts";
import { IHotel } from "@/app/models/hotels";

interface props {
  price: number;
  description: string;
  hotel?: IHotel;
}

const PopUpText = ({ hotel, price, description }: props) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <span
          className={`text-3xl font-semibold first-letter:text-indigo-600 ${playfair.className}`}
        >
          {hotel?.name ? hotel?.name : "Room"}
        </span>
        <span className="text-3xl ">{price}$</span>
      </div>
      <div className=" text-xl font-semibold">
        {hotel?.name ? `${hotel?.country}, ${hotel?.city}` : "Description"}
      </div>
      <div>{description}</div>
    </>
  );
};

export default PopUpText;
