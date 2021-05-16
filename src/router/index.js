import {
  createRouter,
  createWebHashHistory
}
  from "vue-router";
import Vitals from "@/views/Vitals.vue"

const routes = [{
  path: '/',
  name: 'Vitals',
  component: Vitals
}

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
