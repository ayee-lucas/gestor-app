import React from "react";
import "animate.css";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { signOut } from "next-auth/react";

const UserMenu = () => {
  const { data: session } = useSession();

  const user = {
    name: session?.user?.name,
    lastname: session?.user?.surname,
  };

  return (
    <div className="animate__animated animate__fadeInLeft bg-slate-50 bg-opacity-80 max-w-[300px] w-full absolute right-5 mt-2 rounded-xl backdrop-blur-3xl backdrop-saturate-200 drop-shadow-2xl backdrop:shadow-2xl">
      <ul className="px-4 py-3 rounded-sm">
        <li className="pt-3 after:content-['']">
          <span className="text-2xl font-semibold tracking-[1px]">Profile</span>
        </li>

        <li className="py-3 text-lg font-semibold after:content-[''] after:block after:w-full after:h-[1px] after:bg-black after:mt-[4px] after:opacity-10 ">
          {session?.user?.username}
        </li>

        <li className="py-3 after:content-[''] after:block after:w-full after:h-[1px] after:bg-black after:mt-[2px] after:opacity-10">
          <Link href={"/"}>Settings</Link>
        </li>

        <li className="py-3 after:content-[''] after:block after:w-full after:h-[1px] after:bg-black after:mt-[2px] after:opacity-10">
          <button
            onClick={() => signOut()}
            className="w-full hover:text-red-500 transition-all"
          >
            Sign out
          </button>
        </li>
      </ul>
    </div>
  );
};

export default UserMenu;
