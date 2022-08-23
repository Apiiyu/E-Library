export default [
    { 
        path: '/home',     
        name: 'home',
        component: () => import(/* webpackChunkName: "landing-page" */ '@/views/pages/home/Index.vue'),
    },
]