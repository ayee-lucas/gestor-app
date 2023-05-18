import React, { useContext } from "react";
import Form from "./Form";
import { RoomViewContext, RoomViewContextType } from "./Room";

const UpdateRoom = () => {
  const { setMenu }: RoomViewContextType = useContext(RoomViewContext);

  const handleMenu = (param: string) => {
    setMenu(param);
    console.log(param);
  };

  return (
    <div>
      <h3 className="text-gray-700 dark:text-white text-xl font-semibold pt-5">
        Update Room
      </h3>
      <div className="my-5 align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b dark:border-gray-700 border-gray-200">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b dark:border-gray-700 border-gray-200 dark:bg-[#100724] bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 dark:text-white uppercase tracking-wider">
                Numer, Type & Location
              </th>
              <th className="px-6 py-3 border-b dark:border-gray-700 border-gray-200 dark:bg-[#100724] bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 dark:text-white uppercase tracking-wider">
                Short Description
              </th>
              <th className="px-6 py-3 border-b dark:border-gray-700 border-gray-200 dark:bg-[#100724] bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 dark:text-white uppercase tracking-wider">
                City
              </th>
              <th className="px-6 py-3 border-b dark:border-gray-700 border-gray-200 dark:bg-[#100724] bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 dark:text-white uppercase tracking-wider">
                Available
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

              <td className="px-6 py-4 whitespace-no-wrap border-b dark:border-gray-700 border-gray-200">
                <div className="text-sm leading-5 dark:text-white text-gray-900">
                  4.5
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
              <Form name="Number" type="text" />
              <Form name="Type" type="text" />
              <Form name="Price" type="number" />
              <Form name="Short Description" type="text" />
              <Form name="Location" type="text" />
              <div>
                <label
                  className="text-gray-700 dark:text-gray-300"
                  htmlFor="username"
                >
                  Available
                </label>
                <select
                  id="Role"
                  className="bg-gray-200 form-input w-full px-2 py-1 appearance-none rounded-md focus:border-indigo-600 text-black"
                >
                  <option value="volvo">True</option>
                  <option value="saab">False</option>
                </select>
              </div>
              <Form name="Rating" type="number" />
            </div>

            <div className="flex justify-between mt-8">
              <button
                onClick={() => handleMenu("Rooms")}
                className="px-1 py-2 bg-gray-00 text-gray-700 dark:text-white rounded-md bg-slave-700 dark:hover:text-gray-300 hover:text-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={() => handleMenu("Rooms")}
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

export default UpdateRoom;
