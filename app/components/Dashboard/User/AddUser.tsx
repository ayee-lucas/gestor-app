import React from "react";
import Form from "./Form";

const AddUser = () => {
  return (
    <div>
        <h4 className="text-gray-600 dark:text-white">Add User</h4>

        <div className="mt-4">
          <div className="p-6 bg-gray-200 dark:bg-slate-800 rounded-md shadow-md">
            <h2 className="text-lg text-gray-700 dark:text-white font-semibold capitalize">
              Credentials:
            </h2>

            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-2">
                <Form name="Identifier" type="text"/>
                <Form name="Name" type="text"/>
                <Form name="Surname" type="text"/>
                <Form name="Email" type="email"/>
                <Form name="Tel" type="number"/>
                <Form name="Role" type="text"/>
                <Form name="Password" type="password"/>
              </div>

              <div className="flex justify-end mt-4">
                <button className="px-4 py-2 bg-gray-00 text-gray-300 rounded-md bg-indigo-700 hover:bg-indigo-500 focus:outline-none focus:bg-indigo-600">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
};

export default AddUser;
