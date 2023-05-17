/* import dbConnect from "@/app/utils/DatabaseConnection";
import Reservation from "@/app/models/reservation";
import Event from "@/app/models/event";
import Service from "@/app/models/services";
import Bill from "@/app/models/bill";
import Consumable from "@/app/models/consumable";
import Hotel from "@/app/models/hotels";
import Room from "@/app/models/rooms";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { NextRequest, NextResponse } from "next/server";

// Conectar a la base de datos
dbConnect();

export async function POST(request: NextRequest) {
  const url = process.env.NEXTAUTH_URL as string;
  const session = await getServerSession(authOptions);
  
  if (session?.user.name === undefined) {
    return NextResponse.redirect(`${url}/account/login`);
  }
  
  if (session?.user.role !== "owner") {
    return NextResponse.json({ message: "not authorized" }, { status: 401 });
  }
  
  try {
    const { issueDate, nit, eventType, hotelId, reservationId, selectedServicesData, selectedConsumablesData } = await request.json();
  
    // Obtener el hotel
    const hotel = await Hotel.findById(hotelId);
    if (!hotel) {
      return new NextResponse("Hotel not found", { status: 404 });
    }
  
    // Obtener la reservacion
    const reservation = await Reservation.findById(reservationId).populate('user');
    if (!reservation) {
      return new NextResponse("Reservation not found", { status: 404 });
    }
  
    // Calcular el subtotal de los servicios
    let servicesSubtotal = 0;
    for (const service of selectedServicesData) {
      const serviceObj = await Service.findById(service.service);
      if (!serviceObj) {
        return new NextResponse(`Service not found: ${service.service}`, { status: 404 });
      }
      servicesSubtotal += serviceObj.price * service.quantity;
    }
  
    // Calcular el subtotal de los consumibles
    let consumablesSubtotal = 0;
    for (const consumable of selectedConsumablesData) {
      const consumableObj = await Consumable.findById(consumable.consumable);
      if (!consumableObj) {
        return new NextResponse(`Consumable not found: ${consumable.consumable}`, { status: 404 });
      }
      consumablesSubtotal += consumableObj.price * consumable.quantity;
    }
  
    const room = await Room.findById(reservation.room);
    if (!room) {
      return new NextResponse("Room not found", { status: 404 });
    }
    
    // Obtener el precio de la habitación
    const roomPrice = room.price;
    // Calcular el total
    const total = roomPrice + servicesSubtotal + consumablesSubtotal;
  
    // Crear la factura
    const bill = new Bill({
      issueDate,
      hotel: hotel._id,
      user: reservation.user._id,
      nit,
      reservation: reservation._id,
      eventType: reservation.event,
      items: selectedConsumablesData.map((consumable: { consumable: String, quantity: number }) => ({
        product: consumable.consumable,
        quantity: consumable.quantity,
      })),
      services: selectedServicesData.map((service: { service: String }) => ({
        service: service.service,
      })),
      itemsSubtotal: consumablesSubtotal,
      servicesSubtotal,
      total,
    });
  
    // Guardar la factura en la base de datos
    const createdBill = await bill.save();
  
    // Actualizar el estado de la habitación a "true"
    room.status = true;
    await room.save();
  
    return new NextResponse(JSON.stringify(createdBill), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse("Failed to generate bill", { status: 500 });
  }
}
 */