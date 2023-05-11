import dbConnect from "@/app/utils/DatabaseConnection";
import User from "@/app/models/User";
import { JWT } from "@/app/utils/jwt";
import { NextRequest, NextResponse } from "next/server";
import { decryptPassword } from "@/app/utils/PasswordValidate";

dbConnect();

interface RequestBody {
  username: string;
  password: string;
}

// Post (Create) -- Login
export async function POST(request: Request) {
  try {
    const body: RequestBody = await request.json();

    const crendentials = {
      username: body.username,
      password: body.password,
    };

    const userFinded = await User.findOne({ username: crendentials.username });

    if (!userFinded) {
      return new NextResponse(JSON.stringify({ message: "User not Found" }), {
        status: 404,
      });
    }

    const passwordIsValid = await decryptPassword(
      crendentials.password,
      userFinded.password
    );

    if (!passwordIsValid) {
      return new NextResponse(JSON.stringify({ message: "Invalid password" }), {
        status: 401,
      });
    }

    const token = await JWT(userFinded);

    const userLogged = {
      id: userFinded._id,
      name: userFinded.name,
      surname: userFinded.surname,
      username: userFinded.username,
      role: userFinded.role,
    };

    console.log({ userLogged: userLogged, token: token });

    const result = {
      ...userLogged,
      token,
    };

    return new NextResponse(JSON.stringify(result));
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify({ message: "Error" }), {
      status: 500,
    });
  }
}
