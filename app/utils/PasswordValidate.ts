import { hash, compare } from "bcrypt";

export async function encryptPassword(password: string) {
  try {
    return await hash(password, 10);
  } catch (err) {
    console.log(err);
    return err;
  }
}

export async function decryptPassword(password: string, hash: string) {
  try {
    return await compare(password, hash);
  } catch (err) {
    console.log(err);
    return false;
  }
}
