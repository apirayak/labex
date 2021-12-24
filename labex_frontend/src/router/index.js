import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";
// import About from "@/views/About.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
//   {
//     path: "/about",
//     name: "About",
//     component: About,
//   },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;