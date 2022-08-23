<template>
    <section id="sideInformation">
        <div class="card h-100">
            <div class="card card-profile">
                <div class="text-center">
                    <img src="@/assets/images/user-circle.png" alt="user">
                    <h6 class="mt-3">
                        Rafi Khoirulloh
                    </h6>

                    <b-button pill variant="danger" class="btn-sm mt-3 px-4 py-2" @click="logout()">
                        Sign Out
                    </b-button>
                </div>
            </div>

            <div class="card card-notification mt-3">
                <div class="d-flex justify-content-between">
                    <h6>Notifications</h6>
                        See All
                </div>

                <div class="d-flex justify-content-between mt-4 notif active">
                    <div class="title">
                        <div class="d-flex items">
                            <div class="dots"></div>
                            <h6>Netflix SEO</h6>
                        </div>
                        <p>New Project based Vue.js</p>
                    </div>
                </div>

                <div class="d-flex justify-content-between mt-4 notif">
                    <div class="title">
                        <h6>Final Project</h6>
                        <p>Final Project create E-Library</p>
                    </div>
                </div>

                <div class="d-flex justify-content-between mt-4 notif">
                    <div class="title">
                        <h6>Vueapi - PWA</h6>
                        <p>Project Vue with API & PWA</p>
                    </div>
                </div>

                <div class="d-flex justify-content-between mt-4 notif">
                    <div class="title">
                        <h6>Strapi API</h6>
                        <p>Create API E-Library using Strapi</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { createAlert } from '@/helpers/alert'
import Swal from 'sweetalert2/dist/sweetalert2.js'

export default {
    methods: {
        logout() {
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    confirmButton: 'btn btn-success rounded-pill px-4 py-3',
                    cancelButton: 'btn btn-danger rounded-pill px-4 py-3 mr-2'
                },
                buttonsStyling: false
            })

            swalWithBootstrapButtons.fire({
                title: 'Are you sure?',
                text: "You wan't sign out?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, I want it!',
                cancelButtonText: 'No, cancel!',
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                    this.$store.dispatch('authentication/logout')
                    createAlert('success', 'Success', 'Success sign out from system')

                } else if (
                    /* Read more about handling dismissals below */
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    swalWithBootstrapButtons.fire(
                        'Cancelled',
                        'Your imaginary file is safe :)',
                        'error'
                    )
                }
            })
        }
    }
}
</script>