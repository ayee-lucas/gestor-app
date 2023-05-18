import React, { useState } from "react";
import FormService from "./Form";
import { IService } from "@/app/models/services";

const AddService = (props: any) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);

  const handleSave = async () => {
    const newService: IService = {
      name,
      description,
      price
    };

    try {
      const res = await fetch("/api/Services/search/123123", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newService),
      });

      if (!res.ok) throw new Error(res.statusText);

      // Lógica adicional después de guardar el servicio...

      props.setTrigger(false);
    } catch (error) {
      console.error("Error saving service:", error);
    }
  };

  return props.trigger ? (
    <div className="fixed top-0 left-0 w-[100%] h-[100vh] bg-[#00000066] flex justify-center items-center ">
      <div className="relative p-0 w-[100%] max-w-[890px] rounded-lg sm:p-5 dark:bg-gray-800 bg-white ">
        <div className="p-6 bg-white dark:bg-slate-800 rounded-md ">
          <h2 className="text-xl pb-2 text-gray-700 dark:text-white font-semibold capitalize">
            Add Service
          </h2>

          <form>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-2">
              <FormService
                name="Name"
                type="text"
                value={name}
                onChange={(e:any) => setName(e.target.value)}
              />
              <FormService
                name="Description"
                type="text"
                value={description}
                onChange={(e:any) => setDescription(e.target.value)}
              />
              <FormService
                name="Price"
                type="number"
                value={price}
                onChange={(e:any) => setPrice(Number(e.target.value))}
              />
            </div>

            <div className="flex justify-between mt-8">
              <button
                onClick={() => props.setTrigger(false)}
                className="px-1 py-2 bg-gray-00 text-gray-800 dark:text-gray-300 rounded-md bg-slave-700 dark:hover:text-white hover:text-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
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

export default AddService;

