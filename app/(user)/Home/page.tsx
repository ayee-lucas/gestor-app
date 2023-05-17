import HotelCardSm, { IHotelCardSm } from "@/app/components/Home/HotelCardSm";
import RoomCard from "@/app/components/Home/RoomCard";
import { IRoom } from "@/app/models/rooms";

const url = process.env.NEXTAUTH_URL as string;

async function getRooms() {
  const res = await fetch(`${url}/api/Rooms/`, {
    next: {revalidate: 100}
  });

  if (!res.ok) throw new Error(res.statusText);

  const rooms = await res.json();

  return rooms;
}

async function getHotels() {
  const res = await fetch(`${url}/api/Hotels/`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error(res.statusText);

  const hotels = await res.json();

  return hotels;
}

export default async function Home() {
  const roomsData = await getRooms();

  const hotelsData = await getHotels();

  console.log(hotelsData);

  return (
    <>
      <div className="w-full h-full p-4">
        <div className="w-full h-full bg-indigo-100 p-2 rounded-lg">
          <h1 className="text-2xl font-semibold">Sophisticated</h1>
          <div className="grid grid-flow-col gap-4 col-auto overflow-x-auto p-6 scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-300 scroll-smooth">
            {hotelsData.map((hotel: IHotelCardSm) => (
              <HotelCardSm
                name={hotel.name}
                country={hotel.country}
                city={hotel.city}
                rating={hotel.rating}
                address={hotel.address}
              />
            ))}
          </div>
        </div>

        <h1 className="text-5xl font-bold py-10">Rooms</h1>
        <div className="w-full h-full py-4 flex flex-wrap justify-evenly gap-y-5">
          {roomsData.map((room: IRoom) => (
            <RoomCard
              hotel={room.hotel}
              location={room.location}
              smallDescription={room.shortDescription}
              image="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=Mn wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
              price={room.price}
              type={room.type}
              rating={room.rating}
            />
          ))}
        </div>
      </div>
    </>
  );
}
