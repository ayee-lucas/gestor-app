"use server";

import Hotel from "@/app/models/hotels";
import User from "@/app/models/User";
import Link from "next/link";
import Room, { IRoom } from "@/app/models/rooms";
import Image from "next/image";
import Rating from "@/app/components/elements/Rating";
import RoomCard from "@/app/components/Home/RoomCard";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default async function hotel({ params }: { params: { id: string } }) {
  async function getHotel() {
    const hotel = await Hotel.findOne({ _id: params.id }).populate({
      path: "rooms",
      model: Room,
    });

    return hotel;
  }

  const findHotel = await getHotel();

  async function getAdmin() {
    const idAdmin = findHotel.admin.toString();

    const admin = await User.findOne({ _id: idAdmin });

    return admin;
  }

  const roomData = findHotel.rooms;

  const admin = await getAdmin();

  const availableRooms = roomData.filter((room: IRoom) => room.available);
  const unavailableRooms = roomData.filter((room: IRoom) => !room.available);

  return (
    <div className="flex flex-col px-5 py-10">
      <div className="flex justify-between items-center">
        <h3 className="text-3xl font-light"> Hotel </h3>
        <Link href={"/Home/hotel"} className=" cursor-pointer">
          <AiOutlineArrowLeft size={30} />
        </Link>
      </div>
      <h1 className="text-5xl font-light mt-10"> {findHotel.name} </h1>
      <div className="flex justify-between items-center py-5">
        <Image
          src={
            "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80"
          }
          width={850}
          height={900}
          className="rounded-xl"
          alt="bgimage"
        />
        <div className=" w-full px-6">
          <h1 className="text-2xl font-bold">Description</h1>

          <p className="text-2xl px-1 py-3 font-light">{findHotel.city} </p>

          <p className="text-xl py-3">{findHotel.description} </p>

          <div className="w-full border border-slate-500 rounded-lg">
            <table className="w-full h-full text-center leading-10">
              <thead className=" border-b to-black">
                <tr>
                  <th>Country</th>
                  <th>Rating</th>
                  <th>Administrator</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className=" border-r to-black">{findHotel.country} </td>
                  <td className=" border-r to-black">{findHotel.rating} </td>
                  <td className=" max-w-[10px] border-r to-black">
                    {admin.name} {admin.surname}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className=" py-3">
            <Rating rating={findHotel.rating} />
          </div>
        </div>
      </div>

      <div
        className={
          unavailableRooms === 0
            ? "grid grid-cols-2 gap-2"
            : "flex flex-wrap justify-center p-7 items-center gap-4"
        }
      >
        {availableRooms.length > 0 && (
          <div>
            <h1 className=" p-3 text-3xl">Rooms Available</h1>

            <div className="flex flex-wrap justify-center p-7 items-center gap-4">
              {findHotel.rooms.length > 0 ? (
                roomData.map((room: any) =>
                  room.available ? (
                    <RoomCard
                      available={room.available}
                      _id={room._id.toString()}
                      description={room.description}
                      image="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=Mn wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                      price={room.price}
                      number={room.number}
                      rating={room.rating}
                      shortDescription={room.shortDescription}
                      type={room.type}
                      key={room.number}
                    />
                  ) : null
                )
              ) : (
                <div className="text-center text-xl text-gray-600">
                  No rooms available at the moment :( <br /> Check again later
                  tho!
                </div>
              )}
            </div>
          </div>
        )}

        {unavailableRooms.length > 0 && (
          <div>
            <h1 className=" p-3 text-3xl">Rooms Unavailable</h1>
            <div className="flex flex-wrap justify-center p-7 items-center gap-4">
              {findHotel.rooms.length > 0 ? (
                roomData.map((room: any) =>
                  room.available ? null : (
                    <RoomCard
                      available
                      description={room.description}
                      _id={room._id}
                      shortDescription={room.shortDescription}
                      image="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=Mn wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                      price={room.price}
                      number={room.number}
                      rating={room.rating}
                      type={room.type}
                      key={room.number}
                    />
                  )
                )
              ) : (
                <div className="text-center text-xl text-gray-600">
                  No rooms available at the moment :( <br /> Check again later
                  tho!
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
