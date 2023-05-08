"use client";

import SideArt from "@/app/components/Login/SideArt";
import { signIn } from "next-auth/react";
import { useRef } from "react";
import { BiFace, BiKey } from "react-icons/bi";

export default function Login() {
  const userName = useRef('');
  const pass = useRef('');

  console.log({env: `${process.env.NEXTAUTH_URL}api/User/login` });

  const onSubmit = async () => {

    const result = await signIn("credentials", {
      username: userName.current,
      password: pass.current,
      redirect: true,
      callbackUrl: "/",
    });

  };
  return (
    <div className="h-screen md:flex">
      <SideArt />
      <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
        <form className="bg-white">
          <h1 className="text-gray-800 font-bold text-2xl mb-1">
            Hello Again!
          </h1>
          <p className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>

          <div className="flex items-center border-2 py-2 px-10 rounded-2xl mb-4">
            <BiFace className="text-gray-600" />
            <input
              className="pl-2 outline-none border-none"
              type="text"
              name="username"
              onChange={(e) => (userName.current = e.target.value)}
              placeholder="Username"
            />
          </div>
          <div className="flex items-center border-2 py-2 px-10 rounded-2xl">
            <BiKey className="text-gray-600" />
            <input
              className="pl-2 outline-none border-none"
              type="text"
              name="password"
              onChange={(e) => (pass.current = e.target.value)}
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
            onClick={onSubmit}
          >
            Login
          </button>
          <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">
            Forgot Password ?
          </span>
        </form>
      </div>
    </div>
  );
}
