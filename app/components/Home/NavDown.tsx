'use client'
import Link from "next/link";
import React, {useState} from "react";
import { BiHomeAlt2, BiBuildings } from "react-icons/bi";
import { IoAirplaneOutline } from "react-icons/io5";

const NavDown = () => {
  
  const [active, setActive] = useState("Home")

  const handleActive = (e: any) => {

    setActive(e);

  }
  
  return (
    <div className="flex flex-col justify-items-end w-full h-full py-5 px-6 bg-indigo-800 dark:bg-white dark:text-black text-white">
      <nav className="flex w-full h-full">
        <ul className="flex w-full h-full items-baseline justify-start">
          <li className="px-4 after:content-[]">
            <IoAirplaneOutline size={20} />
          </li>
          <li className="px-4">
            <Link href={"/Home"} className="cursor-pointer">
              <BiHomeAlt2 size={20} />
            </Link>
          </li>
          <li className="px-4">
            <Link href={"/Home/hotel"} className="cursor-pointer">
              <BiBuildings size={20} />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavDown;
