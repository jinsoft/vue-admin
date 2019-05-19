import router from './router'
import store from './store'
// import { Message } from 'element-ui'
import { getToken } from '@/utils/auth'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const whiteList = ['/login', 'auth-redirect'] // 白名单

router.beforeEach(async(to, from, next) => {

    const hasToken = getToken()

    if (hasToken) {
        if (to.path === '/login') {
            next({ path: '/' })
            NProgress.done()
        } else if (to.path === '/admin/login') {
            next({ path: '/admin' })
            NProgress.done()
        }else{
            // const hasRole = store.getters.roles && store.getters.roles.length > 0
            const accessRoutes = await store.dispatch('permission/generateRoutes', ['admin']);

            router.addRoutes(accessRoutes)

            next()
            NProgress.done()
            
        }
    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            next('/login')
            NProgress.done()
        }
    }
})

router.afterEach(() => {
    NProgress.done()
})
