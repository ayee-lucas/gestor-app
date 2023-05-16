import React from "react";
import Image from "next/image";
import Section from "./Section";

const Information = () => {
  return (
    <div className="h-full dark:bg-[#100724] dark:text-white ">
      <section className="flex w-full mb-10 px-4">
        <div className="flex items-center col-span-12 mt-10">
          <div className="flex justify-center px-10">
            <Image
              width={"800"}
              height={"400"}
              src={
                "https://images.unsplash.com/photo-1484108149850-e72c6f7b9f8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              }
              alt="background"
            />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-5 space-y-6 px-4 max-sm:px-0 mt-16 ">
          <h2 className="text-5xl max-sm:text-2xl font-semibold max-sm:text-center">
            Find Hotels for Your Stay
          </h2>
          <p className="paragraph max-sm:hidden">
            Take a look at the available hotels around the world
          </p>
          <button className="w-full sm:max-w-[200px] px-10 py-4 bg-inherit text-gradient border-2 rounded-full border-[#55149e] text-sm">
            Explore
          </button>
        </div>
      </section>

      <Section
        img="https://images.unsplash.com/photo-1598928636135-d146006ff4be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        title="Book a Room"
        description="Find the room that best suits your tastes and needs"
        linkText="Explore"
      />

      <section className="relative text-white object-cover overflow-hidden flex w-full py-[10rem] min-h-[300px] my-10">
        <img
          src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          className="rounded-2xl absolute z-10 w-full self-center"
          alt=""
        />
        <div className="col-span-12 lg:col-span-5 z-20 space-y-6 px-4 sm:px-6 mt-20">
          <h2 className="text-5xl font-semibold">
            Discover the Perfect Room for Your Tastes and Needs
          </p>
          <button className="w-full sm:max-w-[240px] px-10 py-4 bg-inherit text-gradient border-2 rounded-full border-[#55149e] text-sm">
            Organize
          </button>
        </div>
      </section>

      <Section
        img="https://images.unsplash.com/photo-1598928636135-d146006ff4be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        title="Additional Services"
        description="Other services we offer to provide that unique experience you're
            looking for"
        linkText="View Services"
      />

      <div className="border-t-[2px] border-separate border-[#55149e] mx-12" />

      <div className="p-10">
        <div className="md:w-2/3 lg:w-1/2 pl-3">
          <h2 className="my-8 text-3xl font-bold text-gray-700 dark:text-white md:text-5xl">
            Your Best Choice in Travel
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-justify">
            Your Best Choice in Travel At our travel and lodging company, we
            provide unique and personalized experiences. We take care of
            everything, from selecting accommodations to organizing activities,
            so that our clients can enjoy without worries. We make every journey
            unforgettable!
          </p>
        </div>
        <div className="mt-16 grid divide-x divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden rounded-3xl border border-gray-100 text-gray-600 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
          <div className="group relative bg-white dark:bg-gray-900 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
            <div className="relative space-y-8 py-12 p-8">
              <img
                src="https://cdn.icon-icons.com/icons2/3962/PNG/512/globe_global_web_internet_international_earth_eco_icon_252571.png"
                className="w-12"
                width="512"
                height="512"
                alt="burger illustration"
              />

              <div className="space-y-2">
                <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
                  Mundial
                </h5>
                <p className="text-gray-600 dark:text-gray-300">
                  Contamos con diversidad de lugares, transportes, hospedajes y
                  horarios para hacer de tus vacaciones una experiencia
                  inolvidable
                </p>
              </div>
              <a
                href="#"
                className="flex items-center justify-between group-hover:text-secondary"
              >
                <span className="text-sm">Ver más</span>
              </a>
            </div>
          </div>
          <div className="group relative bg-white dark:bg-gray-900 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
            <div className="relative space-y-8 py-12 p-8">
              <img
                src="https://cdn.icon-icons.com/icons2/2104/PNG/512/checklist_icon_129185.png"
                className="w-12"
                width="512"
                height="512"
                alt="burger illustration"
              />

              <div className="space-y-2">
                <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
                  Personalizable
                </h5>
                <p className="text-gray-600 dark:text-gray-300">
                  Podrás encontrar y elegir entre una gran variedad de opciones
                  que se te hagan más cómodas o más atractivas para realizar tu
                  viaje
                </p>
              </div>
              <a
                href="#"
                className="flex items-center justify-between group-hover:text-secondary"
              >
                <span className="text-sm">Ver más</span>
              </a>
            </div>
          </div>
          <div className="group relative bg-white dark:bg-gray-900 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
            <div className="relative space-y-8 py-12 p-8">
              <img
                src="https://cdn.icon-icons.com/icons2/2313/PNG/512/idea_thought_innovation_dollar_money_finance_icon_142020.png"
                className="w-12"
                width="512"
                height="512"
                alt="burger illustration"
              />

              <div className="space-y-2">
                <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
                  Accesible
                </h5>
                <p className="text-gray-600 dark:text-gray-300">
                  Manejamos un rango de precios muy variado, ofreciendo
                  distintos servicios que se adapten mejor al presupuesto que
                  tengas en mente
                </p>
              </div>
              <a
                href="#"
                className="flex items-center justify-between group-hover:text-secondary"
              >
                <span className="text-sm">Ver más</span>
              </a>
            </div>
          </div>
          <div className="group relative bg-white dark:bg-gray-900 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
            <div className="relative space-y-8 py-12 p-8">
              <img
                src="https://cdn.icon-icons.com/icons2/1603/PNG/512/security-protection-protect-lock-open-secure_108583.png"
                className="w-12"
                width="512"
                height="512"
                alt="burger illustration"
              />

              <div className="space-y-2">
                <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
                  Seguro
                </h5>
                <p className="text-gray-600 dark:text-gray-300">
                  Contamos con diversas medidas de seguridad y un plan de
                  prevención para cualquier tipo de accidente o inconveniente
                  que pueda surgir a lo largo del viaje
                </p>
              </div>
              <a
                href="#"
                className="flex items-center justify-between group-hover:text-secondary"
              >
                <span className="text-sm">Ver más</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t-[2px] border-separate border-[#55149e] mx-20 mt-16" />
    </div>
  );
};

export default Information;
