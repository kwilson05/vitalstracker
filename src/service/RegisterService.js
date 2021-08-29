import defaultAxios from "../service/axios";

const register = async ({ email, firstName, lastName, password }) => {
  return await defaultAxios.post("/register", {
    data: {
      firstName: firstName,
      lastName: lastName,
      password: password,
      email: email,
    },
  }).data;
};

export default register;
