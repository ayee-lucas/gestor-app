import dbConnect from "@/app/utils/DatabaseConnection";
import Event from "@/app/models/event";
import { JWT } from "@/app/utils/jwt";
import { NextRequest, NextResponse } from "next/server";

dbConnect();


export async function POST(request: Request) {
    try{
        
    }catch (err){
        console.log(err);
        return new NextResponse(JSON.stringify({ message: " Error"  }),{
            status: 500,
        });
    }
}