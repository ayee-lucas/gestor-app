import React from "react";
import Image from "next/image";

const RoomCard = ({
  description = "",
  price = "",
  type = "",
  location = "",
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg select-none cursor-pointer transition-all hover:-translate-y-4">
      <Image
        className="w-full"
        width={500}
        height={500}
        src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=Mn wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-3">
        <div className="font-bold text-xl mb-2">
          {location}
          <br />
          <span className="text-lg">{type}</span>
        </div>
        <p className="text-gray-700 text-base">{description}</p>
        <p>
          <span className="font-bold">Price: </span>
          {price}$
        </p>
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
  );
};

export default RoomCard;
