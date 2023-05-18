import React, { useState, createContext } from "react";
import UpdateHotel from "./UpdateHotel";
import HotelTable from "./HotelTable";

export interface HotelViewContextType {
    setMenu?:any;
    handleMenu?:any;
}

export const HotelViewContext = createContext<HotelViewContextType>(null!);

const Hotel = () => {

    const [menu, setMenu] = useState("Hotel");

    const handleMenu = (param:string) => {
        setMenu(param)
    }

    const value = {
        setMenu,
        handleMenu
    }
    
    return(
        <HotelViewContext.Provider value={value}>
            <div className="w-full h-full dark:bg-gray-900">
                {menu === "Hotel" && <HotelTable />}
                {menu === "Edit" && <UpdateHotel />}
            </div>
        </HotelViewContext.Provider>
    );
}

export default Hotel;