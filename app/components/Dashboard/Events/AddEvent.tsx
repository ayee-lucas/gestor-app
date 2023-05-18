import React, { useState } from "react";
import Form from "./Form";
import { IEvent } from "@/app/models/event";
import FormEvent from "./Form";

const AddEvent = (props: any) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [maxCapacity, setMaxCapacity] = useState(0);

  const handleSave = async () => {
    const newService: IEvent = {
      name,
      type,
      description,
      price,
      maxCapacity
    };

    try {
      const res = await fetch("/api/Event/search/123123", {
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
      console.error("Error saving event:", error);
    }
  };

  return props.trigger ? (
    <div className="fixed top-0 left-0 w-[100%] h-[100vh] bg-[#00000066] flex justify-center items-center ">
      <div className="relative p-0 w-[100%] max-w-[890px] rounded-lg sm:p-5 dark:bg-gray-800 bg-white ">
        <div className="p-6 bg-white dark:bg-slate-800 rounded-md ">
          <h2 className="text-xl pb-2 text-gray-700 dark:text-white font-semibold capitalize">
            Add Event:
          </h2>

          <form>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-2">
              <FormEvent
                  name="Name"
                  type="text"
                  value={name}
                  onChange={(e:any) => setName(e.target.value)}
                />
                <FormEvent
                  name="Type"
                  type="text"
                  value={type}
                  onChange={(e:any) => setType(e.target.value)}
                />
                <FormEvent
                  name="Description"
                  type="text"
                  value={description}
                  onChange={(e:any) => setDescription(e.target.value)}
                />
                <FormEvent
                  name="Price"
                  type="number"
                  value={price}
                  onChange={(e:any) => setPrice(e.target.value)}
                />
                <FormEvent
                  name="Max Capacity"
                  type="number"
                  value={maxCapacity}
                  onChange={(e:any) => setMaxCapacity(e.target.value)}
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

export default AddEvent;
