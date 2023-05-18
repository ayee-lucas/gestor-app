// Import the function for connecting to the database and the User model
import dbConnect from "@/app/utils/DatabaseConnection";
import User from "@/app/models/User";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
// Import the necessary functions from Next.js for handling the request and response
import { NextResponse } from "next/server";

// Connect to the database
dbConnect();

interface params extends Request {
  params: {
    id: string;
  };
}

export async function PUT(request: Request, params: params) {
    const url = process.env.NEXTAUTH_URL as string;
    const id = params.params.id;
    const data = await request.json();
    const session = await getServerSession(authOptions);
    console.log({ userLogged: session });

    if (session?.user.name === undefined) {
    return NextResponse.redirect(`${url}/account/login`);
  }

  if (session?.user.role !== "admin") {
    return NextResponse.json({ message: "no authorized" }, { status: 401 });
  }

    try {
      const user = await User.findByIdAndUpdate(id, data, { new: true });
      if (!user) {
        return new NextResponse("Service not found", {
          status: 404,
        });
      }
      return new NextResponse(JSON.stringify(user), {
        status: 200,
      });
    } catch (err) {
      console.log(err);
      return new NextResponse(JSON.stringify(err), {
        status: 500,
      });
    }
  }