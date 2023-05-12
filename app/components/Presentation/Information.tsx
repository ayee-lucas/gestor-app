import React from "react";

const Information = ( ) => {
  return (
    <div className="h-full dark:bg-[#100724] dark:text-white ">
      <section className="flex w-full mb-20 px-4">
        <div className="flex items-center col-span-12 mt-10">
          <div className="flex justify-center px-10 max-sm:px-4">
            <img
              src="https://images.unsplash.com/photo-1561501900-3701fa6a0864?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              className="rounded-2xl"
              alt=""
            />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-5 space-y-6 px-4 sm:px-6 mt-20">
          <h2 className="text-5xl max-sm:text-2xl font-semibold">Find Hotels for Your Stay</h2>
          <p className="paragraph max-sm:hidden">
            Take a look at the available hotels around the world
          </p>
          <button className="w-full sm:max-w-[200px] px-10 py-4 bg-inherit text-gradient border-2 rounded-full border-[#55149e] text-base">
            Explore
          </button>
        </div>
      </section>

      <section className="flex w-full my-10">
        <div className="ml-10 col-span-12 lg:col-span-5 space-y-6 px-4 sm:px-6 mt-20">
          <h2 className="text-5xl font-semibold">Book a Room</h2>
          <p className="paragraph">
            Find the room that best suits your tastes and needs
          </p>
          <button className="w-full sm:max-w-[240px] px-10 py-4 bg-inherit text-gradient border-2 rounded-full border-[#55149e] text-base">
            Explore
          </button>
        </div>
        <div className="flex items-center col-span-12">
          <div className="flex justify-center px-10">
            <img
              src="https://images.unsplash.com/photo-1598928636135-d146006ff4be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              className="rounded-2xl"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="flex w-full my-10">
        <div className="flex items-center col-span-12">
          <div className="flex justify-center px-10">
            <img
              src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              className="rounded-2xl"
              alt=""
            />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-5 space-y-6 px-4 sm:px-6 mt-20">
          <h2 className="text-5xl font-semibold">
            Plan Events with Us
          </h2>
          <p className="paragraph">
            Discover the Perfect Room for Your Tastes and Needs
          </p>
          <button className="w-full sm:max-w-[240px] px-10 py-4 bg-inherit text-gradient border-2 rounded-full border-[#55149e] text-base">
            Organize Events
          </button>
        </div>
      </section>

      <section className="flex w-full my-10">
        <div className="items-center ml-10 col-span-12 lg:col-span-5 space-y-6 px-4 sm:px-6 mt-20">
          <h2 className="text-5xl font-semibold">Additional Services</h2>
          <p className="paragraph">
            Other services we offer to provide that unique experience you're
            looking for
          </p>
          <button className="w-full sm:max-w-[240px] px-10 py-4 bg-inherit text-gradient border-2 rounded-full border-[#55149e] text-base">
            View Services
          </button>
        </div>
        <div className="flex items-center col-span-12">
          <div className="flex justify-center px-10">
            <img
              src="https://images.unsplash.com/photo-1561501900-3701fa6a0864?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              className="rounded-2xl"
              alt=""
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default Information;
