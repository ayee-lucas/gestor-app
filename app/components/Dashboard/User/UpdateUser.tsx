import React, { useContext } from "react";
import Form from "./Form";
import { UserViewContext, UserViewContextType } from "./User";

const UpdateUser = () => {
  const { setMenu }: UserViewContextType = useContext(UserViewContext);

  const handleMenu = (param: string) => {
    setMenu(param);
    console.log(param);
  };

  return (
    <div>
      <h3 className="text-gray-700 dark:text-white text-xl font-semibold pt-5">Update User</h3>

      <div className="my-5 align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b dark:border-gray-700 border-gray-200">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b dark:border-gray-700 border-gray-200 dark:bg-[#100724] bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 dark:text-white uppercase tracking-wider">
                Names & Email
              </th>
              <th className="px-6 py-3 border-b dark:border-gray-700 border-gray-200 dark:bg-[#100724] bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 dark:text-white uppercase tracking-wider">
                Username
              </th>
              <th className="px-6 py-3 border-b dark:border-gray-700 border-gray-200 dark:bg-[#100724] bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 dark:text-white uppercase tracking-wider">
                Creation Date
              </th>
              <th className="px-6 py-3 border-b dark:border-gray-700 border-gray-200 dark:bg-[#100724] bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 dark:text-white uppercase tracking-wider">
                Role
              </th>
            </tr>
          </thead>

          <tbody className="bg-white dark:bg-slate-800">
            <tr>
              <td className="px-6 py-4 whitespace-no-wrap border-b dark:border-gray-700 border-gray-200">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <img
                      className="h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>

                  <div className="ml-4">
                    <div className="text-sm leading-5 font-medium dark:text-white text-gray-900">
                      Juan Morales
                    </div>
                    <div className="text-sm leading-5 dark:text-gray-400 text-gray-500">
                      jmorales@kinal.edu.gt
                    </div>
                  </div>
                </div>
              </td>

              <td className="px-6 py-4 whitespace-no-wrap border-b dark:border-gray-700 border-gray-200">
                <div className="text-sm leading-5 dark:text-white text-gray-900">
                  654324004
                </div>
              </td>

              <td className="px-6 py-4 whitespace-no-wrap border-b dark:border-gray-700 border-gray-200 text-sm leading-5 dark:text-white text-gray-500">
                54054011
              </td>

              <td className="px-6 py-4 whitespace-no-wrap border-b dark:border-gray-700 border-gray-200 text-sm leading-5 dark:text-white text-gray-500">
                Client
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-4">
        <div className="p-6 bg-white dark:bg-slate-800 rounded-md shadow-md">
          <h2 className="text-lg text-gray-700 dark:text-white font-semibold capitalize">
            Credentials:
          </h2>

          <form>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-2">
              <Form name="Name" type="text" />
              <Form name="Surname" type="text" />
              <Form name="Username" type="text" />
              <Form name="Email" type="email" />
              <Form name="Password" type="text" />
              <div>
                <label
                  className="text-gray-700 dark:text-gray-300"
                  htmlFor="username"
                >
                  Role
                </label>
                <select
                  id="Role"
                  className="form-input w-full px-2 py-1 appearance-none rounded-md focus:border-indigo-600 text-black"
                >
                  <option value="volvo">Client</option>
                  <option value="saab">Admin</option>
                </select>
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <button
                onClick={() => handleMenu("User")}
                className="px-1 py-2 bg-gray-00 text-gray-700 dark:text-white rounded-md bg-slave-700 dark:hover:text-gray-300 hover:text-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={() => handleMenu("User")}
                className="px-4 py-2 bg-gray-00 text-gray-300 rounded-md bg-indigo-700 hover:bg-indigo-500 hover:text-white focus:outline-none focus:bg-indigo-600"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
