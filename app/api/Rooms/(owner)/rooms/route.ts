import dbConnect from "@/app/utils/DatabaseConnection";
import Room from "@/app/models/rooms";
import Hotel from "@/app/models/hotels";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { NextRequest, NextResponse } from "next/server";

// Conectar a la base de datos
dbConnect();

export async function GET(request: NextRequest) {
  const session = await getServerSession(authOptions);

  try {
    if (!session?.user || session.user.role !== "admin") {
      return new NextResponse("Unauthorized", {
        status: 401,
      });
    }

    // Buscar el hotel asociado al usuario logueado
    const hotel = await Hotel.findOne({ admin: session.user.id });

    if (!hotel) {
      return new NextResponse("Hotel not found", {
        status: 404,
      });
    }

    // Consultar las habitaciones habilitadas en el hotel encontrado
    const rooms = await Room.find({ hotel: hotel._id, available: true });

    if (rooms.length === 0) {
      return new NextResponse("No available rooms found", {
        status: 404,
      });
    }

    return new NextResponse(JSON.stringify(rooms), {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify(err), {
      status: 500,
    });
  }
}
