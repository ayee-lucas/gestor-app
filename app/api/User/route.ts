import { NextResponse } from "next/server";

export async function GET() {
  try {
    return new NextResponse(JSON.stringify({ message: "ok" }), { status: 200 });
  } catch (err) {
    return new NextResponse(JSON.stringify({ message: "error" }), {
      status: 500,
    });
  }
}
