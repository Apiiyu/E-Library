import Vue from 'vue'

export default (to, from, next) => {
    const token = Vue.$cookies.get('access_token')
    if (token) {
        next()
    }
    next('/login')
}