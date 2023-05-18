import dbConnect from "@/app/utils/DatabaseConnection";
import Service from "@/app/models/services";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

dbConnect();

export async function POST(request: NextRequest) {
    const url = process.env.NEXTAUTH_URL as string;
    const session = await getServerSession(authOptions);
    console.log({ userLogged: session });
  
    if (session?.user.name === undefined) {
      return NextResponse.redirect(`${url}/account/login`);
    }
  
    if (session?.user.role !== "admin") {
      return NextResponse.json({ message: "no authorized" }, { status: 401 });
    }
    try {
      // Parse the request body as JSON
      const json = await request.json();
      console.log({ DataRequest: json });
  
      // Check if a service with the same name or description already exists
      const existingService = await Service.findOne({
        $or: [{ name: json.name }, { description: json.description }],
      });
      if (existingService) {
        throw new Error("A service with the same name or description already exists.");
      }
  
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