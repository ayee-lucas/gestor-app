import React, { useState, createContext } from "react";
import UserTable from "./UserTable";
import UpdateUser from "./UpdateUser";

export interface UserViewContextType {
    setMenu?:any;
    handleMenu?:any;
}

export const UserViewContext = createContext<UserViewContextType>(null!);

const User = () => {

    const [menu, setMenu] = useState("User");

    const handleMenu = (param:string) => {
        setMenu(param)
    }

    const value = {
        setMenu,
        handleMenu
    }
    
    return(
        <UserViewContext.Provider value={value}>
            <div className="w-full h-full dark:bg-gray-900">
                {menu === "User" && <UserTable />}
                {menu === "Edit" && <UpdateUser />}
            </div>
        </UserViewContext.Provider>
    );
}

export default User;