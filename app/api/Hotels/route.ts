import dbConnect from "@/app/utils/DatabaseConnection";
import Hotel from "@/app/models/hotels";
import { NextRequest, NextResponse } from "next/server";

// Connect to the database
dbConnect();

export async function POST(request: NextRequest) {
    try {
      // Parse the request body as JSON
      const json = await request.json();
      console.log({ DataRequest: json });
  
      // Check if the rating value is between 1 and 5
      if (json.rating < 1 || json.rating > 5) {
        // If the rating value is not between 1 and 5, return an error response
        return new NextResponse(
          JSON.stringify({ message: "Rating must be between 1 and 5" }),
          { status: 400 }
        );
      }
  
      // Check if a hotel with the same name already exists in the database
      const existingHotel = await Hotel.findOne({ name: json.name });
      if (existingHotel) {
        // If a hotel with the same name already exists, return an error response
        return new NextResponse(
          JSON.stringify({ message: "A hotel with this name already exists" }),
          { status: 400 }
        );
      }
  
      // Create a new hotel object with the parsed data
      const data = new Hotel({
        name: json.name,
        address: json.address,
        city: json.city,
        country: json.country,
        rating: json.rating,
        rooms: json.rooms,
      });
      console.log({ HotelCreated: data });
  
      // Save the hotel object to the database
      const hotel = await data.save();
  
      // Return a NextResponse object with the saved hotel data and a 200 status code
      return new NextResponse(
        JSON.stringify(hotel), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
    } catch (err) {
      console.log({ err });
  
      // If there is an error, return a NextResponse object with an error message and a 500 status code
      const error = {
        message: "Error Saving Hotel",
        error: err,
      };
      return new NextResponse(JSON.stringify(error), { status: 500 });
    }
  }
