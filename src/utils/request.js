import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

const service = axios.create({
    baseURL: '/',
    withCredentials: true,
    timeout: 50000
})

service.interceptors.request.use(
    config => {
        if (store.getters.token) {
            config.headers['X-TOKEN'] = getToken()
        }
        return config
    }
    , error => {
        window.console.log(error)
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    response => {
        const res = response.data

        if (res.code !== 200) {
            Message({
                message: res.msg || 'error',
                type: 'error',
                duration: 3 * 1000
            })
            if (res.code == 4003) {
                MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
                    confirmButtonText: 'Re-Login',
                    cancelButtonText: 'Cancel',
                    type: 'warning'
                }).then(() => {
                    store.dispatch('user/resetToken').then(() => {
                        location.reload()
                    })
                })
            }
            return Promise.reject(res.message || 'error')
        } else {
            return res
        }
    }
    , error => {
        window.console.log('error:' + error)
        Message({
            message: error.message,
            type: 'error',
            duration: 3 * 1000
        })
        return Promise.reject(error)
    }
)

export default service