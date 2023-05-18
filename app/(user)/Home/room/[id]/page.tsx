import Room from "@/app/models/rooms";
import { AiOutlineArrowLeft, AiOutlineSwapRight } from "react-icons/ai";
import Link from "next/link";
import Rating from "@/app/components/elements/Rating";
import Image from "next/image";
import Hotel from "@/app/models/hotels";
import { revalidatePath } from "next/cache";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Reservation from "@/app/models/reservation";

const url = process.env.NEXTAUTH_URL as string;

export default async function RoomId({ params }: { params: { id: string } }) {
  async function getRoom() {
    const room = await Room.findOne({ _id: params.id }).populate({
      path: "hotel",
      model: Hotel,
    });

    return room;
  }

  const session = await getServerSession(authOptions);

  if (session?.user.name === undefined) {
    return redirect(`${url}/account/login`);
  }

  async function postReservation(data: FormData) {
    "use server";

    const room = data.get("room");
    const attendees = data.get("attendees");
    const user = data.get("user");

    const json = { room, attendees, user };

    console.log({ room, attendees });
    console.log({ url: `${url}/api/Reservation/` });

    const roomData = await Room.findById(room);

    if (!roomData || !roomData.available) {
      console.log("Room not available");
      throw new Error("Error");
    }

    const reservation = new Reservation(json);

    const saveReservation = await reservation.save();

    console.log(saveReservation);

    roomData.available = false;

    await roomData.save();

    revalidatePath(`/Home/room/${room}`);
  }

  const roomData = await getRoom();

  return (
    <div className="flex flex-col px-5 py-10">
      <div className="flex justify-between items-center">
        <h3 className="text-3xl font-light"> Room </h3>
        <Link href={"/Home/"} className=" cursor-pointer">
          <AiOutlineArrowLeft size={30} />
        </Link>
      </div>
      <h1 className="text-5xl font-light mt-10"> {roomData.name} </h1>
      <div className="flex justify-between items-center py-5">
        <Image
          src={
            "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          }
          width={850}
          height={900}
          className="rounded-xl"
          alt="bgimage"
        />
        <div className=" w-full px-6">
          <h1 className="text-2xl font-bold">{roomData.type}</h1>
          <p className="text-2xl px-1 py-3 font-light">
            {roomData.hotel.address}{" "}
          </p>
          <p className="text-xl py-3">{roomData.shortDescription} </p>
          <p className="text-xl py-5">{roomData.description} </p>

          <div className="w-full border border-slate-500 rounded-lg">
            <table className="w-full h-full text-center leading-10">
              <thead className=" border-b to-black">
                <tr>
                  <th>Country</th>
                  <th>Rating</th>
                  <th>Price</th>
                  <th>Available</th>
                  <th>Room #</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className=" border-r to-black max-w-[40px]">
                    {roomData.hotel.country}{" "}
                  </td>
                  <td className=" border-r to-black">
                    {roomData.hotel.rating}{" "}
                  </td>
                  <td className=" border-r to-black">{roomData.price} </td>
                  <td>
                    {roomData.available ? (
                      <span> Yes </span>
                    ) : (
                      <span> No </span>
                    )}
                  </td>

                  <td className=" border-r to-black">{roomData.number} </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className=" py-3">
            <Rating rating={roomData.rating} />
          </div>
          <form action={postReservation}>
            <label className=" px-3">People</label>
            <input
              type="text"
              className=" border text-center border-black"
              name="attendees"
              defaultValue={1}
            />
            <label className=" px-3"> Room: </label>

            <label className="px-3">{roomData.number}</label>

            <input
              type="text"
              className=" border opacity-0 text-center"
              name="room"
              disabled
              defaultValue={params.id}
            />
            <label className=" px-3">User:</label>
            <label className="px-3">{session?.user.name}</label>

            <input
              type="text"
              disabled
              className=" border text-center opacity-0 "
              name="user"
              defaultValue={session?.user.id}
            />

            <button
              type="submit"
              disabled={roomData.available ? false : true}
              className="flex items-center w-full mt-4 p-3 transition-all
              hover:bg-indigo-700 hover:text-white rounded-md disabled:hover:bg-red-700 disabled:hover:text-white
              "
            >
              <span> Book Now</span>
              <AiOutlineSwapRight className="text-2xl ml-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
