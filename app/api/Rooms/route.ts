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

export async function POST(request: NextRequest) {
  try {
    // Parse the request body as JSON
    const json = await request.json();
    console.log({ DataRequest: json });

    // Check if the rating value is between 1 and 5
    if (json.rating < 1 || json.rating > 5) {
      // If the rating value is not between 1 and 5, return an error response
      return new NextResponse(
        JSON.stringify({ message: "Rating must be between 1 and 5" }),
        { status: 400 }
      );
    }

    // Check if a room with the same number and hotel already exists in the database
    const existingRoom = await Rooms.findOne({ number: json.number, hotel: json.hotel });
    if (existingRoom) {
      // If a room with the same number and hotel already exists, return an error response
      return new NextResponse(
        JSON.stringify({ message: "A room with this number already exists for this hotel" }),
        { status: 400 }
      );
    }

    // Create a new room object with the parsed data
    const data = new Rooms(json);
    console.log({ RoomCreated: data });

    // Save the Room object to the database
    const rooms = await data.save();

    // Populate the hotel field with document(s) from the Hotel collection
    //await rooms.populate('hotel').execPopulate();

    // Return a NextResponse object with the saved room data and a 200 status code
    return new NextResponse(
      JSON.stringify(rooms), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.log({ err });

    // If there is an error, return a NextResponse object with an error message and a 500 status code
    const error = {
      message: "Error Saving Rooms",
      error: err,
    };
    return new NextResponse(JSON.stringify(error), { status: 500 });
  }
}

