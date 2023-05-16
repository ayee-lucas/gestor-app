import dbConnect from "@/app/utils/DatabaseConnection";
import Event from "@/app/models/event";
import { NextRequest, NextResponse } from "next/server";

dbConnect();

export async function GET(){
    try {
        const events = await Event.find();
        if(!events || events.length === 0){
            return new NextResponse("No services found", {
                status: 404,
            });
        }
        return new NextResponse(JSON.stringify(events), {
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

        // Check if a service with the same name or description already exists
        const existingEvent = await Event.findOne({
            $or: [{ name: json.name }, { description: json.description }],
        });
        if (existingEvent) {
            throw new Error("A service with the same name or description already exists.");
        }

        // Create a new Service object with the parsed data
        const data = new Event(json);
        console.log({ EventCreated: data });

        // Save the Service object to the database
        const event = await data.save();

        // Return a NextResponse object with the saved service data and a 200 status code
        return new NextResponse(
            JSON.stringify(event), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (err) {
        console.log({ err });

        // If there is an error, return a NextResponse object with an error message and a 500 status code
        const error = {
            message: "Error Saving Services",
            error: err,
        };
    return new NextResponse(JSON.stringify(error), { status: 500 });
  }
}