import request from '@/utils/request'

export function userList(query) {
    return request({
        url: '/admin/user',
        method: 'get',
        params:query
    })
}

export function updateUser(data){
    return request({
        url:'/admin/user',
        method:'post',
        data 
    })
}