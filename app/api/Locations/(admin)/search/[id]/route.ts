import dbConnect from "@/app/utils/DatabaseConnection";
import Locations from "@/app/models/locations";
import { NextRequest, NextResponse } from "next/server";

// Connect to the database
dbConnect();

interface params extends Request {
    params: {
      id: string;
    };
}

export async function GET(request: Request, params: params) {

    const id = params.params.id;
  
    try {
      const locations = await Locations.findById(id);
      if (!locations) {
        return new NextResponse("Service not found", {
          status: 404,
        });
      }
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

  export async function PUT(request: Request, params: params) {
    const id = params.params.id;
    const data = await request.json();
  
    try {
      const locations = await Locations.findByIdAndUpdate(id, data, { new: true });
      if (!locations) {
        return new NextResponse("Service not found", {
          status: 404,
        });
      }
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

  export async function DELETE(request: Request, params: params) {
    const id = params.params.id;
  
    try {
      const location = await Locations.findByIdAndDelete(id);
      if (!location) {
        return new NextResponse("Service not found", {
          status: 404,
        });
      }
      return new NextResponse(JSON.stringify(location), {
        status: 200,
      });
    } catch (err) {
      console.log(err);
      return new NextResponse(JSON.stringify(err), {
        status: 500,
      });
    }
  }