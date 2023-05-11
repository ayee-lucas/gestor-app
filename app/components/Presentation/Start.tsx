import React from "react";
import Image from "next/image";
import logo from "../../../public/Logos/RoomFlyTransparent.png";
import { AiOutlineInstagram, AiOutlineMail, AiOutlineFacebook, AiOutlinePhone } from "react-icons/ai";

const Start = () => {
    return (
        <div className="relative bg-start bg-cover h-screen" id="home">

            <div className="absolute inset-0 gradient opacity-80 z-0"/>

            <div className="flex justify-between text-white h-[25%]">
                <div className="flex flex-row-reverse justify-self-end items-center z-10 text-[25px] pl-16 space-x-5 space-x-reverse">
                    <AiOutlineInstagram />
                    <AiOutlineFacebook />
                    <AiOutlineMail />
                    <AiOutlinePhone />
                </div>
                <Image className="h-[190px] w-[180px] z-10" src={logo} alt="" />
                <div className="flex flex-row-reverse justify-self-end items-center z-10 text-[20px] pr-16 space-x-6 space-x-reverse">
                    <button>Sign up</button>
                    <button>Login</button>
                </div>
            </div>

            <div className="flex justify-between text-white h-[75%]">
                <div className="z-10 w-full px-48 pt-60">
                    <h1 className="text-[75px]">Exclusive Offers</h1>
                    <p className="text-[22px] mt-3 w-[60%]">Privileges that will turn your travel into memories beyond your expectations…</p>
                </div>
            </div>

            

        </div>
    );
}

export default Start;