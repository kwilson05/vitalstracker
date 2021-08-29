import { createRouter, createWebHashHistory } from "vue-router";
import Vitals from "@/views/Vitals.vue";
import VitalView from "@/views/VitalsView.vue";
import NewVital from "@/views/NewVital.vue";
import Register from "@/views/Register.vue";

const routes = [
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/vitals",
    name: "Vitals",
    component: Vitals,
  },
  {
    path: "/vitals/:vitalID",
    name: "VitalView",
    component: VitalView,
    props: true,
  },
  {
    path: "/vitals/new",
    name: "NewVital",
    component: NewVital,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
