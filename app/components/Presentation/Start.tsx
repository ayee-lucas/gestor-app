import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/Logos/RoomFlyTransparent.png";
import {
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineFacebook,
  AiOutlinePhone,
} from "react-icons/ai";

const Start = () => {
  return (
    <div className="relative bg-fixed bg-start bg-cover h-screen" id="home">
      <div className="absolute inset-0 gradient opacity-75 z-0" />

      <div className="flex justify-between text-white h-[25%]">
        <div className="flex flex-row-reverse justify-self-end items-center z-10 text-[23px] pl-16 space-x-5 space-x-reverse">
          <AiOutlineInstagram />
          <AiOutlineFacebook />
          <AiOutlineMail />
          <AiOutlinePhone />
        </div>
        <Image className="h-[190px] w-[180px] z-10" src={logo} alt="" />
        <div className="flex flex-row-reverse justify-self-end items-center z-10 text-[16px] pr-16 space-x-8 space-x-reverse">
          <Link href={"/account/signup"}>Sign Up</Link>
          <Link href={"/account/login"}>Login</Link>
        </div>
      </div>

      <div className="flex justify-between text-white h-[75%]">
        <div className="z-10 w-full pl-32 pt-60">
          <h1 className="text-[75px] max-lg:text-[40px]">Welcome to RoomFly</h1>
          <p className="text-[22px] mt-3 w-[60%] max-lg:text-[14px] pl-7">
            Where Service Meets Splendor, Creating Unforgettable Stays...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Start;
