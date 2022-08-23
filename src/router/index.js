import Vue from 'vue'
import VueRouter from 'vue-router'
import authentication from '@/router/pages/authentication'
import home from '@/router/pages/home'
import dashboard from '@/router/pages/dashboard'
import books from '@/router/pages/books'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        { 
            path: '/',    
            redirect: { name: 'home' } 
        }, // ---> List of routes
        ...home,
        ...authentication,
        ...dashboard,
        ...books,
        // ---> Error handling if route not found
        {
            path: '*',
            redirect: 'error-404',
        },
    ],
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active',
})

export default router
