import React, { useState, useEffect } from "react";
import AddService from "./AddService";
import ServiceRow from "./ServiceRow";
import { IService } from "@/app/models/services";

const ServiceTable = () => {

    const [services, setServices] = useState<IService[]>([]);

    const [addPopup, setAddPopup] = useState(false);

    useEffect (() => {
        async function getServices() {
            const res = await fetch(`/api/Services/`, {
              next: {revalidate: 100}
            });
          
            if (!res.ok) throw new Error(res.statusText);
          
            const services: IService[] = await res.json();
            setServices(services)
            console.log(services)
        }  

        getServices();

    }, []);

    return(
        
        <div>
            <h3 className="text-gray-700 dark:text-white text-3xl font-semibold pt-5">Services</h3>
            <div className="flex justify-between my-6 text-sm">
              <button onClick={() => setAddPopup(true)} className="px-4 py-2 bg-gray-00 text-gray-300 rounded-md bg-indigo-700 hover:bg-indigo-500 hover:text-white focus:outline-none focus:bg-indigo-600">
                Add Service
              </button>
            </div>
            <div className="flex flex-col">
                <div className="-my-2 py-2 overflow-x-auto overflow-y-auto max-h-[490px] sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                    <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b dark:border-gray-700 border-gray-200">
                        <table className="min-w-full">
                            <thead>
                                <tr>
                                    <th className="px-6 py-3 border-b dark:border-gray-700 border-gray-200 dark:bg-[#100724] bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 dark:text-white uppercase tracking-wider">Name</th>
                                    <th className="px-6 py-3 border-b dark:border-gray-700 border-gray-200 dark:bg-[#100724] bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 dark:text-white uppercase tracking-wider">Description</th>
                                    <th className="px-6 py-3 border-b dark:border-gray-700 border-gray-200 dark:bg-[#100724] bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 dark:text-white uppercase tracking-wider">price</th>
                                    <th className="px-6 py-3 border-b dark:border-gray-700 border-gray-200 dark:bg-[#100724] bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 dark:text-white uppercase tracking-wider">Options</th>
                                </tr>
                            </thead>

                            <tbody className="bg-white dark:bg-slate-800">
                                {services.map((service: IService) => (
                                    <ServiceRow key={service.name} name={service.name} description={service.description} price={service.price} createdAt={service.createdAt}/>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <AddService trigger={addPopup} setTrigger={setAddPopup}/>
        </div>

        
    );
}

export default ServiceTable;