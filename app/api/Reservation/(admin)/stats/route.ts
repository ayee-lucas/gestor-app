import dbConnect from "@/app/utils/DatabaseConnection";
import Reservation from "@/app/models/reservation";
import Room from "@/app/models/rooms";
import Hotel from "@/app/models/hotels";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { NextRequest, NextResponse } from "next/server";

// Conectar a la base de datos
dbConnect();

export async function GET(request: NextRequest) {
  const url = process.env.NEXTAUTH_URL as string;
  const session = await getServerSession(authOptions);

  try {
    if (!session?.user || session.user.role !== "admin") {
      return new NextResponse("Unauthorized", {
        status: 401,
      });
    }

    // Buscar todos los hoteles
    const hotels = await Hotel.find();

    if (hotels.length === 0) {
      return new NextResponse("No hotels found", {
        status: 404,
      });
    }

    // Objeto para almacenar las estadísticas de los hoteles
    const statistics: { [hotelName: string]: number } = {};

    // Iterar sobre cada hotel
    for (const hotel of hotels) {
      // Consultar todas las habitaciones que pertenezcan al hotel actual
      const rooms = await Room.find({ hotel: hotel._id });

      // Obtener el número total de reservaciones para las habitaciones del hotel actual
      let totalReservations = 0;
      for (const room of rooms) {
        const reservations = await Reservation.find({ room: room._id });
        totalReservations += reservations.length;
      }

      // Almacenar el número de reservaciones para el hotel actual
      statistics[hotel.name] = totalReservations;
    }

    // Ordenar los hoteles por el número de reservaciones (de mayor a menor)
    const sortedHotels = Object.entries(statistics).sort(
      (a, b) => b[1] - a[1]
    );

    // Verificar si se encontraron reservaciones para algún hotel
    if (sortedHotels.length === 0) {
      return new NextResponse("No reservations found", {
        status: 404,
      });
    }

    return new NextResponse(JSON.stringify(sortedHotels), {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify(err), {
      status: 500,
    });
  }
}
