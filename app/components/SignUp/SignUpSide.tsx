import React from 'react'
import { playfair } from "@/app/fonts";

import logo from "@/public/Logos/RoomFlyTransparent.png";
import Image from "next/image";

const SignUpSide = () => {
  return (
     <div className="w-full h-full relative bg-signup z-10 bg-cover flex flex-col justify-center items-start text-white px-8">
        <div className="absolute inset-0 opacity-50 z-[5] bg-indigo-900"/>
        <div className="w-full flex items-center z-[10]">

          <Image src={logo} width={100} alt="logo" />

          <h1 className="font-bold text-4xl px-4 ">RoomFly</h1>

        </div>
        <div className="z-[10]">
        <h1 className={`text-4xl ${playfair.className} font-black`}>
          Seamless Services and Exquisite Lodging for Unforgettable Getaways
        </h1>
        <p className="py-3 pl-1">
          At RoomFly, we go beyond traditional lodging platforms by curating a
          handpicked selection of exquisite accommodations that embody elegance,
          style, and sophistication. From boutique hotels to luxurious resorts,
          our platform offers a diverse range of options to cater to your unique
          preferences
        </p>
        </div>

      </div>
  )
}

export default SignUpSide