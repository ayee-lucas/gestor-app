import { NextRequest, NextResponse } from "next/server";

export interface LogginRequest extends NextRequest {
  user: {
    uuid: string;
    name: string;
    surname: string;
    email: string;
    role: string;
    iat: string;
    exp: number;
    password: number;
  };
}

export async function GET(request: NextRequest) {
  try {
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({
        status: "500",
        message: "Error",
      })
    );
  }
}
