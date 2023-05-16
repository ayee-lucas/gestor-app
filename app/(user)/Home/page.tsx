import RoomCard from "@/app/components/Home/RoomCard";
import { IRoom } from "@/app/models/rooms";

const url = process.env.NEXTAUTH_URL as string;

async function getRooms() {
  const res = await fetch(`${url}/api/Rooms/`, {
   cache: 'no-store'
  });

  if (!res.ok) throw new Error(res.statusText);

  const rooms = await res.json();



  return rooms;
}

export default async function Home() {
  const roomsData = await getRooms();

  console.log({ roomsData: roomsData });

  return (
    <div className="w-full h-full p-4">
      <h1 className="text-5xl font-bold">Rooms</h1>
      <div className="w-full h-full py-4 flex flex-wrap justify-start gap-3">
        {roomsData.map((room: IRoom) => (
          <RoomCard
            description={room.description}
            price={room.price}
            type={room.type}
          />
        ))}
      </div>
    </div>
  );
}
