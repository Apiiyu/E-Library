<template>
    <section id="create-data" class="mt-3">
        <header class="d-flex justify-content-between">
            <b-breadcrumb :items="breadcrumbItems" />
            <b-button variant="primary" class="btn-sm" @click="submitFirstForm()" style="width: 100px; height: 46px;" v-show="!isDoneForm">
                Save
            </b-button>
        </header>

        <div class="card w-100 mt-3">
            <form-wrapper :validator="$v.formData">
                <section id="firstForm" v-show="!isDoneForm">
                    <div class="row">
                        <div class="col-4">
                            <form-group name="BookCode" label="Book Code" class=" w-100">
                                <b-form-input class="form-control" id="BookCode" v-model="formData.BookCode" autocomplete="on"/>
                            </form-group>
                        </div>

                        <div class="col-4">
                            <form-group name="ISBN" label="ISBN" class=" w-100">
                                <b-form-input class="form-control" id="ISBN" v-model="formData.ISBN" />
                            </form-group>
                        </div>

                        <div class="col-4">
                            <form-group name="Title" label="Title" class=" w-100">
                                <b-form-input class="form-control" id="Title" v-model="formData.Title" />
                            </form-group>
                        </div>
                    </div>

                    <div class="row mt-3">
                        <div class="col-4">
                            <form-group name="Author" label="Author" class=" w-100">
                                <b-form-input class="form-control" id="Author" v-model="formData.Author" />
                            </form-group>
                        </div>

                        <div class="col-4">
                            <form-group name="Publisher" label="Publisher" class=" w-100">
                                <b-form-input class="form-control" id="Publisher" v-model="formData.Publisher" />
                            </form-group>
                        </div>

                        <div class="col-4">
                            <form-group name="Category" label="Category" class=" w-100">
                                <b-form-input class="form-control" id="Category" v-model="formData.Category" />
                            </form-group>
                        </div>
                    </div>

                    <div class="row mt-3">
                        <div class="col-4">
                            <form-group name="DateOfPublication" label="Date of Publication" class=" w-100">
                                <b-form-datepicker class="form-control" id="Date of Publication"
                                    v-model="formData.DateOfPublication" />
                            </form-group>
                        </div>

                        <div class="col-8">
                            <form-group name="Description" label="Description" class=" w-100">
                                <b-form-textarea class="form-control" id="Description" v-model="formData.Description" />
                            </form-group>
                        </div>
                    </div>
                </section>

                <section id="finalForm" v-show="isDoneForm">
                    <div class="row">
                        <div class="col-6">
                            <form-group name="BookCover" label="Book Cover" class=" w-100">
                                <b-form-file v-model="formData.BookCover" class="form-control"
                                    placeholder="Choose a file or drop it here...">
                                </b-form-file>
                            </form-group>
                        </div>

                        <div class="col-6">
                            <form-group name="BookTeaser" label="Book Teaser File" class=" w-100">
                                <b-form-file v-model="formData.BookTeaserFile" class="form-control"
                                    placeholder="Choose a file or drop it here...">
                                </b-form-file>
                            </form-group>
                        </div>
                    </div>

                    <div class="row mt-3">
                        <div class="col-12">
                            <form-group name="BookFile" label="Book File" class=" w-100">
                                <b-form-file v-model="formData.BookFile" ref="file" class="form-control"
                                    placeholder="Choose a file or drop it here...">
                                </b-form-file>
                            </form-group>
                        </div>
                    </div>

                    <div class="row mt-3">
                        <div class="col-4">
                            <form-group name="Status" label="Status" class="w-100 mr-3">
                                <b-form-select class="form-control text-center ml-3" id="Status" v-model="formData.Status"
                                    :options="optStatus" />
                            </form-group>
                        </div>

                        <div class="col-4">
                            <form-group name="BookType" label="Book Type" class="w-100 ">
                                <b-form-select class="form-control text-center ml-3" id="BookType" v-model="formData.BookType"
                                    :options="optType" />
                            </form-group>
                        </div>
                    </div>

                    <div class="d-flex justify-content-end mt-3">
                        <b-button variant="primary" class="btn-sm px-4 py-3" @click="postData()">
                            Create Data
                        </b-button>
                    </div>
                </section>
            </form-wrapper>
        </div>
    </section>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators"

export default {
  name: 'Create-Books-Management',
  data(){
    return {
      isDoneForm: false,
      breadcrumbItems: [
        {
          text: 'Books',
          to: {
              name: 'books'
          }
        },
        {
          text: 'Books Management',
          to: {
              name: 'books-management'
          }
        },
        {
          text: 'Create'
        }
    ],
      formData: {
        BookCode: '',
        ISBN: '',
        Author: '',
        Publisher: '',
        Category: '',
        Status: 'draft',
        DateOfPublication: '',
        BookType: 'ebook',
        Description: '',
        BookCover: '',
        BookTeaserFile: '',
        BookFile: ''
      },
      optStatus: [
        {
          value: 'draft',
          text: 'Draft'
        },
        {
          value: 'published',
          text: 'Published'
        }
      ],
      optType: [
        {
          value: 'ebook',
          text: 'Ebook'
        },
        {
          value: 'physical',
          text: 'Physical'
        }
      ]
    }
  },

  validations: {
    formData: {
      BookCode: {
        required,
        minLength: minLength(5)
      },
      ISBN: {
        required,
        minLength: minLength(8)
      },
      Title: {
        required
      },
      Author: {
        required
      },
      Publisher: {
        required
      },
      Category: {
        required
      },
      DateOfPublication: {
        required
      }
    }
  },
  methods: {
    submitFirstForm() {
      this.$v.$touch()

      if (this.$v.$invalid) {
          return
      }

      this.isDoneForm = !this.isDoneForm
    },
    postData() {
      console.log('file', this.formData.BookCover)
      // this.$store.dispatch('books/createBooksManagement', this.formData)
      //   .then((result) => {
      //     console.log({result})
      //   })
      //   .catch((err) => {
      //     console.log({err})
      //   })
    }
  }
}
</script>

<style scoped>


#main-content #create-data h1 {
    font-family: 'Montserrat', 'Poppins', sans-serif;
    font-size: 20px;
}

#main-content #create-data .custom-select {
    width: 116px;
    height: 40px;
    padding: 0 10px;
    border-radius: 30px;
    font-size: 14px;
    background: #202020;
}
</style>