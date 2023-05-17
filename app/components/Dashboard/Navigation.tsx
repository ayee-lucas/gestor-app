'use client'
import React, { useState, createContext } from "react";
import SideBar from "./SideBar";
import Dashboard from "./Dashboard";
import User from "@/app/(admin)/dashboard/User";
export interface NavigationContextType {
    setMenu?:any;
    handleMenu?:any;
}

export const NavigationContext = createContext<NavigationContextType>(null!);

const Navigation = () => {

    const [menu, setMenu] = useState("Dashboard");

    const handleMenu = (param:string) => {
        setMenu(param)
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
            <div className="w-full p-8 dark:">
                {menu === "Dashboard" && <Dashboard />}
                {menu === "User" && <User />}
            </div>
        </NavigationContext.Provider>
    );
}

export default Navigation;