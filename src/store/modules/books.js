// import { base_url } from "@/config/base_url"
import apiRoute from "@/services/api.route"

const books = {
    namespaced: true,
    state: {
        status: '',
        data: [],
    },
    getters: {
        getBooks(state){
            return state.books
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
      getDataBooks({commit}) {
          commit('request_process')
          return window.axios.get(apiRoute.books)
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
      createBooksManagement({commit}, data) {
          commit('request_proccess')
          return window.axios.post(apiRoute.books, data)
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
      deleteBooksManagement({commit}, id){
        commit('request_process')
        return window.axios.delete(apiRoute.books + `/${id}`)
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