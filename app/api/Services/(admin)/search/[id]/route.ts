import dbConnect from "@/app/utils/DatabaseConnection";
import Service from "@/app/models/services";
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
    const service = await Service.findById(id);
    if (!service) {
      return new NextResponse("Service not found", {
        status: 404,
      });
    }
    return new NextResponse(JSON.stringify(service), {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify(err), {
      status: 500,
    });
  }
}