import React from "react";

const AddUser = ({ name = "", type = "" }) => {
  return (
    <div>
      <label className="text-gray-700 dark:text-gray-300" htmlFor="username">
        {name}
      </label>
      <input
        className="bg-gray-200 border form-input w-full px-2 py-1 appearance-none rounded-md focus:border-indigo-600 text-black"
        type={type}
      />
    </div>
  );
};

export default AddUser;
