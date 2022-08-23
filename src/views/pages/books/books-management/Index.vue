<template>
  <section id="book-management" class="mt-2">
    <div class="d-flex justify-content-between">
      <div class="box-sorting">
        <b-form-select v-model="formData.sorting" :options="options" class="mr-3 border-0 text-white text-center" />
      </div>

      <div class="box-filters d-flex">
        <router-link :to="{ name: 'filter-books-management'}" class="btn btn-sm px-3 py-2 text-white ">
          All
        </router-link>

        <router-link :to="{ name: 'filter-books-management'}" class="btn btn-sm px-3 py-2 text-white ">
          Authors
        </router-link>

        <router-link :to="{ name: 'filter-books-management'}" class="btn btn-sm px-3 py-2 text-white ">
          Category
        </router-link>

        <router-link :to="{ name: 'filter-books-management'}" class="btn btn-sm px-3 py-2 text-white ">
          Publisher
        </router-link>

        <router-link :to="{ name: 'filter-books-management'}" class="btn btn-sm px-3 py-2 text-white ">
          Book Type
        </router-link>

      </div>
      <router-link :to="{ name: 'create-books-management'}" class="btn btn-primary btn-sm px-3 py-2 text-white ">
        New Data
      </router-link>
    </div>

    <section id="data">
      <div class="table-responsive mt-3">
        <b-table table-class="table table-centered w-100" thead-tr-class="t-rows" :items="tableData" :fields="fields"
          responsive="sm" :per-page="perPage" :current-page="currentPage" :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc" :filter="filter" :filter-included-fields="filterOn" @filtered="onFiltered">
          <template v-slot:cell(no)="data">
            <div class="d-inline-flex align-items-center ">
              <b> {{ currentPageDetail > 1 ? currentPageDetail * perPage - (perPage-1) +
                data.index : data.index + 1 }}</b>
            </div>
          </template>

          <template v-slot:cell(status)="data">
            <div class="d-inline-flex align-items-center ">
              <img src="@/assets/icons/published.svg" alt="icon" class="mr-2" v-if="data.item.Status == 'published'">
              <img src="@/assets/icons/draft.svg" alt="icon" class="mr-2" v-else>
              <b>
                {{ data.item.Status }}
              </b>
            </div>
          </template>

          <template v-slot:cell(id)="data">
            <div class="d-inline-flex align-items-center ">
              <router-link :to="{ name: 'edit-employee-management', params: { id: data.item.id} }">
                <img src="@/assets/icons/icon-edit.svg" alt="icon">

              </router-link>
              <button class="bg-transparent mx-2" @click="deleteItem(data.item.id)">
                <img src="@/assets/icons/icon-delete.svg" alt="icon">
              </button>
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
import { createAlert } from '@/helpers/alert'
import Swal from 'sweetalert2/dist/sweetalert2.js'

export default {
    name: 'Books',
    computed: {
        getBooks() {
            return this.$store.getters.getBooks
        }
    },
    data() {
        return {
            formData: {
                sorting: 'sortBy'
            },
            options: [
                {
                    value: 'sortBy',
                    text: 'Sort By',
                    selected: true
                },
                {
                    value: 'categories',
                    text: 'Categories'
                },
                {
                    value: 'authors',
                    text: 'Authors'
                },
                {
                    value: 'status',
                    text: 'Status'
                },
            ],
            tableData: [],
            currentPage: 1,
            currentPageDetail: 1,
            perPage: 10,
            sortBy: "no",
            sortDesc: false,
            fields: [
                {
                    key: "no",
                    label: "No",
                    sortable: true
                },
                {
                    key: "attributes.ISBN",
                    label: 'ISBN',
                    sortable: true
                },
                {
                  key: "attributes.Title",
                    label: 'Books Title',
                    sortable: true
                },
                {
                  key: "attributes.Category",
                    label: 'Category',
                    sortable: true
                },
                {
                  key: "attributes.Author",
                    label: "Author",
                    sortable: true
                },
                {
                    key: "attributes.Status",
                    label: 'Status',
                    sortable: true
                },
                {
                  key: "id",
                  label: 'Actions',
                  sortable: false
                }
            ],
        }   
    },
    mounted() {
        this.getData()
    },
    methods: {
      getData() {
        this.$store.dispatch('books/getDataBooks')
            .then((result) => {
                this.tableData = result.data
                this.currentPage = result.meta.pagination.page
                console.log(this.tableData, 'tableData')
                console.log(result, 'result')

            })
            .catch((error) => {
                console.log({ error })
            })
      },
      deleteItem(id){
        const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
            confirmButton: 'btn btn-success rounded-pill px-4 py-3',
            cancelButton: 'btn btn-danger rounded-pill px-4 py-3 mr-2'
          },
          buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
          title: 'Are you sure?',
          text: "You wan't delete this item?",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, I want it!',
          cancelButtonText: 'No, cancel!',
          reverseButtons: true
        }).then((result) => {
          if (result.isConfirmed) {
            this.$store.dispatch('books/deleteBooksManagement', id)
              .then((response) => {
                if (response.data.attributes) {
                  createAlert('success', 'Success', 'Data has been deleted')
                  this.getData()
                }
              })
              .catch((error) => {
                console.log({ error })
              })

          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire(
              'Cancelled',
              'Your item is safe :)',
              'error'
            )
          }
        })
      }
    }
}
</script>

<style scoped>
    #main-content #book-management{
        font-family: 'Montserrat', 'Poppins', sans-serif;
    }

    #main-content #book-management h1{
        font-size: 20px;
    }

    #main-content #book-management h2 {
        font-size: 16px;
    }

    #main-content #book-management .custom-select{
        width: 116px;
        height: 40px;
        padding: 0 10px;
        border-radius: 30px;
        font-size: 14px;
        background: #202020;
    }
</style>