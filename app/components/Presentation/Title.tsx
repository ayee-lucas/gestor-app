import React from "react";
import Link from "next/link";

const Title = ({title = '', button = ''}) => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <div className="text-8xl">{title}</div>
      <Link href={'/Home'} className="absolute bottom-20 px-4 py-2 bg-indigo-600 text-white rounded-xl">{button}</Link>
    </div>
  );
};

export default Title;
