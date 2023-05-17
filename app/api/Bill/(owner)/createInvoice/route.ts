/* import dbConnect from "@/app/utils/DatabaseConnection";
import Reservation from "@/app/models/reservation";
import Event from "@/app/models/event";
import Service from "@/app/models/services";

import Bill from "@/app/models/bill";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { NextRequest, NextResponse } from "next/server";

// Conectar a la base de datos
dbConnect();

export async function POST(request: NextRequest) {
  
  const url = process.env.NEXTAUTH_URL as string;
  const session = await getServerSession(authOptions);
  
  if (session?.user.name === undefined) {
    return NextResponse.redirect(`${url}/account/login`);
  }
  
  if (session?.user.role !== "owner") {
    return NextResponse.json({ message: "no authorized" }, { status: 401 });
  }
  
  try {
   
  } catch (err) {
    
  }
}
 */