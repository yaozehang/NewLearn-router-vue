import Vue from "vue";
import Router from "vue-router";
import home from "@/components/home";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/home",
      component: home,
      name:'home',
      meta:{
        title:'首页'
      }
    },
    {
      path: "/about/:id",
      component: () => import("../components/about"),
      name:'about',
      meta:{
        title:'详情'
      }
    },
    {
      path: "/login",
      component: () => import("../components/login"),
      meta:{
        title:'登录'
      }
    },
    {
      path:"/main",
      component: () => import("../views/Layout"),
      redirect:'/main/home',
      children:[
        {
          path: "home",
          component: home,
          name:'home1',
          meta:{
            title:'首页'
          }
        },
        {
          path: "about/:id",
          component: () => import("../components/about"),
          name:'about1',
          meta:{
            title:'详情'
          }
        },
        {
          path: "login",
          component: () => import("../components/login"),
          name:"login",
          meta:{
            title:'登录'
          }
        },
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  // to and from are both route objects
  NProgress.start();
  if( to.meta && to.meta.title){
    document.title = to.meta.title
  }
  next();
});

router.afterEach((to, from) => {
  NProgress.done();
})

export default router;
