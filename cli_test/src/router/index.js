import Vue from 'vue'
import VueRouter from 'vue-router'
const About =() => import('../components/User.vue');
Vue.use(VueRouter)

  const routes = [
    {
      //重定向至首页
      path: '',
      redirect: '/home'
    }
    ,
    {
      path:'/home',
      name: 'Home',
      //懒加载模式，当使用到该路由的时候，才会进行该组件加载
      //用户在请求时进行加载，可以避免出现请求文件(js)过大时，加载页面时出现页面空白的情况
      component: () => import('../components/Home.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../components/About.vue')
    },
    {
      path: '/user/:userId',
      name: 'User',
      component: About
    }
/*   {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( webpackChunkName: "about"  '../views/About.vue')
  } */
]

const router = new VueRouter({
  routes,
  mode: 'history',//改变哈希或history模式m
  linkActiveClass: 'active'
})

export default router
