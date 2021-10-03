import { createRouter, createWebHashHistory } from "vue-router";
import Vitals from "@/views/Vitals.vue";
import VitalView from "@/views/VitalsView.vue";
import NewVital from "@/views/NewVital.vue";
import Register from "@/views/Register.vue";
import SignIn from "@/views/SignIn.vue";

import { checkIfUserAuthenticated } from "../composable/Authentication";

const routes = [
  {
    path: "/",
    redirect: { name: "SignIn" },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/signin",
    name: "SignIn",
    component: SignIn,
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

router.beforeEach(async (to, from, next) => {
  const isAuthenticated = await checkIfUserAuthenticated();
  if (to.name !== "SignIn" && !isAuthenticated) {
    next({ name: "SignIn" });
  } else {
    next();
  }
});

export default router;
