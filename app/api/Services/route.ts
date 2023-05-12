import dbConnect from "@/app/utils/DatabaseConnection";
import Service from "@/app/models/services";
import { NextRequest, NextResponse } from "next/server";

// Connect to the database
dbConnect();

export async function GET(){
    try {
        const services = await Service.find();
        if(!services || services.length === 0){
            return new NextResponse("No services found", {
                status: 404,
            });
        }
        return new NextResponse(JSON.stringify(services), {
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
        const data = new Service(json);
        console.log({ ServiceCreated: data });

        // Save the Service object to the database
        const service = await data.save();

        // Return a NextResponse object with the saved service data and a 200 status code
        return new NextResponse(
            JSON.stringify(service), {
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
