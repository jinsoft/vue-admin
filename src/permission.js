import router from './router'
import store from './store'
// import { Message } from 'element-ui'
import { getToken } from '@/utils/auth'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { Message } from 'element-ui';

const whiteList = ['/login', 'auth-redirect','/admin/login'] // 白名单

router.beforeEach(async(to, from, next) => {

    NProgress.start()

    // document.title = getPageTitle(to.meta.title)

    const hasToken = getToken()

    if (hasToken) {
        if (to.path === '/login') {
            next()
            // next({ path: '/' })
            // NProgress.done()
        } else if (to.path === '/admin/login') {
            next({ path: '/admin' })
            NProgress.done()
        }else{
            next()
            // const hasRole = store.getters.roles && store.getters.roles.length > 0

            // if(hasRole){
            //     next()
            // }else{
            //     window.console.log(to.path)
            //     try{
            //         const { roles }  = await store.dispatch('user/getInfo');

            //         const accessRoutes = await store.dispatch('permission/generateRoutes', roles );

            //         router.addRoutes(accessRoutes)
            //         next()
            //     }catch(error){
            //         Message.error(error || 'Error')
            //         next('/login')
            //         NProgress.done()
            //     }
            // }            
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
