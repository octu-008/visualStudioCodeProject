import Vue from 'vue'
import VueRouter from 'vue-router'
const Heartbeat = () => import('../views/Heartbeat/Heartbeat.vue');
const Home = () => import('../views/Home/Home.vue');
const Hotel = () => import('../views/Hotel/Hotel.vue');
const Hourglass = () => import('../views/Hourglass/Hourglass.vue');
Vue.use(VueRouter)

  const routes = [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/hotel',
      name: 'Hotel',
      component: Hotel
    },
    {
      path: '/hourglass',
      name: 'Hourglass',
      component: Hourglass
    },
    {
      path: '/heartbeat',
      name: 'Heartbeat',
      component: Heartbeat
    }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
