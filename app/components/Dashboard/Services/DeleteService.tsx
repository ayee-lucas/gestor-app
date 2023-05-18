import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

const DeleteService = (props:any) => {

  return (props.trigger) ? (
    <div className="fixed top-0 left-0 w-[100%] h-[100vh] bg-[#00000066] flex justify-center items-center ">
      <div className="relative p-0 w-[100%] max-w-[390px] rounded-lg shadow  sm:p-5 dark:bg-gray-800 bg-white ">
        <div className="flex relative py-5 text-center place-content-center">
        <div className="grid gap-0 content-center ">
          <div className="flex text-black dark:text-white justify-center text-5xl pb-4 py-2 items-center">
            <AiOutlineDelete />
          </div>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Are you sure you want to delete this Service?
          </p>
          <div className="flex justify-center items-center space-x-4">
            <button
              onClick={() => props.setTrigger(false)}
              type="button"
              className="py-2 px-3 text-sm font-medium text-gray-700 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              No, cancel
            </button>
            <button
              onClick={() => props.setTrigger(false)}
              type="submit"
              className="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
            >
              Yes, I'm sure
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  ) : null;
};

export default DeleteService;
