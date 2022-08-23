import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

// Styles
import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'sweetalert2/src/sweetalert2.scss'
import '@/assets/css/styles.css'
import '@/assets/css/home.css'
import '@/assets/css/auth.css'
import '@/assets/css/dashboard.css'


// Scripts
import 'aos/dist/aos.js'
import 'vue-owl-carousel/dist/vue-owl-carousel'
import 'sweetalert2/dist/sweetalert2.min.js'
import '@/plugins/'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

// window.axios = require('axios')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
