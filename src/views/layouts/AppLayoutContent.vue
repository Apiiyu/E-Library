<template>
    <section id="content" class="container-fluid px-4">
        <div class="row" data-aos="fade-up" data-aos-duration="1000">
            <Sidebar />

            <section id="main-content" class="col-10 pt-4 px-5">
                <Header />

                <div class="row">
                    <div class="col-9">
                        <slot></slot>
                    </div>

                    <div class="col-3">
                        <SideInformation />
                    </div>
                </div>
            </section>
        </div>
    </section>
</template>

<script>
import Sidebar from '@/components/general/Sidebar'
import Header from '@/components/pages/dashboard/Header'
import SideInformation from '@/components/general/SideInformation'

export default {
    components: {
        Sidebar,
        Header,
        SideInformation
    }
}
</script>