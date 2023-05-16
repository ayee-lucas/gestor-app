"use server";
import dbConnect from "@/app/utils/DatabaseConnection";
import { NextResponse } from "next/server";
import User from "@/app/models/User";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { notFound, redirect } from "next/navigation";
import  AuthChecker from "@/app/utils/AuthChecker";

dbConnect();



// Id interface for params

interface params extends Request {
  params: {
    id: string;
  };
}


/** params dynamic route example http://localhost:3000/api/User/search/6456d4b1c8866a13dedc5147 */
export async function GET(request: Request, params: params) {


  const url = process.env.NEXTAUTH_URL as string;

  //User Logged

  const session = await getServerSession(authOptions);

  console.log({ userLogged: session?.user });

  // Check role and user auth

  if (session?.user.name === undefined) {
    return NextResponse.redirect(`${url}/account/login`);
  }

  if (session?.user.role === "user") {
    return NextResponse.json({ message: "no authorized" }, { status: 401 });
  }

  try {

    /** FindbyId */

    // id = params.params.id

    console.log(params.params.id);

    const id = params.params.id;

    const userFinded = await User.findById(id);
    console.log(userFinded);

    return NextResponse.json(
      { message: "ok", id: id, userFinded: userFinded },
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "error", error: err }, { status: 500 });
  }
}
