import dbConnect from "@/app/utils/DatabaseConnection";
import Rooms from "@/app/models/rooms";
import { NextRequest, NextResponse } from "next/server";

// Connect to the database
dbConnect();

export async function GET(){
    try {
        const rooms = await Rooms.find();
        if(!rooms || rooms.length === 0){
            return new NextResponse("No rooms found", {
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
        })
    }
}

export async function POST(request: NextRequest) {
    try {
        // Parse the request body as JSON
        const json = await request.json();
        console.log({ DataRequest: json });

        // Create a new Service object with the parsed data
        const data = new Rooms(json);
        console.log({ Room: data });

        // Save the Service object to the database
        const rooms = await data.save();




        // Return a NextResponse object with the saved service data and a 200 status code
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
