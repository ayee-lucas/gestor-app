import connectdb from "@/app/utils/DatabaseConnection";
import { NextRequest, NextResponse } from "next/server";


connectdb();

export async function GET(requet: NextRequest) {
  try {
    const test = {
      message: 'Sucesss',
      Next:  'Next 13',
      App: 'Using App router'
    }

    return new NextResponse(JSON.stringify(test), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify(err), { status: 500 });
  }
}
