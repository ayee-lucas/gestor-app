import dbConnect from "@/app/utils/DatabaseConnection";
import User from "@/app/models/User";
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

    const user = await User.findOne({ username: crendentials.username });

    if (!user) {
      return new NextResponse(
        JSON.stringify({
          status: "404",
          message: "User not found",
        })
      );
    }

    const passwordIsValid = decryptPassword(
      user.password,
      crendentials.password
    );

    if (!passwordIsValid) {
      return new NextResponse(
        JSON.stringify({
          status: "401",
          message: "Password is invalid",
        })
      );
    }
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
