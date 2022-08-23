import Vue from 'vue'
import Vuex from 'vuex'
import authentication from './modules/authentication'
import books from '@/store/modules/books'
import employee from '@/store/modules/employee'
import createPersistedState from "vuex-persistedstate"

const booksPersist = createPersistedState({
  key: 'books',
  paths: ['books.data'],
})

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    authentication,
    books,
    employee
  },
  plugins: [booksPersist]
})
