import dbConnect from "@/app/utils/DatabaseConnection";
import Reservation from "@/app/models/reservation";
import Room from "@/app/models/rooms";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { NextRequest, NextResponse } from "next/server";

// Conectar a la base de datos
dbConnect();

export async function GET(request: NextRequest) {
  try {
    const reservations = await Reservation.find();
    if (!reservations || reservations.length === 0) {
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

export async function POST(request: NextRequest) {
  
  const url = process.env.NEXTAUTH_URL as string;
  const session = await getServerSession(authOptions);
  
  if (session?.user.name === undefined) {
    return NextResponse.redirect(`${url}/account/login`);
  }
  
  if (session?.user.role !== "admin") {
    return NextResponse.json({ message: "no authorized" }, { status: 401 });
  }
  
  try {
    const json = await request.json();
    json.user = session?.user.id;

    const roomId = json.room;
    const room = await Room.findById(roomId);

    if (!room || !room.available) {
      // La habitación no está disponible
      return new NextResponse("The room is not available for reservation", {
        status: 400,
      });
    }

    const reservationDate = new Date(json.createdAt);

    if (reservationDate < new Date()) {
      // La fecha de reserva es anterior al día presente
      return new NextResponse("Invalid reservation date", {
        status: 400,
      });
    }

    const reservation = new Reservation(json);
    const savedReservation = await reservation.save();

    // Actualizar el estado de disponibilidad de la habitación correspondiente
    room.available = false;
    await room.save();

    return new NextResponse(JSON.stringify(savedReservation), {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify(err), {
      status: 500,
    });
  }
}
