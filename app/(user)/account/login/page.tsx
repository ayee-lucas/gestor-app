import SideArt from "@/app/components/Login/SideArt";
import { BiFace, BiKey } from "react-icons/bi";

export default function Login() {
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
              name=""
              id=""
              placeholder="Username"
            />
          </div>
          <div className="flex items-center border-2 py-2 px-10 rounded-2xl">
            <BiKey className="text-gray-600" />
            <input
              className="pl-2 outline-none border-none"
              type="text"
              name=""
              id=""
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
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
