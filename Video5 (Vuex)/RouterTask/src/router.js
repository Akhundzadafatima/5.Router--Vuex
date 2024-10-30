import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./view/HomeView.vue";
import AboutView from "./view/AboutView.vue";
import IdProduct from "./view/[idProduct].vue";
const salam=[
   {
       path:"/",
       component:HomeView,
   },
   {
       path:"/aboutt",
       component:AboutView
   },
   {
    path:"/detail/:id",
    component:IdProduct
},
]


const route=createRouter({

    routes:salam,
    history: createWebHistory(),

})
export default route