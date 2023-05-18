/* import dbConnect from "@/app/utils/DatabaseConnection";
import Reservation from "@/app/models/reservation";
import Hotel from "@/app/models/hotels";
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

  try {
    // Buscar el hotel asociado al usuario logueado
    const hotel = await Hotel.findOne({ admin: session?.user.id });

    if (!hotel) {
      return new NextResponse("Hotel not found", {
        status: 404,
      });
    }

    // Consultar todas las reservaciones que pertenezcan al hotel encontrado
    const reservations = await Reservation.find({ room: hotel._id });

    if (reservations.length === 0) {
      return new NextResponse("No reservations found", {
        status: 404,
      });
    }

    return new NextResponse(JSON.stringify(reservations), {
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