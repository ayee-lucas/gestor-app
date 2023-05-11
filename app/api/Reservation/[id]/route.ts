import connectdb from "@/app/utils/DatabaseConnection";
import { NextRequest, NextResponse } from "next/server";
import Reservation from "@/app/models/reservation";

connectdb();
interface query extends NextRequest {
  query: {id:string}
}

export async function GET(request: query) {
  const { query: { id } } = request

  try {
    const reservation = await Reservation.findById(id)
    if (!reservation)  return new NextResponse(JSON.stringify(reservation), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify(err), { status: 500 });
  }
}
