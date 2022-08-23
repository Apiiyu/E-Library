<template>
    <div id="app">
        <component :is="layout">
            <router-view />
        </component>
    </div>
</template>

<script>
const defaultLayout = 'AppLayoutDefault'
import AOS from 'aos'

export default {
    name: 'App',
    computed: {
        layout() {
            const layout = this.$route.meta.layout || defaultLayout
            return () => import(`@/views/layouts/${layout}.vue`)
        }
    },
    mounted() {
        AOS.init()
    }
}
</script>

