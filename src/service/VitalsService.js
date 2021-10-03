import defaultAxios from "../service/axios";

export async function getAllVitals() {
  return (await defaultAxios.get("/vital")).data.vitals;
}
