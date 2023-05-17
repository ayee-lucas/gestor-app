import React from "react";

const TravelCard = () => {
  return (
    <div className="relative bg-white  dark:bg-zinc-900 dark:text-white shadow-xl rounded-lg overflow-hidden">
      <div
        className="bg-cover bg-center h-16 p-4 flex justify-end items-center "
        style={{
          background:
            "url('https://mosscm.com/wp-content/uploads/2017/11/news-dallas-skyline.jpg') no-repeat center",
        }}
      >
        <p className="uppercase tracking-widest text-sm text-white  bg-black py-1 px-2 rounded opacity-75 shadow-lg">
          Dallas, TX
        </p>
      </div>
      <div className="p-4 text-gray-700 flex justify-between ">
        <div>
          <p className="text-3xl text-gray-900 dark:text-zinc-400">
            <i className="wi wi-day-sunny text-yellow-500"></i> 84°
            <span className="text-lg text-gray-500 dark:text-white">/ 67°</span>
          </p>
          <p className="text-sm w-56 dark:text-zinc-400">
            Mostly sunny throughout the day.
            <br />
            4-8 MPH winds.
          </p>
        </div>
        <div className="leading-loose text-sm">
          <div className="flex items-center">
            <i className="mr-2 wi wi-horizon-alt text-yellow-500"></i>
            <p>
              <span className="font-bold dark:text-zinc-400">6:57</span>{" "}
              <span className="text-xs text-gray-600 dark:text-zinc-400">AM</span>
            </p>
          </div>
          <div className="flex items-center">
            <i className="mr-2 wi wi-horizon text-purple-400"></i>
            <p>
              <span className="font-bold dark:text-zinc-400">5:42</span>{" "}
              <span className="text-xs text-gray-600 dark:text-zinc-400">PM</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center p-4 border-t border-gray-300 text-gray-600">
        <div className="flex items-center">
          <i className="mr-2 wi wi-hot"></i>
          <p>
            <span className="text-gray-900 font-bold dark:text-zinc-400">7</span>{" "}
            <span className="text-sm dark:text-zinc-400">UV</span>
          </p>
        </div>
        <div className="flex items-center">
          <i className="mr-2 wi wi-rain"></i>
          <p>
            <span className="text-gray-900 font-bold dark:text-zinc-400">8%</span>{" "}
            <span className="text-sm dark:text-zinc-400">Precip</span>
          </p>
        </div>
        <div className="flex items-center">
          <i className="mr-2 wi wi-thermometer"></i>
          <p>
            <span className="text-gray-900 font-bold dark:text-zinc-400">59°</span>{" "}
            <span className="text-sm dark:text-zinc-400">Dew Point</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TravelCard;
