import dbConnect from "@/app/utils/DatabaseConnection";
import Hotel from "@/app/models/hotels";
import Room from "@/app/models/rooms";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { NextRequest, NextResponse } from "next/server";

// Conectar a la base de datos
dbConnect();

export async function GET(request: NextRequest) {
  try {
    // Obtener todos los hoteles
    const hotels = await Hotel.find();

    return new NextResponse(JSON.stringify(hotels), {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify(err), {
      status: 500,
    });
  }
}
export async function PUT(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    // Verificar si el usuario está autenticado y es un administrador
    if (!session?.user || session.user.role !== "admin") {
      return new NextResponse("Unauthorized", {
        status: 401,
      });
    }

    const { hotel, room } = await request.json();

    // Buscar el hotel por su ID y verificar si existe
    const existingHotel = await Hotel.findById(hotel);
    if (!existingHotel) {
      return new NextResponse("Hotel not found", {
        status: 404,
      });
    }

    // Buscar la habitación por su ID y verificar si existe
    const existingRoom = await Room.findById(room);
    if (!existingRoom) {
      return new NextResponse("Room not found", {
        status: 404,
      });
    }

    // Verificar si el ID del cuarto es igual al ID del hotel
    if (existingRoom.hotel.toString() !== existingHotel._id.toString()) {
      return new NextResponse("Invalid room for the hotel", {
        status: 400,
      });
    }

    // Verificar si la habitación ya está agregada al hotel
    if (existingHotel.rooms.includes(existingRoom._id)) {
      return new NextResponse("Room already added to the hotel", {
        status: 400,
      });
    }

    // Agregar la habitación al array de habitaciones del hotel
    existingHotel.rooms.push(existingRoom._id);

    // Guardar el hotel actualizado en la base de datos
    const updatedHotel = await existingHotel.save();

    return new NextResponse(JSON.stringify(updatedHotel), {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify(err), {
      status: 500,
    });
  }
}

export async function GET(){
  try {
    const hotels = await Hotel.find().populate("rooms");

    return new NextResponse(JSON.stringify(hotels), {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify(err), {
      status: 500,
    });
  }


}
