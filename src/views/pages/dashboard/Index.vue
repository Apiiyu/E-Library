<template>
    <section id="content">
        <section id="popular" class="mt-2">
            <div class="d-flex justify-content-between">
                <h1>
                    Books Management
                </h1>

                <b-button class="btn-sm">
                    <div class="d-flex">
                        <img src="@/assets/icons/download-1.svg" class="mx-2" alt="icon">

                        Export Data
                    </div>
                </b-button>
            </div>

            <div class="row mt-3">
                <div class="col-4">
                    <div class="card" style="width: 18rem;">
                        <div class="card-img-top img-items img-lego"></div>
                    </div>
                </div>

                <div class="col-4">
                    <div class="card" style="width: 18rem;">
                        <div class="card-img-top img-items img-tiger"></div>
                    </div>
                </div>

                <div class="col-4">
                    <div class="card" style="width: 18rem;">
                        <div class="card-img-top img-items img-dota"></div>
                    </div>
                </div>
            </div>
        </section>

        <section id="data" class="mt-4">
            <div class="d-flex justify-content-between">
                <h1>
                    List Books
                </h1>

                <!-- <div class="box-filters d-flex">
                    <div class="sort-by d-flex">
                        <p>Sort by :</p>
                        <b-form-select v-model="formData.sorting" :options="options" size="sm" />
                    </div>
                </div> -->
            </div>

            <div class="table-responsive mt-3">
                <b-table table-class="table table-centered w-100" thead-tr-class="t-rows" :items="tableData"
                    :fields="fields" responsive="sm" :per-page="perPage" :current-page="currentPage"
                    :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" :filter="filter"
                    :filter-included-fields="filterOn" @filtered="onFiltered">
                    <template v-slot:cell(no)="data">
                        <div class="d-inline-flex align-items-center ">
                            <b> {{ currentPageDetail > 1 ? currentPageDetail * perPage - (perPage-1) +
                                data.index : data.index + 1 }}</b>
                        </div>
                    </template>

                    <template v-slot:cell(status)="data">
                        <div class="d-inline-flex align-items-center ">
                            <img src="@/assets/icons/published.svg" alt="icon" class="mr-2"
                                v-if="data.item.Status == 'published'">
                            <img src="@/assets/icons/draft.svg" alt="icon" class="mr-2" v-else>
                            <b>
                                {{ data.item.Status }}
                            </b>
                        </div>
                    </template>
                </b-table>

                <div class="row">
                    <div class="col">
                        <div class="dataTables_paginate paging_simple_numbers float-right">
                            <ul class="pagination">
                                <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage">
                                </b-pagination>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
</template>

<script>
import { mapGetters } from 'vuex'
import { createAlert } from '@/helpers/alert'
import Swal from 'sweetalert2/dist/sweetalert2.js'

export default {
    components: {
    },
    computed: {
        ...mapGetters([
            'getBooks'
        ]),
        rows(){
            return this.tableData.length
        }
    },
    data() {
        return {
            tableData: [],
            currentPage: 1,
            currentPageDetail: 1,
            perPage: 2,
            sortBy: "no",
            sortDesc: false,
            fields: [
                {
                    key: "no",
                    label: "No",
                    sortable: true
                },
                {
                    key: "ISBN",
                    label: 'ISBN',
                    sortable: true
                },
                {
                    key: "Title",
                    label: 'Books Title',
                    sortable: true
                },
                {
                    key: "Category",
                    label: 'Category',
                    sortable: true
                },
                {
                    key: "Author",
                    label: "Author",
                    sortable: true
                },
                {
                    key: "Status",
                    label: 'Status',
                    sortable: true
                },
            ],
        }
    },
    mounted(){
        this.getData()
    },
    methods: {
        getData(){
            this.$store.dispatch('books/getDataBooks')
                .then((result) => {
                    const data = result.data
                    data.forEach(element => {
                        this.tableData.push(element.attributes)
                    });
                    this.currentPage = result.meta.pagination.page
                    console.log(this.tableData, 'tableData')
                    console.log(result, 'result')
                    
                })
                .catch((error) => {
                    console.log({error})
                })
        },
        logout(){
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
                    this.$store.dispatch('logout')
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