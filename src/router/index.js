import { createRouter, createWebHashHistory } from "vue-router";
import Vitals from "@/views/Vitals.vue";
import VitalView from "@/views/VitalsView.vue";
import NewVital from "@/views/NewVital.vue";

const routes = [
  {
    path: "/",
    name: "Vitals",
    component: Vitals,
  },
  {
    path: "/:vitalID",
    name: "VitalView",
    component: VitalView,
    props: true,
  },
  {
    path: "/new",
    name: "NewVital",
    component: NewVital,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
