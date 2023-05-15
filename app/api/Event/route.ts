import dbConnect from "@/app/utils/DatabaseConnection";
import Event from "@/app/models/event";
import { NextRequest, NextResponse } from "next/server";

dbConnect();


export async function GET() {
    try{
        const event = await Event.find();
        if(!event || event.length === 0){
            return new NextResponse("No services found", {
                status: 404,
            }
            )
        }
    }catch (err){
        console.log(err);
        return new NextResponse(JSON.stringify({ message: " Error"  }),{
            status: 500,
        });
    }
}

export async function POST(request: NextRequest) {
    try{
        const json = await request.json();
        console.log({ DataRequest: json});

        const data = new Event(json);
        console.log({ EventCreated: data});

        const event = await data.save();

        return new NextResponse(JSON.stringify(event),{
            status: 200,
            headers: { "Content-Type": "application/json"},
        });

    } catch (err){
        console.log({ err});
        const error = {
            message: "Error Saving Event",
            error: err,
        };
        return new NextResponse(JSON.stringify(error), { status: 500});
    }
}