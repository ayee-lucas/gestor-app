import React from "react";

const Hero = () =>{
    return(
        <div className="relative dark:bg-[#100724]" id="home">
            <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
                <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
                <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
            </div>
            <div>
                <div className="relative pt-36 ml-auto">
                    <div className="lg:w-2/3 text-center mx-auto">
                        <h1 className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">Viajar nunca fue <span className="text-primary dark:text-white">tan sencillo</span></h1>
                        <p className="mt-8 text-gray-700 dark:text-gray-300">Inicia sesión o registrate para poder disfrutar de todos los beneficios y ventajas de viajar en Roomfly y comienza a planificar tu viaje perfecto sin complicaciones</p>
                        <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
                            <button className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max">
                            <span
                                className="relative text-base font-semibold text-primary dark:text-white"
                                >Iniciar Sesión</span
                            >
                            </button>
                            <button
                            className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
                            >
                            <span
                                className="relative text-base font-semibold text-primary dark:text-white"
                                >Registrate</span
                            >
                            </button>
                        </div>
                        <div className="hidden py-8 mt-16 border-y border-gray-100 dark:border-gray-800 sm:flex justify-between">
                            <div className="text-left">
                                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">Los mejores precios</h6>
                                <p className="mt-2 text-gray-500">Ofertas y descuentos</p>
                            </div>
                            <div className="text-left">
                                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">Atención Rápida</h6>
                                <p className="mt-2 text-gray-500">Bajos tiempos de respuesta</p>
                            </div>
                            <div className="text-left">
                                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">Fácil de utilizar</h6>
                                <p className="mt-2 text-gray-500">Diseño Intuitivo</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6">
                        <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
                            <img src="./images/clients/microsoft.svg" className="h-12 w-auto mx-auto" loading="lazy" alt="client logo" width="" height="" />
                        </div>
                        <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
                        <img src="./images/clients/airbnb.svg" className="h-12 w-auto mx-auto" loading="lazy" alt="client logo" width="" height="" />
                        </div>
                        <div className="p-4 flex grayscale transition duration-200 hover:grayscale-0">
                        <img src="./images/clients/google.svg" className="h-9 w-auto m-auto" loading="lazy" alt="client logo" width="" height="" />
                        </div>
                        <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
                            <img src="./images/clients/ge.svg" className="h-12 w-auto mx-auto" loading="lazy" alt="client logo" width="" height="" />
                        </div>
                        <div className="p-4 flex grayscale transition duration-200 hover:grayscale-0">
                            <img src="./images/clients/netflix.svg" className="h-8 w-auto m-auto" loading="lazy" alt="client logo" width="" height="" />
                        </div>
                        <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
                            <img src="./images/clients/google-cloud.svg" className="h-12 w-auto mx-auto" loading="lazy" alt="client logo" width="" height="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;