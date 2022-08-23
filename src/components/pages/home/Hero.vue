<template>
    <section id="content" class="mx-5 my-5" data-aos="fade-up" data-aos-duration="1200">
        <div class="row">
            <div class="col-12 col-md-6">
                <div class="trigger-text">
                    <h1 class="title">
                        E-Library
                    </h1>

                    <p class="mt-3">
                        Projek yang dibangun untuk memberikan sebuah <br>
                        motivasi kuat kepada manusia dalam proses <br>
                        tercapainya antar galaxy multi univ.
                    </p>

                    <div class="box-stats d-flex mt-5">
                        <div class="box-storage mr-2">
                            <img src="@/assets/icons/storage.svg" alt="icon">
                            <p class="title text-left">
                                10M+ E-Books
                            </p>
                        </div>

                        <div class="box-verified mr-4">
                            <img src="@/assets/icons/verified.svg" alt="icon">
                            <p class="title">
                                Verified by Authors
                            </p>
                        </div>

                        <div class="box-download">
                            <img src="@/assets/icons/download.svg" alt="icon">
                            <p class="title">
                                18M+ Download
                            </p>
                        </div>
                    </div>

                    <div class="mt-4">
                        <b-button pill class="btn btn-primary btn-lg">
                            Show Me Now

                        </b-button>
                    </div>
                </div>
            </div>

            <div class="col-md-6">
                <img src="@/assets/images/banner.png" alt="banner" class="w-100 h-100">

            </div>
        </div>
    </section>
</template>

<script>

export default {
    name: 'Hero',
    data() {
        return {
            //
        }
    },
}
</script>