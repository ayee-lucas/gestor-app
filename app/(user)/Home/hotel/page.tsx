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

async function getLocations() {
  const res = await fetch(`${url}/api/Locations/`, {
    next: { revalidate: 100 },
  });

  if (!res.ok) throw new Error(res.statusText);

  const locations = await res.json();

  return locations;
}



export default async function HotelsPage() {
  const locationsData = await fetchHotels();
  const hotelsData = await fetchHotels();

  return <HotelClient hotelsData={hotelsData} locationData={locationsData}   />;
}
