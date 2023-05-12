import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

const SignInBtn = () => {
  const { data: session } = useSession();
  console.log(session?.user);

  if (session && session.user) {
    return (
      <div className="flex items-center justify-between min-w-[200px]">
        <p>{`${session.user.name} ${session.user.surname}`}</p>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => signOut()}
        >
          Sign out 
        </button>
      </div>
    );
  }
  return (
    <button
      type="button"
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      onClick={() => signIn()}
    >
      Get started
    </button>
  );
};

export default SignInBtn;
