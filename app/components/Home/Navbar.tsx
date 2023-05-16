"use client";

import React, { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Navlinks from "./Navlinks";
import NavDown from "./NavDown";
import UserBlock from "../elements/UserBlock";
import UserMenu from "./UserMenu";

const Navbar = () => {
  const { data: session } = useSession();

  const [show, setShow] = useState(true);

  return (
    <nav className="bg-white w-full min-h-[300px] z-50 border-gray-200  dark:bg-indigo-800">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href={"/"} className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            BookFly
          </span>
        </Link>
        <div className="flex md:order-2">
          <button
            className={
              session?.user ? "hidden" : "py-2 px-4 bg-indigo-100 rounded-xl"
            }
            onClick={() => signIn()}
          >
            Sign In
          </button>
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

      {show ? null : <UserMenu />}

      {session?.user ? <UserBlock show={show} setShow={setShow} /> : null}

      <NavDown />
    </nav>
  );
};

export default Navbar;
