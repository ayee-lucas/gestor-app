import dbConnect from "@/app/utils/DatabaseConnection";
import Locations from "@/app/models/locations";
import { NextRequest, NextResponse } from "next/server";

// Connect to the database
dbConnect();

export async function POST(request: NextRequest) {
    try {
      // Parse the request body as JSON
      const json = await request.json();
      console.log({ DataRequest: json });
  
      // Create a new location object with the parsed data
      const data = new Locations(json);
      console.log({ RoomCreated: data });
  
      // Save the Location object to the database
      const locations = await data.save();
  
      // Return a NextResponse object with the saved room data and a 200 status code
      return new NextResponse(
        JSON.stringify(locations), {
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

  export async function GET(){
    try {
      const locations = await Locations.find();
  
      return new NextResponse(JSON.stringify(locations), {
        status: 200,
      });
    } catch (err) {
      console.log(err);
      return new NextResponse(JSON.stringify(err), {
        status: 500,
      });
    }
  }
