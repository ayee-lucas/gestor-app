"use client"
import React, { useState, createContext } from "react";
import SideBar from "./SideBar";
import Dashboard from "./Dashboard";
import User from "./User/User";
import Hotel from "./Hotel/Hotel";
import Room from "./Rooms/Room";
export interface NavigationContextType {
    setMenu?:any;
    handleMenu?:any;
}

export const NavigationContext = createContext<NavigationContextType>(null!);

const Navigation = () => {

    const [menu, setMenu] = useState("Dashboard");

    const handleMenu = (param:string) => {
        setMenu(param)
        console.log(param)
    }

    const value = {
        setMenu,
        handleMenu
    }

    return(
        <NavigationContext.Provider value={value}>
            <div>
                <SideBar/>
            </div>
            <div className="w-full p-8 bg-indigo-100 dark:bg-gray-900">
                {menu === "Dashboard" && <Dashboard />}
                {menu === "User" && <User />}
                {menu === "Hotels" && <Hotel />}
                {menu === "Rooms" && <Room />}
            </div>
        </NavigationContext.Provider>
    );
}

export default Navigation;