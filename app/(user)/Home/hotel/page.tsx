import HotelClient from "../HotelClient";

const url = process.env.NEXTAUTH_URL as string;

async function fetchHotels() {
  const res = await fetch(`${url}/api/Hotels/`, {
    next: { revalidate: 100 },
  });

  if (!res.ok) throw new Error(res.statusText);

  const hotels = await res.json();


  return hotels;
}

export default async function HotelsPage() {

  const hotelsData = await fetchHotels();

  return  <HotelClient hotelsData={hotelsData} />
}
