export default [
    {
        path: '/auth',
        name: 'auth',
        component: {
            render (c) { return c('router-view') }
        },
        redirect: '/auth/login',
        children: [
            {
                path: 'login',
                name: 'auth-login',
                component: () => import(/* webpackChunkName: "group-authentication" */ '@/views/pages/authentication/Login.vue'),
                meta: {
                    layout: 'AppLayoutAuthentication',
                }
            },
            {
                path: 'register',
                name: 'auth-register',
                component: () => import(/* webpackChunkName: "group-authentication" */ '@/views/pages/authentication/Register.vue'),
                meta: {
                    layout: 'AppLayoutAuthentication',
                }
            },
        ]
    },
]