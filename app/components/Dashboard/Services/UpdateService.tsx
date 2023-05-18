import React, { useContext, useState } from "react";
import Form from "./Form";
import { ServiceViewContext, ServiceViewContextType } from "./Service";

const UpdateService = () => {
  const { setMenu }: ServiceViewContextType = useContext(ServiceViewContext);

  const handleMenu = (param: string) => {
    setMenu(param);
    console.log(param);
  };

  

  return (
    <div>
      <h3 className="text-gray-700 dark:text-white text-xl font-semibold pt-5">
        Update Service
      </h3>
      <div className="my-5 align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b dark:border-gray-700 border-gray-200">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b dark:border-gray-700 border-gray-200 dark:bg-[#100724] bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 dark:text-white uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 border-b dark:border-gray-700 border-gray-200 dark:bg-[#100724] bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 dark:text-white uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 border-b dark:border-gray-700 border-gray-200 dark:bg-[#100724] bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 dark:text-white uppercase tracking-wider">
                Price
              </th>
            </tr>
          </thead>

          <tbody className="bg-white dark:bg-slate-800">
            <tr>
              <td className="px-6 py-4 whitespace-no-wrap border-b dark:border-gray-700 border-gray-200">
                <div className="flex items-center">
                  <div className="ml-4">
                    <div className="text-sm leading-5 font-medium dark:text-white text-gray-900">
                      Hotel yoquese
                    </div>
                    <div className="text-sm leading-5 dark:text-gray-400 text-gray-500">
                      200
                    </div>
                  </div>
                </div>
              </td>

              <td className="px-6 py-4 whitespace-no-wrap border-b dark:border-gray-700 border-gray-200">
                <div className="text-sm leading-5 dark:text-white text-gray-900">
                  aaaaaaa
                </div>
              </td>

              <td className="px-6 py-4 whitespace-no-wrap border-b dark:border-gray-700 border-gray-200">
                <div className="text-sm leading-5 dark:text-white text-gray-900">
                  Guate
                </div>
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
              <Form name="Description" type="text" />
              <Form name="Price" type="number" />
            </div>

            <div className="flex justify-between mt-8">
              <button
                onClick={() => handleMenu("Services")}
                className="px-1 py-2 bg-gray-00 text-gray-700 dark:text-white rounded-md bg-slave-700 dark:hover:text-gray-300 hover:text-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={() => handleMenu("Services")}
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

export default UpdateService;
