// import { base_url } from "@/config/base_url"
import apiRoute from "@/services/api.route"

const books = {
  namespaced: true,
  state: {
    status: '',
    data: [],
  },
  getters: {
    getEmployee(state){
        return state.data
    }
  },
  mutations: {
    request_process(state){
        state.status = 'loading'
    },
    request_success(state, data) {
        state.status = 'success'
        state.data = data
    },
    request_error(state) {
        state.status = 'error'
    }
  },
  actions: {
    getDataEmployee({commit}) {
      commit('request_process')
      return window.axios.get(apiRoute.employee)
        .then((response) => {
          const data = {
              books: response.data.data,
              meta: response.data.meta
          }
          console.log({data})
          commit('request_success', response.data)
          return response.data
        })
        .catch((error) => {
          commit('request_error')
          return error
        })
    },
    getSelectedDataEmployee({commit}, id) {
      commit('request_process')
      return window.axios.get(apiRoute.employee + `/${id}`)
        .then((response) => {
          commit('request_success', response.data)
          return response.data
        })
        .catch((error) => {
          commit('request_error')
          return error
        })
    },
    createEmployeeManagement({commit}, data) {
      console.log({data})
      commit('request_process')
      return window.axios.post(apiRoute.employee, data)
        .then((response) => {
          commit('request_success', response.data)
          return response.data
        })
        .catch((error) => {
          commit('request_error')
          return error
        })
    },
    updateEmployeeManagement({commit}, data) {
      commit('request_process')
      return window.axios.put(apiRoute.employee + `/${data.id}`, data)
        .then((response) => {
          commit('request_success', response.data)
          return response.data
        })
        .catch((error) => {
          commit('request_error')
          return error
        })
    },
    deleteEmployeeManagement({commit}, id) {
      commit('request_process')
      return window.axios.delete(apiRoute.employee + `/${id}`)
        .then((response) => {
          commit('request_success', response.data)
          return response.data
        })
        .catch((error) => {
          commit('request_error')
          return error
        })
    }
  }
}

export default books