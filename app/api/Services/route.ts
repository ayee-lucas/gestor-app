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

