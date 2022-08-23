import apiRoute from "@/services/api.route"
import Vue from 'vue'

const authentication = {
    namespaced: true,
    state: {
        status: '',
        userData: [],
    },
    mutations: {
        request_process(state){
            state.status = 'loading'
        },
        request_success(state, data) {
            state.status = 'success'
            state.userData = data
        },
        request_error(state) {
            state.status = 'error'
        }
    },
    actions: {
        login({commit}, data) {
            commit('request_process')
            return window.axios.post(apiRoute.login, data)
                    .then((response) => {
                        console.log({response})
                        const token = response.data.jwt
                        Vue.$cookies.set('access_token', token, 60 * 60 * 24, '/', 'localhost', true, false)
                        // axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
                        commit('request_success', response.data.user)
                        return response
                    })
                    .catch((error) => {
                        commit('request_error')
                        return error
                    })
        },
        // register({commit}, data) {
        //     return new Promise((resolve) => {
        //         commit('request_process')
                
        //     })
        // },
        logout({commit}) {
            return new Promise((resolve) => {
                commit('request_process')
                const token = Vue.$cookies.get('access_token')
                if(token) {
                    Vue.$cookies.remove('access_token', '/', 'localhost')
                    // delete axios.defaults.headers.common['Authorization']
                    commit('request_success')
                    resolve()
                    setTimeout(() => {
                        window.location.href = '/'
                    }, 1000)
                }
            })
        }
    }
}

export default authentication