import { createRouter, createWebHistory } from "vue-router";
import SharkView from "../components/SharkView.vue";

const routes = [
  {
    path: "/shark",
    name: "shark",
    component: SharkView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
