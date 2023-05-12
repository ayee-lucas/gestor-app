"use client";

import SideArt from "@/app/components/Login/SideArt";
import TextBox from "@/app/elements/TextBox";
import Button from "@/app/elements/Button";
import { usePathname, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { useEffect, useRef } from "react";
import { BiFace, BiKey } from "react-icons/bi";

export default function LoginForm() {
  const params = useSearchParams();

  const error = params.get("error");

  const userName = useRef("");
  const pass = useRef("");

  const onSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const result = await signIn("credentials", {
        username: userName.current,
        password: pass.current,
        redirect: true,
        callbackUrl: "/account/login",
      });

      console.log(result);
    } catch (err) {
      console.log(err);
    }
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

          {error && <p className="text-red-500 my-7">Invalid Credentials</p>}
          <div className="flex items-center border-2 py-2 px-10 rounded-2xl mb-4">
            <BiFace className="text-gray-600" />
            <TextBox
              labelText="Username"
              onChange={(e) => (userName.current = e.target.value)}
            />
          </div>
          <div className="flex items-center border-2 py-2 px-10 rounded-2xl mb-4">
            <BiKey className="text-gray-600" />
            <TextBox
              labelText="Password"
              type={"password"}
              onChange={(e) => (pass.current = e.target.value)}
            />
          </div>

          <Button onClick={(e) => onSubmit(e)}>Login</Button>

          <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">
            Forgot Password ?
          </span>
        </form>
      </div>
    </div>
  );
}
