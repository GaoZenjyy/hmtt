import Vue from 'vue'
import VueRouter from 'vue-router'
// import Login from '../views/Login.vue'
import Tabbar from "../views/Tabbar"
import Index from "../views/index/Index"
Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: Tabbar,
    children: [
      {
        path: "/",
        component: Index
      },
      {
        path: "/wenda",
        component: () => import("../views/wenda/index.vue")
      },
      {
        path: "/video",
        component: () => import("../views/video/index.vue")
      },
      {
        path: "/my",
        component: () => import("../views/my/index.vue")
      }
    ]
  },
  {
    path: '/login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/Login.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  // mode:"hash",
  base: process.env.BASE_URL,
  routes
})

export default router
