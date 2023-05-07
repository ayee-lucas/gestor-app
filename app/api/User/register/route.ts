// Import the necessary modules
import dbConnect from "@/app/utils/DatabaseConnection";
import User from "@/app/models/User";
import { NextRequest, NextResponse } from "next/server";
import { encryptPassword } from "@/app/utils/PasswordValidate";

// Connect to the database
dbConnect();

// Post (Create) -- Register
export async function POST(request: NextRequest) {
  try {
    // Parse the JSON data from the request body
    const json = await request.json();

    // Log the parsed JSON data
    console.log({ DataRequest: json });

    // Create a new User object with the parsed JSON data
    const data = new User(json);
    

    // Log the User object created
    console.log({ UserCreated: data });

    // Encrypt the user's password
    data.password = await encryptPassword(data.password);

    // Save the user to the database
    const user = await data.save();

    // Return the saved user object as a JSON response
    return new NextResponse(JSON.stringify(user), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    // Log any errors that occur
    console.log({ err });

    // Return an error response with a message and the error object
    const error = {
      message: "Error Saving User",
      error: err,
    };
    return new NextResponse(JSON.stringify(error), { status: 500 });
  }
}
