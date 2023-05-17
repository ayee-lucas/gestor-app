import React from "react";
import Image from "next/image";
import Link from "next/link";
import Rating from "../elements/Rating";

export interface IHotelCardSm {
  name: string;
  country: string;
  city: string;
  address: string;
  rating: number;
}

const HotelCardSm = ({
  name,
  country,
  city,
  rating,
  address,
}: IHotelCardSm) => {
  return (
    <Link
      href="#"
      className="flex flex-col w-max  items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 "
    >
      <Image
        width={210}
        height={210}
        className="w-full rounded-t-lg h-full md:h-auto  md:rounded-none md:rounded-l-lg"
        src="https://images.unsplash.com/photo-1568084680786-a84f91d1153c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
        alt="hotel img"
      />
      <div className="flex flex-col justify-between p-4 leading-normal min-w-[300px]">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
          {name}
        </h5>
        <p className="mb-3 font-normal text-gray-700 ">
          {country}, {city} <br />
          {address}
        </p>

        <Rating rating={rating} />
      </div>
    </Link>
  );
};

export default HotelCardSm;
