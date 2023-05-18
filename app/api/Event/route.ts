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
