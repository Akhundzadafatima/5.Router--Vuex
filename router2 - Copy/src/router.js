import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./view/HomePage.vue";
import NewBookMark from "./view/NewBookMark.vue";
const routes = [
  {
    name: "Home",
    path: "/",
    component: HomePage,
  },
  {
    name: "NewBookMark",
    path: "/NewBookMark",
    component: NewBookMark,
  },
];

const router=createRouter({
    routes,
    history:createWebHistory()
})
export default router
