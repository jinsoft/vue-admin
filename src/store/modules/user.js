import { login, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import router from '@/router'

const state = {
    token: getToken(),
    name: '',
    avatar: ''
}

const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    SET_NAME: (state, name) => {
        state.name = name
    },
    SET_AVATAR: (state, avatar) => {
        state.avatar = avatar
    }
}
const actions = {
    login({ commit }, userInfo) {
        const { username, password } = userInfo
        window.console.log(userInfo)
        return new Promise((resolve, reject) => {
            login({ username: username.trim(), password: password })
                .then(response => {
                    const { data } = response
                    commit('SET_TOKEN', data.token)
                    setToken(data.token)
                    resolve()
                }).catch(error => {
                    reject(error)
                })
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}