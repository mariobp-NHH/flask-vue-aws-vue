import { createRouter, createWebHistory } from "vue-router";
import SharkView from "../components/SharkView.vue";
import HomeView from "../components/HomeView.vue";
import GamesView from "../components/GamesView.vue";

const routes = [
  {
    path: "/shark",
    name: "shark",
    component: SharkView,
  },
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/games",
    name: "games",
    component: GamesView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
