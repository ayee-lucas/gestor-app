import React, { useContext } from "react";
import NavSideBar from "./NavSideBar";
import { NavigationContext, NavigationContextType } from "./Navigation";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineBank,
  AiOutlineDatabase,
  AiOutlineGift,
  AiOutlineRise,
} from "react-icons/ai";

const SideBar = () => {
    const { handleMenu }:NavigationContextType = useContext(NavigationContext);

    return(
        <div>
            <nav
        className="z-20 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0 h-screen"
      >
        <div className="py-4 text-gray-500 dark:text-gray-400">
          <a
            className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200"
            href="#"
          >
            Roomfly
          </a>
          <ul className="mt-6">
            <NavSideBar name={"Dashboard"} Icon={<AiOutlineHome />} fn={handleMenu}  />
            <NavSideBar name={"User"} Icon={<AiOutlineUser />} fn={handleMenu}/>
            <NavSideBar name={"Hotels"} Icon={<AiOutlineBank />} fn={handleMenu} />
            <NavSideBar name={"Rooms"} Icon={<AiOutlineDatabase />} fn={handleMenu} />
            <NavSideBar name={"Events"} Icon={<AiOutlineGift />} fn={handleMenu}  />
            <NavSideBar name={"Services"} Icon={<AiOutlineRise />}  fn={handleMenu}  />
          </ul>
          
        </div>
        <div className="z-20 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0">
        <div className="text-gray-500 dark:text-gray-400 items-end h-full">
            <div className="px-6 my-6 items-end">
                <button
                className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-indigo-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                >
                Create account
                <span className="ml-2" aria-hidden="true">+</span>
                </button>
            </div>
        </div>
       </div>
      </nav>
      
    </div>
    );
}

export default SideBar;