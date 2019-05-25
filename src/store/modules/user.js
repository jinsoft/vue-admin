import { login, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
// import router from '@/router'

const state = {
    token: getToken(),
    name: '',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'
}

const mutations = {
    SET_ROLES:(state,roles) =>{
        state.roles = roles
    },
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
        return new Promise((resolve, reject) => {
            login({ username: username.trim(), password: password })
                .then(response => {
                    const { data } = response
                    window.console.log(data)
                    var token = 'adsfsdfasdg1231234'
                    commit('SET_TOKEN', token)
                    setToken(token)
                    resolve()
                }).catch(error => {
                    reject(error)
                })
        })
    },
    
    // get user info
    getInfo({ commit, state }){
        return new Promise((resolve, reject)=>{
            getInfo(state.token).then(response =>{
                const { data } = response

                if(!data){
                    reject('failed 11111');
                }

                const { roles,name,avatar } = data

                commit('SET_ROLES', roles)
                commit('SET_NAME', name)
                commit('SET_AVATAR',avatar)
                resolve(data)
            }).catch(error=>{
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