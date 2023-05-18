import React, { useState, createContext } from "react";
import RoomTable from "./RoomTable";
import UpdateRoom from "./UpdateRoom";

export interface RoomViewContextType {
    setMenu?:any;
    handleMenu?:any;
}

export const RoomViewContext = createContext<RoomViewContextType>(null!);

const Room = () => {

    const [menu, setMenu] = useState("Rooms");

    const handleMenu = (param:string) => {
        setMenu(param)
    }

    const value = {
        setMenu,
        handleMenu
    }
    
    return(
        <RoomViewContext.Provider value={value}>
            <div className="w-full h-full dark:bg-gray-900">
                {menu === "Rooms" && <RoomTable />}
                {menu === "Edit" && <UpdateRoom />}
            </div>
        </RoomViewContext.Provider>
    );
}

export default Room;