import defaultAxios from "../service/axios";

export const register = async ({ email, firstName, lastName, password }) => {
  return await defaultAxios
    .post("/user/auth/register ", {
      data: {
        firstName: firstName,
        lastName: lastName,
        password: password,
        email: email,
      },
    })
    .catch((err) => {
      const errorMessage = err.response.data.error;
      throw new Error(errorMessage);
    });
};

export const signin = async ({ email, password }) => {
  return await defaultAxios
    .post("/user/auth/signin", {
      data: {
        password: password,
        email: email,
      },
    })
    .catch((err) => {
      const errorMessage = err.response.data.error;
      throw new Error(errorMessage);
    });
};

export const isUserAuthenticated = async () => {
  const isAuthenticated = (await defaultAxios.post("/user/auth/isSignedIn"))
    .data.isUserSignedIn;

  return isAuthenticated;
};
