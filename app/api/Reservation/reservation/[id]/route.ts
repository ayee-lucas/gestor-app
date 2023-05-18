import dbConnect from "@/app/utils/DatabaseConnection";
import Reservation from "@/app/models/reservation";
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

export async function GET(request: Request, params: params) {
  const id = params.params.id;
  const url = process.env.NEXTAUTH_URL as string;
  const session = await getServerSession(authOptions);
  
  if (session?.user.name === undefined) {
    return NextResponse.redirect(`${url}/account/login`);
  }
  
  if (session?.user.role !== "user") {
    return NextResponse.json({ message: "no authorized" }, { status: 401 });
  }
  
  try {
    const reservation = await Reservation.findById(id);
    if (!reservation) {
      return new NextResponse("Reservation not found", {
        status: 404,
      });
    }
    
    // Verificar si el usuario actual es el propietario de la reserva
    if (reservation.user.toString() !== session?.user.id) {
      return new NextResponse("You are not authorized to view this reservation", {
        status: 401,
      });
    }
    
    return new NextResponse(JSON.stringify(reservation), {
      status: 200,
    });

  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify(err), {
      status: 500,
    });
  }
}

export async function PUT(request: Request, params: params) {
  const id = params.params.id;
  const data = await request.json();
  const url = process.env.NEXTAUTH_URL as string;
  const session = await getServerSession(authOptions);

  if (session?.user.name === undefined) {
    return NextResponse.redirect(`${url}/account/login`);
  }

  if (session?.user.role !== "user") {
    return NextResponse.json({ message: "no authorized" }, { status: 401 });
  }

  try {
     const reservation = await Reservation.findById(id);
    if (!reservation) {
      return new NextResponse("Reservation not found", {
        status: 404,
      });
    }

    // Verificar si el usuario actual es el propietario de la reserva
    if (reservation.user.toString() !== session?.user.id) {
      return new NextResponse("You are not authorized to update this reservation", {
        status: 401,
      });
    }

    // Realizar validaciones en los datos antes de actualizar la reserva
    if (data.date && new Date(data.date) < new Date()) {
      return new NextResponse("Invalid date for reservation update", {
        status: 400,
      });
    }

    const updatedReservation = await Reservation.findByIdAndUpdate(id, data, {
      new: true,
    });

    return new NextResponse(JSON.stringify(updatedReservation), {
      status: 200,
    });

  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify(err), {
      status: 500,
    });
  }
}

export async function DELETE(request: Request, params: params) {
  const id = params.params.id;
  const url = process.env.NEXTAUTH_URL as string;
  const session = await getServerSession(authOptions);

  if (session?.user.name === undefined) {
    return NextResponse.redirect(`${url}/account/login`);
  }

  if (session?.user.role !== "user") {
    return NextResponse.json({ message: "no authorized" }, { status: 401 });
  }

  try {
    const reservation = await Reservation.findById(id);
    if (!reservation) {
      return new NextResponse("Reservation not found", {
        status: 404,
      });
    }

    // Verificar si el usuario actual es el propietario de la reserva
    if (reservation.user.toString() !== session?.user.id) {
      return NextResponse.json({ message: "no authorized to delete this reservation" }, { status: 401 });
    }

    // Obtener la habitación correspondiente a la reserva
    const roomId = reservation.room;
    const room = await Room.findById(roomId);

    if (!room) {
      return new NextResponse("Room not found", {
        status: 404,
      });
    }

    // Eliminar la reserva
    const deletedReservation = await Reservation.findByIdAndDelete(id);
    if (!deletedReservation) {
      return new NextResponse("Reservation not found", {
        status: 404,
      });
    }

    // Actualizar el estado de disponibilidad de la habitación a "disponible"
    room.available = true;
    await room.save();

    return new NextResponse(JSON.stringify(deletedReservation), {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify(err), {
      status: 500,
    });
  }
}
