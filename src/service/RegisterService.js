import defaultAxios from "../service/axios";

const register = async ({ email, firstName, lastName, password }) => {
  return await defaultAxios
    .post("/register", {
      data: {
        firstName: firstName,
        lastName: lastName,
        password: password,
        email: email,
      },
    })
    .catch((err) => {
      debugger;
      const errorMessage = err.response.data.error;
      throw new Error(errorMessage);
    });
};

export default register;
