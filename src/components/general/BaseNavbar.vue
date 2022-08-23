<template>
    <section id="navbar" data-aos="fade-up" data-aos-duration="1000">
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <router-link :to="{ name: 'home'}" class="navbar-brand d-inline-block">
                    <img src="@/assets/images/app-logo.svg" alt="logo" class=" w-100 h-100">
                </router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item mx-3">
                            <router-link :to="{ name: 'home'}" class="nav-link">
                                Home
                            </router-link>
                        </li>
                        <li class="nav-item mx-3">
                            <a class="nav-link" href="#">Browse</a>
                        </li>
                        <li class="nav-item mx-3">
                            <a class="nav-link" href="#">Creators</a>
                        </li>
                        <li class="nav-item mx-3">
                            <a class="nav-link" href="#">Categories</a>
                        </li>
                        <li class="nav-item mx-3">
                            <a class="nav-link" href="#">Reviews</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </section>
</template>

<script>
export default {
    name: 'BaseNavbar',
    data() {
        return {
            //
        }
    },
}
</script>