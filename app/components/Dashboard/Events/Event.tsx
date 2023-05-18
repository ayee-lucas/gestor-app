import React, { useState, createContext } from "react";
import EventTable from "./EventTable";
import UpdateEvent from "./UpdateEvent";

export interface EventViewContextType {
    setMenu?:any;
    handleMenu?:any;
}

export const EventViewContext = createContext<EventViewContextType>(null!);

const Event = () => {

    const [menu, setMenu] = useState("Events");

    const handleMenu = (param:string) => {
        setMenu(param)
    }

    const value = {
        setMenu,
        handleMenu
    }
    
    return(
        <EventViewContext.Provider value={value}>
            <div className="w-full h-full dark:bg-gray-900">
                {menu === "Events" && <EventTable />}
                {menu === "Edit" && <UpdateEvent />}
            </div>
        </EventViewContext.Provider>
    );
}

export default Event;