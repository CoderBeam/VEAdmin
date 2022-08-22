import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../layout/Layout.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '登录',
    redirect: '/login',
    hidden: true,
    component: () => import('../views/login/Login.vue')
  },
  {
    path: '/login',
    name: 'Login',
    hidden: true,
    component: () => import('../views/login/Login.vue')
  },
  {
    path: '*',
    name: 'NotFound',
    hidden: true,
    component: () => import('../views/errorPage/404NotFound.vue')
  },
  {
    path: '/home',
    name: '首页',
    iconClass: 'el-icon-s-home',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: '首页',
        component: () => import('../views/home/Home.vue')
      }
    ]
  },
  {
    path: '/role',
    name: '权限管理',
    iconClass: 'el-icon-key',
    component: Layout,
    redirect: '/home/role/user',
    children: [
      {
        path: '/home/role/user',
        name: '用户权限',
        component: () => import('../views/role/User.vue')
      },
      {
        path: '/home/role/interface',
        name: '接口管理',
        component: () => import('../views/role/Interface.vue')
      },
      {
        path: '/home/role/Menu',
        name: '菜单管理',
        component: () => import('../views/role/Menu.vue')
      },
    ]
  },
  {
    path: '/errorPage',
    name: '错误页面',
    iconClass: 'el-icon-error',
    component: Layout,
    redirect: '/home/errorPage/401',
    children: [
      {
        path: '/home/errorPage/401',
        name: '401页面',
        component: () => import('../views/errorPage/401Unauthorized.vue')
      },
      {
        path: '/home/errorPage/404',
        name: '404页面',
        component: () => import('../views/errorPage/404NotFound.vue')
      },
    ]
  },
  {
    path: '/userInfo',
    name: '个人中心',
    iconClass: 'el-icon-info',
    component: Layout,
    redirect: '/home/userInfo',
    children: [
      {
        path: '/home/userInfo',
        name: '个人中心',
        component: () => import('../views/userInfo/UserInfo.vue')
      }
    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
// router.beforeEach((to, from, next) => {
//   if (!localStorage.getItem('username')) {
//     if (to.path !== '/login') {
//       next('/login')
//     } else next()
//   } next()
// })
