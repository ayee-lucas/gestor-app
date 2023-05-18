import React, { useContext } from "react";
import Form from "./Form";
import { EventViewContext, EventViewContextType } from "./Event";

const UpdateEvent = () => {
  const { setMenu }: EventViewContextType = useContext(EventViewContext);

  const handleMenu = (param: string) => {
    setMenu(param);
    console.log(param);
  };

  return (
    <div>
      <h3 className="text-gray-700 dark:text-white text-xl font-semibold pt-5">
        Update Event
      </h3>
      <div className="my-5 align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b dark:border-gray-700 border-gray-200">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b dark:border-gray-700 border-gray-200 dark:bg-[#100724] bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 dark:text-white uppercase tracking-wider">
                Name & Type
              </th>
              <th className="px-6 py-3 border-b dark:border-gray-700 border-gray-200 dark:bg-[#100724] bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 dark:text-white uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 border-b dark:border-gray-700 border-gray-200 dark:bg-[#100724] bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 dark:text-white uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 border-b dark:border-gray-700 border-gray-200 dark:bg-[#100724] bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 dark:text-white uppercase tracking-wider">
                Rating
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

              <td className="px-6 py-4 whitespace-no-wrap border-b dark:border-gray-700 border-gray-200">
                <div className="text-sm leading-5 dark:text-white text-gray-900">
                  True
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
              <Form name="Type" type="text" />
              <Form name="Description" type="text" />
              <Form name="Price" type="number" />
              <Form name="Rating" type="text" />
            </div>

            <div className="flex justify-between mt-8">
              <button
                onClick={() => handleMenu("Events")}
                className="px-1 py-2 bg-gray-00 text-gray-700 dark:text-white rounded-md bg-slave-700 dark:hover:text-gray-300 hover:text-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={() => handleMenu("Events")}
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

export default UpdateEvent;
