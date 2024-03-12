import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue"
import NotFound from "@/views/Error404.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/Error",
      name: "Error",
      component: NotFound,
    }
  ],
});

export default router;
