import React, { useState, useContext } from "react";
import { ServiceViewContext, ServiceViewContextType } from "./Service";
import DeleteService from "./DeleteService";
import { IService } from "@/app/models/services";

const ServiceRow = ({ name, description, price, /*userId*/ }: IService) => {
  const { setMenu }: ServiceViewContextType = useContext(ServiceViewContext);
  const [deletePopup, setDeletePopup] = useState(false);

  const handleMenu = (param: string) => {
    setMenu(param);
    console.log(param);
  };

  const handleDelete = () => {
    setDeletePopup(true);
  };

  return (
    <tr>
      <td className="px-6 py-4 whitespace-no-wrap border-b dark:border-gray-700 border-gray-200">
        <div className="flex items-center">
          <div className="ml-4">
            <div className="text-sm leading-5 font-medium dark:text-white text-gray-900">
              {name}
            </div>
          </div>
        </div>
      </td>

      <td className="px-6 py-4 whitespace-no-wrap border-b dark:border-gray-700 border-gray-200">
        <div className="text-sm leading-5 dark:text-white text-gray-900">
          {description}
        </div>
      </td>

      <td className="px-6 py-4 whitespace-no-wrap border-b dark:border-gray-700 border-gray-200">
        <div className="text-sm leading-5 dark:text-white text-gray-900">
          {price}
        </div>
      </td>

      <td className="px-6 py-4 whitespace-no-wrap text-right border-b dark:border-gray-700 border-gray-200 text-sm leading-5 font-medium">
        <div className="flex justify-between px-3">
          <button
            onClick={() => handleMenu("Edit")}
            className="text-indigo-600 dark:text-indigo-500 hover:text-indigo-900 dark:hover:text-gray-300"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="text-indigo-600 dark:text-indigo-500 hover:text-indigo-900 dark:hover:text-gray-300"
          >
            Delete
          </button>
          <DeleteService
            trigger={deletePopup}
            setTrigger={setDeletePopup}
            /*userId={userId}*/
          />
        </div>
      </td>
    </tr>
  );
};

export default ServiceRow;
