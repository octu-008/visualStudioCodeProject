import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../components/Home.vue');
const Homechild = () =>import('../components/Homechild.vue');
const Homechildmessage = () => import('../components/Homechildmessage.vue');
const About = () => import('../components/About.vue');
const User = () => import('../components/User.vue');
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
      component: Home,
      children: [
        {
          path:'homechild',
          component: Homechild
        },
        {
          path: 'homechildmessage',
          component: Homechildmessage
        }
      ]
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/user/:userId',
      name: 'User',
      component: User
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
