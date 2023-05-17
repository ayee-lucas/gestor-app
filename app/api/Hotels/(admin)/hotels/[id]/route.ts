import dbConnect from "@/app/utils/DatabaseConnection";
import Hotel from "@/app/models/hotels";
import Room from "@/app/models/rooms";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { NextRequest, NextResponse } from "next/server";

// Conectar a la base de datos
dbConnect();
interface params extends Request {
    params: {
      id: string;
    };
  }

  export async function PUT(request: NextRequest, params: params) {
      const id = params.params.id;
    try {
      const session = await getServerSession(authOptions);
  
      // Verificar si el usuario está autenticado y es un administrador
      if (!session?.user || session.user.role !== "admin") {
        return new NextResponse("Unauthorized", {
          status: 401,
        });
      }
  
      const updatedData = await request.json();
  
      // Buscar el hotel por su ID
      const hotel = await Hotel.findById(id);
      if (!hotel) {
        return new NextResponse("Hotel not found", {
          status: 404,
        });
      }
  
      // Actualizar los datos del hotel
      hotel.set(updatedData);
      const updatedHotel = await hotel.save();
  
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

export async function DELETE(request: NextRequest,params:params) {
    const id = params.params.id;
  try {
    const session = await getServerSession(authOptions);

    // Verificar si el usuario está autenticado y es un administrador
    if (!session?.user || session.user.role !== "admin") {
      return new NextResponse("Unauthorized", {
        status: 401,
      });
    }


    // Eliminar el hotel y todos los cuartos asociados
    const deletedHotel = await Hotel.findByIdAndDelete(id);
    if (!deletedHotel) {
      return new NextResponse("Hotel not found", {
        status: 404,
      });
    }

    // Eliminar los cuartos asociados en la colección de "rooms"
    await Room.deleteMany({ _id: { $in: deletedHotel.rooms } });

    return new NextResponse(JSON.stringify(deletedHotel), {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify(err), {
      status: 500,
    });
  }
}
