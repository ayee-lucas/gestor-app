import React from "react";
import Image from "next/image";
import logo from "../../../public/RoomFlyTransparent.png";

const Start = () =>{
    return(
        <div className="relative bg-image bg-cover h-screen" id="home">
            <div className="flex justify-between h-[15%]">
                <div>
                    <p>a</p>
                </div>
                <Image className="h-[200px] w-[150px]" src={logo} alt="" />
                <div>
                    <p>a</p>
                </div>
            </div>
        </div>
    );
}

export default Start;