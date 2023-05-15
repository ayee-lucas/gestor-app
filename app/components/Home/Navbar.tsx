"use client";

import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import SignInBtn from "./SignInBtn";
import Navlinks from "./Navlinks";
import NavDown from "./NavDown";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className="bg-white w-full min-h-[300px] z-50 border-gray-200  dark:bg-indigo-800">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href={"/"} className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            BookFly
          </span>
        </Link>
        <div className="flex md:order-2">
          <SignInBtn />
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-indigo-800 md:dark:bg-indigo-800 dark:border-gray-700">
            <li>

              <Navlinks href="/Home" title="Home" />

            </li>
            <li>
              <Navlinks href="/Home" title="About" />
            
            </li>
            <li>
              <Navlinks href="/Home" title="Services" />
            </li>
            <li>
              <Navlinks href="/Home" title="Contact" />
           </li>
          </ul>
        </div>
      </div>
      <NavDown />

    </nav>
  );
};

export default Navbar;
