import React from "react";
import "animate.css";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import TravelCard from "../elements/TravelCard";

const UserMenu = () => {
  const { data: session } = useSession();

  const user = {
    name: session?.user?.name,
    lastname: session?.user?.surname,
  };

  /*
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY >= 95) {
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);
  */

  return (
    <>
      <div className="animate__animated animate__fadeInUp animate__faster dark:bg-zinc-950 dark:opacity-10 dark:bg-opacity-30 dark:text-white bg-slate-50 bg-opacity-80 max-w-[300px] z-20 w-full fixed right-5 mt-2 rounded-xl backdrop-blur-3xl backdrop-saturate-200 drop-shadow-2xl backdrop:shadow-2xl">
        <ul className="px-4 py-3 rounded-sm">
          <li className="pt-3 after:content-['']">
            <span className="text-2xl font-semibold tracking-[1px]">
              Profile
            </span>
          </li>

          <li className="py-3 text-lg font-semibold after:content-[''] after:block after:w-full after:h-[1px] after:bg-black dark:after:bg-white after:mt-[4px] after:opacity-10 ">
            {session?.user?.username}
          </li>

          <li className="py-3 after:content-[''] after:block after:w-full after:h-[1px] after:bg-black dark:after:bg-white after:mt-[2px] after:opacity-10">
            <Link href={"/"}>Settings</Link>
          </li>

          <li className="py-3 after:content-[''] after:block after:w-full after:h-[1px] after:bg-black dark:after:bg-white after:mt-[2px] after:opacity-10">
            <button
              onClick={() => signOut()}
              className="w-full hover:text-red-500 transition-all"
            >
              Sign out
            </button>
          </li>
        </ul>
      </div>
      <div className="w-full max-w-[300px] z-50 h-full animate__animated animate__fadeInUp animate__faster fixed right-5 mt-[16rem]">
        <TravelCard />
      </div>
    </>
  );
};

export default UserMenu;
