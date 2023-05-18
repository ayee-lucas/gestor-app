"use client";
import React, { useState, createContext, useEffect } from "react";
import SideBar from "./SideBar";
import Dashboard from "./Dashboard";
import User from "./User/User";
import Hotel from "./Hotel/Hotel";
import Room from "./Rooms/Room";
import Event from "./Events/Event";
import Service from "./Services/Service";
export interface NavigationContextType {
  setMenu?: React.Dispatch<React.SetStateAction<string | undefined>>;
  handleMenu?: (selectedMenu: string) => void;
}

export const NavigationContext = createContext<NavigationContextType>(null!);

const Navigation = () => {
  const [menu, setMenu] = useState<string | undefined>();

  useEffect(() => {
    const storedMenu = localStorage.getItem("menu");
    if (storedMenu) {
      setMenu(storedMenu);
    }
  }, []);

  const handlerMenu = (selectedMenu: any) => {
    setMenu(selectedMenu);
    localStorage.setItem("menu", selectedMenu);
  };



  const value = {
    setMenu,
    handlerMenu,
  };

  return (
    <NavigationContext.Provider value={value}>
      <div>
        <SideBar />
      </div>
      <div className="w-full p-8 bg-indigo-100 dark:bg-gray-900">
        {menu === "Dashboard" && <Dashboard />}
        {menu === "User" && <User />}
        {menu === "Hotels" && <Hotel />}
        {menu === "Rooms" && <Room />}
        {menu === "Events" && <Event />}
        {menu === "Services" && <Service />}
      </div>
    </NavigationContext.Provider>
  );
};

export default Navigation;
