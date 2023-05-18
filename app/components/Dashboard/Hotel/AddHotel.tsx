import React, { useState } from "react";
import FormHotel from "./Form";
import { IHotel } from "@/app/models/hotels";

const AddHotel = (props: any) => {

  const [_id, set_id] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [rating, setRating] = useState(0);

  const handleSave = async () => {
    const newService: IHotel = {
      _id,
      name,
      address,
      city,
      country,
      rating
    };

    try {
      const res = await fetch("/api/Hotels/addHoteles/", {
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
      console.error("Error saving hotel:", error);
    }
    
  };

  return props.trigger ? (
    <div className="fixed top-0 left-0 w-[100%] h-[100vh] bg-[#00000066] flex justify-center items-center ">
      <div className="relative p-0 w-[100%] max-w-[890px] rounded-lg sm:p-5 dark:bg-gray-800 bg-white ">
        <div className="p-6 bg-white dark:bg-slate-800 rounded-md ">
          <h2 className="text-xl pb-2 text-gray-700 dark:text-white font-semibold capitalize">
            Add Hotel:
          </h2>

          <form>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-2">
            <FormHotel
                name="Name"
                type="text"
                value={name}
                onChange={(e:any) => setName(e.target.value)}
              />
              <FormHotel
                name="Address"
                type="text"
                value={address}
                onChange={(e:any) => setAddress(e.target.value)}
              />
              <FormHotel
                name="Id"
                type="text"
                value={_id}
                onChange={(e:any) => set_id(e.target.value)}
              />
              <FormHotel
                name="City"
                type="text"
                value={city}
                onChange={(e:any) => setCity(e.target.value)}
              />
              <FormHotel
                name="Country"
                type="text"
                value={country}
                onChange={(e:any) => setCountry(e.target.value)}
              />
              <FormHotel
                name="Rating"
                type="text"
                value={rating}
                onChange={(e:any) => setRating(e.target.value)}
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

export default AddHotel;
