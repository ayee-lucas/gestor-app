import React from "react";

const DeleteUser = () => {
  return (
    <div>
        <div className="mt-4">
          <div className="max-w-sm w-full bg-white dark:bg-slate-800 shadow-md rounded-md overflow-hidden border dark:border-gray-600">
            <form>
              <div className="flex justify-between items-center px-5 py-3 text-gray-700 dark:text-white border-b dark:border-gray-600">
                <h3 className="text-sm">Delete</h3>
                <button>
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="px-5 py-6 bg-gray-200 dark:bg-slate-800 text-gray-700 dark:text-white border-b dark:border-gray-600">
                <label className="text-xs">Name</label>

                <div className="mt-2 relative rounded-md shadow-sm">
                  <input
                    type="text"
                    className="form-input w-full px-2 py-2 appearance-none rounded-md focus:border-indigo-600 text-black"
                  />
                </div>
              </div>

              <div className="flex justify-between items-center px-5 py-3">
                <button className="px-3 py-1 text-gray-700 text-sm rounded-md dark:text-white bg-gray-200 dark:bg-slate-800 hover:bg-gray-300 dark:hover:bg-slate-900 focus:outline-none">
                  Cancel
                </button>
                <button className="px-3 py-1 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-500 focus:outline-none">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
};

export default DeleteUser;
