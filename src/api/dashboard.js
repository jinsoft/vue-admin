import request from '@/utils/request'

export function transactionList(query) {
    return request({
        url: '/admin/dashboard/transaction',
        method: 'get',
        params: query
    })
}