import dbConnect from "@/app/utils/DatabaseConnection";
import { NextResponse } from "next/server";
import User from "@/app/models/User";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

dbConnect();

// Id interface for params

interface params extends Request {
  params: {
    id: string;
  };
}

/** params dynamic route example http://localhost:3000/api/User/search/6456d4b1c8866a13dedc5147 */
export async function GET(request: Request, params: params) {
  try {
    //User Logged

    const session = await getServerSession(authOptions);

    console.log({ userLogged: session?.user });

    //

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
