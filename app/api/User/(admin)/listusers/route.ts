// Import the function for connecting to the database and the User model
import dbConnect from "@/app/utils/DatabaseConnection";
import User from "@/app/models/User";

// Import the necessary functions from Next.js for handling the request and response
import { NextResponse } from "next/server";

// Connect to the database
dbConnect();

// Handler function for the GET request
export async function GET() {
  try {
    // Retrieve all users from the database using the User model
    const users = await User.find();

    // If no users are found, return a 404 error response
    if (!users || users.length === 0) {
      return new NextResponse("No users found", {
        status: 404,
      });
    }

    // If users are found, return them as a JSON response with a 200 status code
    return new NextResponse(JSON.stringify(users), {
      status: 200,
    });
  } catch (err) {
    // If an error occurs, log it to the console and return a 500 error response
    console.log(err);

    return new NextResponse(JSON.stringify(err), {
      status: 500,
    });
  }
}
