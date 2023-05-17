import React, { useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import UserMenu from "../Home/UserMenu";
interface Props {
  setShow?: any;
  show?: boolean;
}

const UserBlock = ({ setShow, show }: Props) => {
  const { data: session } = useSession();

  const user = session?.user;

  return (
    <div
      className={
        show
          ? "absolute overflow-hidden right-5 top-2  w-[50px] h-[50px] transition-all select-none cursor-pointer "
          : "absolute overflow-hidden right-5 top-2 px-2 py-2  w-[300px] h-[60px] transition-all bg-slate-50 bg-opacity-80 rounded-xl flex items-center gap-16 select-none cursor-pointer"
      }
      onClick={() => setShow(!show)}
    >
      <button
        className={
          "px-1 py-1 bg-indigo-100 flex max-w-[50px] items-center justify-center rounded-full transition-all"
        }
      >
        <Image
          src={
            "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          }
          alt="user"
          width={50}
          height={50}
          className="rounded-full"
        />
      </button>
      {show ? null : `${user?.name} ${user?.surname}`}
    </div>
  );
};

export default UserBlock;
