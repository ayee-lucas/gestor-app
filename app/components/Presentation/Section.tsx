import React from "react";
import Image from "next/image";
import Link from "next/link";

const Section = ({img = '', title = '', subTitle = '', description = '', linkText = '', to = ''}) => {
  return (
    <>
      <section className="flex justify-between items-center w-full my-10 dark:after:line-clamp-2">
        <div className="ml-10 w-full col-span-12 lg:col-span-5 space-y-6 px-4 sm:px-6 mt-20">
          <h2 className="text-5xl font-semibold">{title}</h2>
          <p className="paragraph py-6 pb-10">
            {description}
          </p>
          <Link href={to} className="w-full sm:max-w-[240px] px-10 py-4 bg-inherit text-gradient border-2 rounded-full border-[#55149e] text-base">
            {linkText}
          </Link>
        </div>
        <div className="flex w-full col-span-12">
          <div className="flex justify-center px-10">
            <Image
              src={img}
              className="rounded-2xl"
              width={800}
              height={500}
              alt="bg img"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Section;
