import dbConnect from "@/app/utils/DatabaseConnection";
import User from "@/app/models/User";
import JWT from "@/app/utils/jwt";
import { NextRequest, NextResponse } from "next/server";
import { decryptPassword } from "@/app/utils/PasswordValidate";

dbConnect();

// Post (Create) -- Login
export async function POST(request: NextRequest) {
  try {
    const json = await request.json();

    console.log({ DataRequest: json });

    const crendentials = {
      username: json.username,
      password: json.password,
    };

    const userFinded = await User.findOne({ username: crendentials.username });

    if (!userFinded) {
      return new NextResponse(
        JSON.stringify({
          status: "404",
          message: "User not found",
        })
      );
    }

    const passwordIsValid = await decryptPassword(
      crendentials.password,
      userFinded.password,
    );

    if (!passwordIsValid) {
      return new NextResponse(
        JSON.stringify({
          status: "401",
          message: "Wrong password",
        })
      );
    }

    const token = await JWT(userFinded);

    const userLogged = {
      id: userFinded._id,
      username: userFinded.username,
      role: userFinded.role,
    }

    console.log({userLogged: userLogged, token: token,})

    return new NextResponse(
      JSON.stringify({
        message: "Success",
        token: token,
        status: "200",
      })
    );
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
