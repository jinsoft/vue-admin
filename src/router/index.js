import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [{
      path: '/redirect/:path*',
      component: () => import('@/views/redirect/index')
    }]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: '控制台', icon: 'dashboard', affix: true }
      }
    ]
  },
  {
    path:'/settings',
    component: Layout,
    redirect:'/settings/system',
    alwaysShow: true,
    name:'settings',
    meta:{
      title: '设置',
      icon: 'settings'
    },
    children:[
      {
        path:'system',
        component: () => import('@/views/settings/system/index'),
        name:'系统设置',
        meta:{
          title: '系统设置'
        }
      }
    ]
  },
  {
    path: '/users',
    component: Layout,
    children: [
      {
        path: 'index',
        name:'sss',
        component:()=> import('@/views/users/index'),
        meta: { title: '用户', icon: 'users' }
      }
    ]
  },
  {
    path: 'github',
    component: Layout,
    children: [
      {
        path: 'https://github.com/jinsoft',
        meta: { title: 'github', icon: 'link' }
      }
    ]
  }
]

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export default router