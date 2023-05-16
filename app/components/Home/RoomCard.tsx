"use client";

import React, { useState, createContext } from "react";
import Image from "next/image";
import RoomPopUp from "./RoomPopUp";

export interface RoomCardProps {
  hotel?: string;
  smallDescription?: string;
  price?: number;
  type?: string;
  location?: string;
  rating?: number;
  statePop?: boolean;
  setStatePop?: any;
  image?: string;
}

export const RoomCardContext = createContext({} as RoomCardProps);

const RoomCard = ({
  hotel,
  smallDescription,
  price,
  type,
  location,
  rating,
  image,
}: RoomCardProps) => {
  const [statePop, setStatePop] = useState(false);

  console.log(statePop);

  return (
    <>
      <RoomCardContext.Provider value={{ statePop, setStatePop }}>
        {statePop ? (
          <RoomPopUp
            hotel={hotel}
            image={image}
            location={location}
            price={price}
            rating={rating}
            smallDescription={smallDescription}
            type={type}
          />
        ) : null}

        <div
          onClick={() => setStatePop(!statePop)}
          className="max-w-sm rounded overflow-hidden shadow-lg select-none cursor-pointer transition-all hover:-translate-y-2 hover:shadow-2xl"
        >
          <Image
            className="w-full"
            width={500}
            height={500}
            src={`${image}`}
            alt="Sunset in the mountains"
          />

          <div className="px-6 py-3">
            <div className="font-bold text-2xl mb-2">
              {hotel}
              <br />
              <span className="text-lg">{location}</span>
              <br />
              <span className="text-lg font-medium">{type}</span>
            </div>
            <p className="text-gray-700 text-base">{smallDescription}</p>
            <p>
              <span className="font-bold">Price: </span>
              {price}$
            </p>

            <div className="flex items-center">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Rating star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <p className="ml-2 text-sm font-bold text-gray-900">{rating}</p>
              <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
              <a
                href="#"
                className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
              >
                73 reviews
              </a>
            </div>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #winter
            </span>
          </div>
        </div>
      </RoomCardContext.Provider>
    </>
  );
};

export default RoomCard;
