 import { createRouter, createWebHistory } from "vue-router";
 import HomeView from "./views/HomeView.vue"
 import AboutView from "./views/AboutView.vue"
 import ProductDetail from "./views/productDetail/[idProduct].vue"
 const routes=[
    {
        path:"/",
        component:HomeView,
        name:"Home"
    },
    {
        path:"/hakkinda",
        component:AboutView
    },
    {
        path:'/ProductDetail/:id',
        component:ProductDetail,
        name:"ProductDetal"
    }
 ]
 
 
 const router=createRouter({
routes,
// mode:"hash | history",
history: createWebHistory()
 })
 export default router