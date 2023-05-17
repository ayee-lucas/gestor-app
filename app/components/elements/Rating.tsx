import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating = ({ rating = 0 }) => {
  const fullStars = Math.floor(rating); // Integer part of the rating
  const hasHalfStar = rating % 1 >= 0.5; // Check if there is a half star

  return (
    <div className="flex items-center">

      {Array.from({ length: fullStars }).map((_, index) => (
        <AiFillStar key={index} className="text-yellow-500" />
      ))}

      {hasHalfStar && <AiOutlineStar className="text-yellow-500" />}

      {Array.from({ length: 5 - Math.ceil(rating) }).map((_, index) => (
        <AiOutlineStar key={index} className="text-yellow-500" />
      ))}

      <span className="ml-2 text-sm text-gray-600 dark:text-gray-100">
        {rating.toFixed(1)} / 5.0
      </span>
    </div>
  );
};

export default Rating;