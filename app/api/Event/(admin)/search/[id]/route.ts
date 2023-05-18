import dbConnect from "@/app/utils/DatabaseConnection";
import Event from "@/app/models/event";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";


// Connect to the database
dbConnect();

interface params extends Request {
  params: {
    id: string;
  };
}

export async function GET(request: Request, params: params) {

  const id = params.params.id;

  try {
    const event = await Event.findById(id);
    if (!event) {
      return new NextResponse("Service not found", {
        status: 404,
      });
    }
    return new NextResponse(JSON.stringify(event), {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify(err), {
      status: 500,
    });
  }
}

export async function PUT(request: Request, params: params) {
  const id = params.params.id;
  const data = await request.json();
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
    const event = await Event.findByIdAndUpdate(id, data, { new: true });
    if (!event) {
      return new NextResponse("Service not found", {
        status: 404,
      });
    }
    return new NextResponse(JSON.stringify(event), {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify(err), {
      status: 500,
    });
  }
}

export async function DELETE(request: Request, params: params) {
  const id = params.params.id;
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
    const event = await Event.findByIdAndDelete(id);
    if (!event) {
      return new NextResponse("Service not found", {
        status: 404,
      });
    }
    return new NextResponse(JSON.stringify(event), {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify(err), {
      status: 500,
    });
  }
}