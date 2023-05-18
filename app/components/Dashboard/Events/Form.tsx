import React from "react";

const FormEvent = ({ name = "", type = "", value, onChange }:any) => {
  return (
    <div>
      <label className="text-gray-700 dark:text-gray-300" htmlFor="username">
        {name}
      </label>
      <input
        className="bg-gray-200 border form-input w-full px-2 py-1 appearance-none rounded-md focus:border-indigo-600 text-black"
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FormEvent;
