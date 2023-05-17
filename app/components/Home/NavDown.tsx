"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BiHomeAlt2, BiBuildings } from "react-icons/bi";
import { IoAirplaneOutline } from "react-icons/io5";

const NavDown = () => {
  const [active, setActive] = useState("");

  const handleActive = (e: any) => {
    setActive(e);
  };

  return (
    <div className="flex flex-col justify-items-end w-full h-full py-5 px-6 bg-indigo-800 dark:bg-black dark:text-white text-white border-b-[3px] border-indigo-700">
      <nav className="flex w-full h-full">
        <ul className="flex w-full h-full items-baseline justify-start">
          <li className="px-4 relative pb-2">
            <IoAirplaneOutline size={20} />
          </li>
          <li className="px-4 relative pb-2">
            <Link
              href={"/Home"}
              onClick={() => handleActive("Home")}
              className="cursor-pointer"
            >
              <BiHomeAlt2 size={20} />
            </Link>
            {active === "Home" ? (
              <div className="absolute inset-x-0 bottom-0  h-[2px] bg-white dark:bg-black"></div>
            ) : null}
          </li>
          <li className="px-4 relative pb-2">
            <Link
              href={"/Home/hotel"}
              onClick={() => handleActive("Hotel")}
              className="cursor-pointer"
            >
              <BiBuildings size={20} />
            </Link>
            {active === "Hotel" ? (
              <div className="absolute inset-x-0 bottom-0  h-[2px] bg-white dark:bg-black"></div>
            ) : null}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavDown;
