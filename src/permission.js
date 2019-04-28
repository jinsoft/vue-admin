import router from './router'

import { Message } from 'element-ui'

import { getToken } from '@/utils/auth'

const whiteList = ['/login', 'auth-redirect'] //白名单
router.beforeEach((to, from, next) => {
    if(getToken()){
        //
        Message.error('1111')
    }else{
        if(whiteList.indexOf(to.path) !== -1){
            next()
        }else{
            next('/login')
        }
    }
})

router.afterEach(() => {
})
