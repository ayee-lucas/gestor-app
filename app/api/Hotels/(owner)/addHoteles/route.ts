import dbConnect from "@/app/utils/DatabaseConnection";
import Hotel from "@/app/models/hotels";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { NextRequest, NextResponse } from "next/server";

// Conectar a la base de datos
dbConnect();

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    // Verificar si el usuario está autenticado y es un administrador
    if (!session?.user || session.user.role !== "owner") {
      return new NextResponse("Unauthorized", {
        status: 401,
      });
    }

    const { name, admin, address, city, country, rating, rooms } = await request.json();

    // Crear un nuevo objeto Hotel con los datos proporcionados
    const hotelData = {
      name,
      admin,
      address,
      city,
      country,
      rating,
      rooms: rooms || [],
    };

    // Crear una nueva instancia del modelo Hotel
    const hotel = new Hotel(hotelData);

    // Guardar el hotel en la base de datos
    const savedHotel = await hotel.save();

    return new NextResponse(JSON.stringify(savedHotel), {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify(err), {
      status: 500,
    });
  }
}
