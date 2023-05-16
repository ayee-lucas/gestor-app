import dbConnect from "@/app/utils/DatabaseConnection";
import Room from "@/app/models/rooms";
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
      const room = await Room.findById(id);
      if (!room) {
        return new NextResponse("Service not found", {
          status: 404,
        });
      }
      return new NextResponse(JSON.stringify(room), {
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
      const room = await Room.findByIdAndUpdate(id, data, { new: true });
      if (!room) {
        return new NextResponse("Service not found", {
          status: 404,
        });
      }
      return new NextResponse(JSON.stringify(room), {
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
      const room = await Room.findByIdAndDelete(id);
      if (!room) {
        return new NextResponse("Service not found", {
          status: 404,
        });
      }
      return new NextResponse(JSON.stringify(room), {
        status: 200,
      });
    } catch (err) {
      console.log(err);
      return new NextResponse(JSON.stringify(err), {
        status: 500,
      });
    }
  }