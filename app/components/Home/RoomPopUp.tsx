"use client";

import React, { useContext } from "react";
import { RoomCardContext } from "./RoomCard";
import { AiOutlineSwapRight } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
import Image from "next/image";
import PopUpTable from "./PopUpTable";
import PopUpText from "./PopUpText";


const RoomPopUp = () => {
  const {
    statePop,
    setStatePop,
    hotel,
    image,
    available,
    price,
    rating,
    description,
    type,
  } = useContext(RoomCardContext);

  return (
    <div className="fixed inset-0 z-50">
      <div className="relative w-full h-full flex justify-center items-center">
        <div
          className="bg-black absolute inset-0 opacity-25 cursor-pointer"
          onClick={() => setStatePop(!statePop)}
        />
        <div className="bg-white rounded-md p-5 w-[80%] h-[70%] text-black z-30 animate__animated animate__zoomInDown">
          <div className="flex w-full justify-between items-center">
            <span className="text-4xl font-black text-indigo-800">{type}</span>
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
              <PopUpText
                description={description}
                price={price}
                hotel={hotel}
              />
              <PopUpTable available={available} rating={rating} type={type} />

              <Link className="flex items-center w-full mt-4 p-3 transition-all
              hover:bg-indigo-700 hover:text-white rounded-md
              
              " href={"/"}>
                <span> Book Now</span>
                <AiOutlineSwapRight className="text-2xl ml-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomPopUp;
