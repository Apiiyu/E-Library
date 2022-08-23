<template>
    <section id="auth">
        <div class="container-fluid px-5 py-2">
            <BaseNavbar />

            <slot></slot>
        </div>
    </section>
</template>

<script>
import BaseNavbar from '@/components/general/BaseNavbar'

export default {
    name: "AppLayoutAuthentication",
    components: {
        BaseNavbar
    },
}
</script>