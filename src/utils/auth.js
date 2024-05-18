import { compare, hash } from "bcryptjs";

export async function hashingPassword(password) {
  const result = await hash(password, 12);
  return result;
}

export async function verifyPassword(pass, hash) {
  const result = await compare(pass, hash);
  return result;
}
