import React from "react";
import { AiFillStar } from "react-icons/ai";

const Rating = ({ rating = 0 }) => {
  const stars = Array.from({ length: rating }, (_, index) => index + 1);

  return (
    <div className="flex items-center ">
      {stars.map((star) => (
        <AiFillStar key={star} className="text-yellow-500" />
      ))}
      <span className="ml-2 text-sm text-gray-600">{rating} / 5</span>
      
    </div>
  );
};

export default Rating;
