import dbConnect from "@/app/utils/DatabaseConnection";
import User from "@/app/models/User";

// Import the necessary functions from Next.js for handling the request and response
import { NextResponse } from "next/server";

// Connect to the database
dbConnect();

