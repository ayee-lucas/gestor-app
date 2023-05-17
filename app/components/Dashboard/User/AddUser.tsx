import React, { useContext } from "react";
import Form from "./Form";
import { UserViewContext, UserViewContextType } from "./User";

const AddUser = (props: any) => {
  const { setMenu }: UserViewContextType = useContext(UserViewContext);

  const handleMenu = (param: string) => {
    setMenu(param);
    console.log(param);
  };

  return props.trigger ? (
    <div className="fixed top-0 left-0 w-[100%] h-[100vh] bg-[#00000066] flex justify-center items-center ">
      <div className="relative p-0 w-[100%] max-w-[890px] rounded-lg sm:p-5 dark:bg-gray-800 bg-white ">
        <div className="p-6 bg-white dark:bg-slate-800 rounded-md ">
          <h2 className="text-xl pb-2 text-gray-700 dark:text-white font-semibold capitalize">
            Add User:
          </h2>

          <form>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-2">
              <Form name="Identifier" type="text" />
              <Form name="Name" type="text" />
              <Form name="Surname" type="text" />
              <Form name="Email" type="email" />
              <Form name="Tel" type="number" />
              <div>
                <label
                  className="text-gray-700 dark:text-gray-300"
                  htmlFor="username"
                >
                  Role
                </label>
                <select
                  id="Role"
                  className="bg-gray-200 form-input w-full px-2 py-1 appearance-none rounded-md focus:border-indigo-600 text-black"
                >
                  <option value="volvo">Client</option>
                  <option value="saab">Admin</option>
                </select>
              </div>
            </div>
            <div className="mt-5">
              <Form name="Password" type="password" />
            </div>

            <div className="flex justify-between mt-4">
              <button
                onClick={() => props.setTrigger(false)}
                className="px-1 py-2 bg-gray-00 text-gray-800 dark:text-gray-300 rounded-md bg-slave-700 dark:hover:text-white hover:text-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={() => props.setTrigger(false)}
                className="px-4 py-2 bg-gray-00 text-gray-300 rounded-md bg-indigo-700 hover:bg-indigo-500 hover:text-white focus:outline-none focus:bg-indigo-600"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  ) : null;
};

export default AddUser;
