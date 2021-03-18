import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 一级路由
const index = ()=>import('../pages/index');  //布局页面
const login = () => import('../pages/login');  //登录页面
const register = ()=>import('../pages/register');  //注册
const goodsList =() =>import('../pages/goodsList')  //商品列表
// 二级路由
const home =()=>import('../pages/home');  //首页
const cate =()=>import('../pages/cate');  //分类
const cart =()=>import('../pages/cart');  //购物车
const mime =()=>import('../pages/mime');  //我的

export default new Router({
  routes: [
    {
      path: '/index',
      component: index,
      redirect:'/index/home',
      children:[
        {
          path:'home',
          name:'首页',
          component:home
        },
        {
          path:'cate',
          name:'分类',
          component:cate
        },
        {
          path:'cart',
          name:'购物车',
          component:cart
        },
        {
          path:'mime',
          name:'我的',
          component:mime
        }
      ]
    },
    {
      path: '/login',
      name:'登录',
      component: login
    },
    {
      path: '/register',
      name:'注册',
      component: register
    },
    {
      path: '/goodsList',
      name:'商品列表',
      component: goodsList
    },
    {
      path: '*',
      redirect: '/login'
    }
  ]
})
