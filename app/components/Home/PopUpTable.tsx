import React from "react";

interface props {
    type: string;
    rating: number;
    available: boolean;
}

const PopUpTable = ( { type, rating, available }:props) => {

  return (
    <div className="w-full border border-slate-500 rounded-lg">
      <table className="w-full h-full text-center leading-10">
        <thead className=" border-b to-black">
          <tr>
            <th>Type</th>
            <th>Rating</th>
            <th>Available</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className=" border-r to-black">{type} </td>
            <td className=" border-r to-black">{rating} </td>
            <td>{available ? <span> Yes </span> : <span> No </span>}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PopUpTable;
