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
      //meta：元数据，描述数据的数据
      meta: {
        title: '首页'
      },
      //懒加载模式，当使用到该路由的时候，才会进行该组件加载
      //用户在请求时进行加载，可以避免出现请求文件(js)过大时，加载页面时出现页面空白的情况
      component: Home,
      children: [
        {
          path: '/home',
          redirect: '/home/homechild'
        }
        ,
        {
          path:'homechild',
          component: Homechild,
        },
        {
          path: 'homechildmessage',
          component: Homechildmessage
        }
      ],
      beforeEnter: (to, from, next) => {
        // 在路由中可以配置该路由的独享守卫
        console.log('独享守卫:'+to.matched[0].meta.title);
        next();
      }
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: {
        title: '关于'
      }
    },
    {
      path: '/user',
      name: 'User',
      component: User,
      meta: {
        title: '用户'
      }
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
//全局导航守卫的使用
//前置钩子(守卫)，跳转之前的回调函数
router.beforeEach((to,from,next) =>{
  //从from跳转到to
  //取出路由的标题并改变dom
  //如果出现路由中含有子路由的情况，
  //则需要使用以下的matche[0].meta获取父路由的meta内容
  //通常直接使用以下代码即可
  document.title = to.matched[0].meta.title;
  //测试from
  if(from.matched[0] != null || from.matched[0] != undefined)
  {
    console.log(from.matched[0].meta.title);
  }
  //默认跳转到下一页面 
  next();
});
export default router
