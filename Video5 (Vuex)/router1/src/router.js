import { createRouter, createWebHistory } from "vue-router";
import AboutPage from "./view/AboutPage.vue";
import HomePage from "./view/HomePage.vue";
import DetailPage from "./view/DetailPage.vue";
const routes=[
  {
    name:"Homee",
    path: "/",
    component: HomePage,
  },
  {
    name:"Aboutt",
    path: "/about",
    component: AboutPage,
  },
  {
    name:"Detaill",
    path: "/detail/:id",
    component: DetailPage,
  },
];

const route=createRouter({
    routes,
    history:createWebHistory()
})

export default route