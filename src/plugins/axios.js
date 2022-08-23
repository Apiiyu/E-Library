import Vue from 'vue';
import * as http from 'axios';
import { base_url } from '@/config/base_url'; 
import VueCookies from 'vue-cookies';
Vue.use(VueCookies);

const token = Vue.$cookies.get('access_token')
console.log({token})

let config = {
  baseURL: base_url ?? '//api.local/',
  headers: { 
    'Content-Type': 'application/json',
   },
};

const axios = http.create(config);

axios.interceptors.request.use(
  set => {
    if(token){
      set.headers.Authorization = `Bearer ${token}`;
    }
    
    return set;
  },
  error => Promise.reject(error)
);


Plugin.install = function (Vue) {
  window.axios = axios;
  Object.defineProperties(Vue.prototype, {
    $axios: {
      get() {
        return axios;
      }
    }
  });
};

Vue.use(Plugin);

export default Plugin;
