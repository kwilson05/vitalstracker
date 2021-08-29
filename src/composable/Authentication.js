import register from "../service/RegisterService";

export async function registerUser({ email, firstName, lastName, password }) {
  return await register({ email, firstName, lastName, password });
}
