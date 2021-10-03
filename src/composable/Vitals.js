import { getAllVitals } from "../service/VitalsService";

export async function getVitals() {
  return await getAllVitals();
}
