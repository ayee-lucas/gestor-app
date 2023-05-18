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
import Link from "next/link";

const SideBar = () => {
  const { handleMenu }: NavigationContextType = useContext(NavigationContext);

  return (
    <div>
      <nav className="z-20 hidden w-64 overflow-y-auto bg-white dark:bg-indigo-800 md:block flex-shrink-0 h-screen">
        <div className="py-4 text-gray-700 dark:text-gray-200">
          <a
            className="ml-6 text-xl font-bold text-gray-700 dark:text-gray-200"
            href="#"
          >
            Roomfly
          </a>
          <ul className="mt-6">
            <NavSideBar
              name={"Dashboard"}
              Icon={<AiOutlineHome />}
              handleMenu={handleMenu}
              menu={"Dashboard"}
            />
            <NavSideBar
              name={"User"}
              handleMenu={handleMenu}
              Icon={<AiOutlineUser />}
              menu="User"
            />
            <NavSideBar
              name={"Hotels"}
              handleMenu={handleMenu}
              Icon={<AiOutlineBank />}
              menu="Hotels"
            />
            <NavSideBar
              name={"Rooms"}
              handleMenu={handleMenu}
              Icon={<AiOutlineDatabase />}
              menu="Rooms"
            />
            <NavSideBar
              name={"Events"}
              handleMenu={handleMenu}
              Icon={<AiOutlineGift />}
              menu="Events"
            />
            <NavSideBar
              name={"Services"}
              handleMenu={handleMenu}
              Icon={<AiOutlineRise />}
              menu="Services"
            />
          </ul>
        </div>
        <div className="z-20 hidden w-64 overflow-y-auto bg-white dark:bg-indigo-800 md:block flex-shrink-0">
          <div className="text-gray-500 dark:text-gray-400">
            <div className="px-5 items-end">
              <Link
                href="/Home"
                className="flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-indigo-600 border border-transparent rounded-lg hover:bg-indigo-500 focus:outline-none focus:shadow-outline-purple"
              >
                Back Home
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SideBar;
