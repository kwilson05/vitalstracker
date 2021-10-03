import {
  isUserAuthenticated,
  signin,
  register,
} from "../service/AuthenticationService";

export async function registerUser({ email, firstName, lastName, password }) {
  return await register({ email, firstName, lastName, password }).catch(
    (err) => {
      throw new Error(err.message);
    }
  );
}

export async function signInUser({ email, password }) {
  return await signin({ email, password }).catch((err) => {
    throw new Error(err.message);
  });
}

export async function checkIfUserAuthenticated() {
  return await isUserAuthenticated();
}
