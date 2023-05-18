import React, { useContext } from "react";
import { HotelsContext } from "@/app/(user)/Home/HotelClient";
import { IRoom } from "@/app/models/rooms";
import RoomCard from "../Home/RoomCard";
import Image from "next/image";
import Rating from "./Rating";
import Link from "next/link";

const HotelSlide = () => {
  const { selectedHotel, rightSlide } = useContext(HotelsContext);

  const roomData = selectedHotel.rooms;
  const hotelData = selectedHotel;

  return (
    <div
      className={
        rightSlide
          ? "fixed  transition-all z-50 right-0 top-0 bottom-0 w-full max-w-[900px] h-screen bg-white  border border-indigo-300 overflow-auto"
          : "fixed animate__animated animate__zoomOut animate__faster cursor-pointer  transition-all z-50 right-[100%] duration-[2s] top-0 bottom-0 w-full max-w-[900px] h-screen bg-white  border border-indigo-300 overflow-auto"
      }
    >
      <div className="flex flex-col min-h-[300px] w-full p-5 overflow-hidden z-3 rounded-2xl">
        <div className="flex justify-between px-3 items-center w-full">
          <h1 className="text-2xl font-light text-black">
            {selectedHotel.country}
          </h1>
        </div>
        <div
          className=" flex justify-between py-4 px-3 items-center w-full
         max-h-[300px] overflow-hidden rounded-2xl 
        "
        >
          <Image
            src={
              "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2127&q=80"
            }
            alt="location"
            className={
              rightSlide
                ? "animate__animated  animate__fadeInDown mt-[4rem] py-3 -z-[1]"
                : "mt-[4rem] py-3 -z-[1]"
            }
            width={1000}
            height={500}
          />
        </div>
        <div className="w-full flex flex-col px-4 py-3">
          <h1
            className={
              rightSlide
                ? "animate__animated animate__slideInUp text-3xl text-black"
                : "text-3xl text-black"
            }
          >
            {hotelData?.name}
          </h1>

          <div className=" flex justify-between py-3 px-1">
            <Rating rating={hotelData?.rating} />
            <div>
              <span className="font-black px-3">{hotelData?.city}</span>
              {hotelData?.address}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center px-2 py-3">
            <p className=" font-light">{hotelData?.description}</p>
          </div>

          <div className="py-4">
            <Link
              href={`/Home/hotel/${hotelData?._id}`}
              className="px-4 py-2 hover:bg-indigo-500 hover:text-white rounded-md transition-all border border-indigo-500 text-indigo-900 "
            >
              <span className=" animate-bounce">

              See more!
              </span>
            </Link>
          </div>
        </div>
      </div>

      <h1 className="text-5xl font-bold text-indigo-500 mt-10 px-8">Rooms</h1>
      <div className={"flex flex-wrap justify-evenly p-7  items-center gap-4"}>
        {roomData?.[0]?.number ? (
          roomData?.map((room: IRoom) =>
            room?.available ? (
              <RoomCard
                available
                description={room.description}
                image="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=Mn wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                price={room.price}
                hotel={hotelData}
                number={room.number}
                rating={room.rating}
                type={room.type}
                key={room.number}
              />
            ) : null
          )
        ) : (
          <div className="text-center text-xl text-gray-600">
            No rooms available at the moment :( <br /> Check again later tho!
          </div>
        )}
      </div>
    </div>
  );
};

export default HotelSlide;
