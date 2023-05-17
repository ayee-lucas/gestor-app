import React from "react";
import Link from "next/link";

const Error401 = () => {
  return (
    <div className="flex justify-center h-screen items-center dark:bg-[#100724] p-5">
        <div className="max-md:text-center items-center">
            <div className="max-md:p-0">
                <img className="max-md:p-10" src="https://i.ibb.co/G9DC8S0/404-2.png" />
            </div>
                <h1 className="my-2 text-gray-800 font-bold text-2xl dark:text-white max-lg">
                    Something went wrong...
                </h1>
                <p className="my-2 text-gray-800 dark:text-white">
                    Sorry about that! Please visit our hompage to get where you need to go.
                </p>
            <div className="pt-5">
                <Link
                    href={"/Home"}
                    className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-[#55149e] text-white hover:bg-[#691bc2] focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50"
                >
                    Take me back!
                </Link>
            </div>
        </div>
        <div className="max-md:hidden p-5">
            <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
        </div>
    </div>
  );
};

export default Error401;
