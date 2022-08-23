<template>
    <section id="main-content">
        <div class="container-fluid px-5 py-2">
            <!-- Section Navbar Start -->
            <Navbar />
            <!-- Section Navbar End -->


            <!-- Section Hero Start -->
            <Hero />
            <!-- Section Hero End -->
        </div>


        <!-- Section Benefits Start -->
        <Benefits />
        <!-- Section Benefits End -->


        <!-- Section Items Start -->
        <Items />
        <!-- Section Items End -->


        <!-- Section Achievements Start -->
        <Achievements />
        <!-- Section Achievements End -->


        <!-- Section Footer Start -->
        <Footer />
        <!-- Section Footer End -->
    </section>
</template>

<script>
import Achievements from '@/components/pages/home/Achievements'
import Hero from '@/components/pages/home/Hero'
import Items from '@/components/pages/home/Items'
import Benefits from '@/components/pages/home/Benefits'
import Navbar from '@/components/pages/home/Navbar'
import Footer from '@/components/general/Footer'

export default {
    name: "Home",
    components: {
        Navbar,
        Hero,
        Items,
        Achievements,
        Benefits,
        Footer
    },
    mounted() {
    },
}
</script>