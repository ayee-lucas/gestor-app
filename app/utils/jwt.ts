import jwt, { JwtPayload } from "jsonwebtoken";

export interface IUserToken {
    id: string;
    name: string;
    username: string;
    email: string;
    role: string;
    iat: number;
    exp: number;
}

export async function JWT(user: IUserToken) {
  try {
    const payload = {
      uui: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      role: user.role,
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30, //30 dias
    };

    return jwt.sign(payload, `${process.env.NEXTAUTH_SECRET}`);

  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function verifyJWT(token: string) {
  try {
    const decoded = jwt.verify(token, `${process.env.NEXTAUTH_SECRET}`);
    return decoded as JwtPayload;
  } catch (error) {
    console.log(error);
    return error;
  }
} 