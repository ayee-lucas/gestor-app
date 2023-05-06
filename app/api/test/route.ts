import dbConnect from "@/app/utils/DatabaseConnection";
import { NextRequest, NextResponse } from "next/server";



export async function GET(requet: Request) {
  try {
    await dbConnect();

    const hola = "hola";

    return new Response(JSON.stringify(hola), { status: 200 });
  } catch (err) {
    console.log(err);
    return new Response(JSON.stringify(err), { status: 500 });
  }
}
