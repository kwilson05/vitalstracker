import defaultAxios from "../service/axios";

const signin = async ({ email, password }) => {
  return await defaultAxios
    .post("/signin", {
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

export default signin;
