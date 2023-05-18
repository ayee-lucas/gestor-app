import React, { useState, createContext } from "react";
import ServiceTable from "./ServiceTable";
import UpdateService from "./UpdateService";

export interface ServiceViewContextType {
    setMenu?:any;
    handleMenu?:any;
}

export const ServiceViewContext = createContext<ServiceViewContextType>(null!);

const Service = () => {

    const [menu, setMenu] = useState("Services");

    const handleMenu = (param:string) => {
        setMenu(param)
    }

    const value = {
        setMenu,
        handleMenu
    }
    
    return(
        <ServiceViewContext.Provider value={value}>
            <div className="w-full h-full dark:bg-gray-900">
                {menu === "Services" && <ServiceTable />}
                {menu === "Edit" && <UpdateService />}
            </div>
        </ServiceViewContext.Provider>
    );
}

export default Service;