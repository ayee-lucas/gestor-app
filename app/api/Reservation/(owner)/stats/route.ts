/* import dbConnect from "@/app/utils/DatabaseConnection";
import Reservation from "@/app/models/reservation";
import Hotel from "@/app/models/hotel";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { NextRequest, NextResponse } from "next/server";

// Conectar a la base de datos
dbConnect();

export async function GET(request: NextRequest) {
  const url = process.env.NEXTAUTH_URL as string;
  const session = await getServerSession(authOptions);

  if (session?.user.name === undefined) {
    return NextResponse.redirect(`${url}/account/login`);
  }

  if (session?.user.role !== "admin") {
    return NextResponse.json({ message: "Not authorized" }, { status: 401 });
  }

  try {
    // Obtener todas las reservaciones
    const reservations = await Reservation.find();

    // Agrupar las reservaciones por hotel
    const reservationsByHotel = reservations.reduce((acc, reservation) => {
      if (reservation.hotel in acc) {
        acc[reservation.hotel]++;
      } else {
        acc[reservation.hotel] = 1;
      }
      return acc;
    }, {});

    // Obtener los datos de cada hotel
    const hotelIds = Object.keys(reservationsByHotel);
    const hotels = await Hotel.find({ _id: { $in: hotelIds } });

    // Generar estadísticas y reporte
    const statsAndReport = hotels.map(hotel => {
      const hotelReservations = reservationsByHotel[hotel._id] || 0;
      return {
        hotelName: hotel.name,
        totalReservations: hotelReservations,
        // Agrega aquí cualquier otra estadística o dato que desees incluir en el reporte
      };
    });

    return new NextResponse(JSON.stringify(statsAndReport), {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify(err), {
      status: 500,
    });
  }
}
 */