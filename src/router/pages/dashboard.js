export default [
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import(/* webpackChunkName: "dashboard-page" */ '@/views/pages/dashboard/Index.vue'),
        meta: {
            layout: 'AppLayoutContent'
        }
    }
]