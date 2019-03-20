import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/views/layout/Layout'

export const constantRoutes = [{
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
    }
]

export default new Router({
    routes: constantRoutes
})