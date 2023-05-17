"use client";
import React, { useContext } from "react";
import { RoomCardContext, RoomCardProps } from "./RoomCard";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";

const RoomPopUp = ({ hotel, image, location, price }: RoomCardProps) => {
  const { statePop, setStatePop } = useContext(RoomCardContext);

  return (
    <div className="fixed inset-0 z-50">
      <div className="relative w-full h-full flex justify-center items-center">
        <div
          className="bg-black absolute inset-0 opacity-25 cursor-pointer"
          onClick={() => setStatePop(!statePop)}
        />
        <div className="bg-white rounded-md p-5 w-[80%] h-[70%] text-black z-30 animate__animated animate__zoomInDown">
          <div className="flex w-full justify-between items-center">
            <span className="text-4xl font-black text-black">{location}</span>
            <RxCross2
              onClick={() => setStatePop(!statePop)}
              className="top-2 right-2 text-black cursor-pointer"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="max-w-[800px] max-h-[500px] w-full mt-4">
              <Image src={`${image}`} width={800} height={500} alt="room" />
            </div>
            <div className="bg-white p-4 flex flex-col justify-between ">
              <div className="flex justify-between items-center">
              <span className="text-3xl font-semibold">{hotel}</span>

              <span className="text-3xl">{price}$</span>
              
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomPopUp;
