import dbConnect from "@/app/utils/DatabaseConnection";
import Rooms from "@/app/models/rooms";
import Hotel from "@/app/models/hotels";
import { NextRequest, NextResponse } from "next/server";

// Connect to the database
dbConnect();

export async function GET(){
  try {
    const rooms = await Rooms.find().populate("hotel");

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

