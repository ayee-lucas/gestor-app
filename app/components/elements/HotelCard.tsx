import React from "react";
import Image from "next/image";

const HotelCard = () => {
  return (
    <div className="w-full max-w-[1000px] flex items-center h-full shadow-2xl">
      <div className="relative overflow-hidden w-full min-w-[300px] min-h-[300px]">
        <Image
          src={
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          }
          className="absolute object-cover w-full h-full"
          width={1000}
          height={1000}
          alt="hotel"
        />
      </div>

      <div className="p-4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
        molestias, provident corporis eligendi vel deleniti. Officiis, dolor
        similique. Molestiae aspernatur consectetur omnis quam ratione similique
        reprehenderit saepe nemo est nobis. Dolorum repellat nisi ipsum
        assumenda unde consectetur magni aperiam natus? Aliquid impedit fuga vel
        doloremque molestiae tempore atque quidem, corrupti distinctio, placeat
        voluptates at saepe possimus sint deleniti libero facere. Ipsa error
        sint debitis quo id labore officia at accusamus necessitatibus, non
      </div>
    </div>
  );
};

export default HotelCard;
