import React from "react";

const Information = () => {
  return (
    <div className="h-full dark:bg-[#100724] dark:text-white ">

      <section className="flex w-full mb-20">
        <div className="flex items-center col-span-12 mt-10">
          <div className="flex justify-center px-10">
            <img
              src="https://images.unsplash.com/photo-1561501900-3701fa6a0864?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" className="rounded-2xl" alt=""
            />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-5 space-y-6 px-4 sm:px-6 mt-20">
          <h2 className="text-5xl font-semibold">
            Encuentra hoteles para hospedarte
          </h2>
          <p className="paragraph">Echa un vistazo a los hoteles disponibles alrededor del mundo</p>
          <button className="w-full sm:max-w-[240px] px-10 py-4 bg-inherit text-gradient border-2 rounded-full border-[#55149e] text-base">Ver Hoteles</button>
        </div>
      </section>

      <section className="flex w-full my-10">
        <div className="ml-10 col-span-12 lg:col-span-5 space-y-6 px-4 sm:px-6 mt-20">
          <h2 className="text-5xl font-semibold">
            Reserva una habitación
          </h2>
          <p className="paragraph">Busca la habitación que mejor se adapte a tus gustos y necesidades</p>
          <button className="w-full sm:max-w-[240px] px-10 py-4 bg-inherit text-gradient border-2 rounded-full border-[#55149e] text-base">Ver Habitaciones</button>
        </div>
        <div className="flex items-center col-span-12">
          <div className="flex justify-center px-10">
            <img
              src="https://images.unsplash.com/photo-1598928636135-d146006ff4be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="rounded-2xl" alt=""
            />
          </div>
        </div>
      </section>

      <section className="flex w-full my-10">
        <div className="flex items-center col-span-12">
          <div className="flex justify-center px-10">
            <img
              src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="rounded-2xl" alt=""
            />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-5 space-y-6 px-4 sm:px-6 mt-20">
          <h2 className="text-5xl font-semibold">
            Organiza eventos
          </h2>
          <p className="paragraph">Planifica fiestas, reuniones o distintos tipos de eventos con nosotros</p>
          <button className="w-full sm:max-w-[240px] px-10 py-4 bg-inherit text-gradient border-2 rounded-full border-[#55149e] text-base">Organizar Evento</button>
        </div>
      </section>

      <section className="flex w-full my-10">
        <div className="items-center ml-10 col-span-12 lg:col-span-5 space-y-6 px-4 sm:px-6 mt-20">
          <h2 className="text-5xl font-semibold">
            Servicios Adicionales
          </h2>
          <p className="paragraph">Otros servicios que te ofrecemos para conseguir esa experiencia única que buscas</p>
          <button className="w-full sm:max-w-[240px] px-10 py-4 bg-inherit text-gradient border-2 rounded-full border-[#55149e] text-base">Ver Servicios</button>
        </div>
        <div className="flex items-center col-span-12">
          <div className="flex justify-center px-10">
            <img
              src="https://images.unsplash.com/photo-1561501900-3701fa6a0864?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" className="rounded-2xl" alt=""
            />
          </div>
        </div>
        
      </section>

      <div className="border-t-[2px] border-separate border-[#55149e] mx-12"/>

      <div className="p-10">
        <div className="md:w-2/3 lg:w-1/2 pl-3">

          <h2 className="my-8 text-3xl font-bold text-gray-700 dark:text-white md:text-5xl">
            Tu mejor opción en viajes
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-justify">En nuestra empresa de viajes y hospedaje, brindamos experiencias únicas y
            personalizadas. Nos encargamos de todo, desde la selección de hospedaje hasta la organización de actividades, para que nuestros
            clientes puedan disfrutar sin preocupaciones. ¡Hacemos que cada viaje sea inolvidable!</p>
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
                <h5
                  className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary"
                >
                  Mundial
                </h5>
                <p className="text-gray-600 dark:text-gray-300">
                  Contamos con diversidad de lugares, transportes, hospedajes y horarios para hacer de tus vacaciones
                  una experiencia inolvidable
                </p>
              </div>
              <a href="#" className="flex items-center justify-between group-hover:text-secondary">
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
                <h5
                  className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary"
                >
                  Personalizable
                </h5>
                <p className="text-gray-600 dark:text-gray-300">
                  Podrás encontrar y elegir entre una gran variedad de opciones que se te hagan
                  más cómodas o más atractivas para realizar tu viaje
                </p>
              </div>
              <a href="#" className="flex items-center justify-between group-hover:text-secondary">
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
                <h5
                  className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary"
                >
                  Accesible
                </h5>
                <p className="text-gray-600 dark:text-gray-300">
                  Manejamos un rango de precios muy variado, ofreciendo distintos servicios que se adapten
                  mejor al presupuesto que tengas en mente
                </p>
              </div>
              <a href="#" className="flex items-center justify-between group-hover:text-secondary">
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
                <h5
                  className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary"
                >
                  Seguro
                </h5>
                <p className="text-gray-600 dark:text-gray-300">
                  Contamos con diversas medidas de seguridad y un plan de prevención para cualquier tipo de accidente
                  o inconveniente que pueda surgir a lo largo del viaje
                </p>
              </div>
              <a href="#" className="flex items-center justify-between group-hover:text-secondary">
                <span className="text-sm">Ver más</span>
              </a>
            </div>
          </div>
        </div>

      </div>

      <div className="border-t-[2px] border-separate border-[#55149e] mx-20 mt-16"/>

    </div>


  );
}

export default Information;