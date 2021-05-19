import { createRouter, createWebHashHistory } from "vue-router";
import Vitals from "@/views/Vitals.vue";
import VitalView from "@/views/VitalsView.vue";

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
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
