import dbConnect from "@/app/utils/DatabaseConnection";
import Locations from "@/app/models/locations";
import { NextRequest, NextResponse } from "next/server";

// Connect to the database
dbConnect();

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
