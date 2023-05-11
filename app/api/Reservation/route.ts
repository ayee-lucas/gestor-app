/* import connectdb from "@/app/utils/DatabaseConnection";
import { NextRequest, NextResponse } from "next/server";
import Reservation from "@/app/models/reservation";

connectdb();
interface body extends NextRequest {
  body: reque.body
}
export async function POST(request: Request) {
  try {
    const newReservation = new Reservation(body)
    const saveReservation = await newReservation.save()
    return new NextResponse(JSON.stringify(saveReservation), { status: 201 });  
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify(err), { status: 500 });
  }
}
 */