import React from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
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
          ? "fixed z-20 overflow-hidden right-5 top-2  w-[50px] h-[50px] transition-all select-none cursor-pointer "
          : "fixed z-20 overflow-hidden right-5 top-2 px-2 py-2  w-[300px] h-[60px] transition-all dark:bg-zinc-900 dark:bg-opacity-80 dark:text-white bg-slate-50 bg-opacity-80 rounded-xl flex items-center gap-16 select-none cursor-pointer backdrop-blur-3xl backdrop-saturate-200 drop-shadow-2xl backdrop:shadow-2x"
      }
      onClick={() => setShow(!show)}
    >
      <button
        className={
          "px-1 py-1 bg-indigo-100 dark:bg-zinc-700 flex max-w-[50px] items-center justify-center rounded-full transition-all"
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
