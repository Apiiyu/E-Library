<template>
  <section id="create-data" class="mt-3">
    <header class="d-flex justify-content-between">
      <b-breadcrumb :items="breadcrumbItems" />
    </header>

    <div class="card w-100 mt-3">
      <form-wrapper :validator="$v.formData">
        <section id="firstForm">
          <div class="row">
            <div class="col-6">
              <form-group name="Fullname" label="Full Name" class=" w-100">
                <b-form-input class="form-control" id="Fullname" v-model="formData.Fullname" autocomplete="on" />
              </form-group>
            </div>

            <div class="col-6">
              <form-group name="Username" label="Username" class=" w-100">
                <b-form-input class="form-control" id="Username" v-model="formData.Username" />
              </form-group>
            </div>
          </div>

          <div class="row mt-3">
            <div class="col-12">
              <form-group name="Email" label="Email" class=" w-100">
                <b-form-input class="form-control" id="Email" v-model="formData.Email" />
              </form-group>
            </div>
          </div>

          <div class="row mt-3">
            <div class="col-12">
              <form-group name="Password" label="Password" class=" w-100">
                <b-form-input class="form-control" id="Password" v-model="formData.Password" />
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
import { createAlert } from '@/helpers/alert'
import { required, email, minLength } from "vuelidate/lib/validators"

export default {
  name: 'Create-Books-Management',
  data(){
    return {
      breadcrumbItems: [
        {
          text: 'Books',
          to: {
              name: 'books'
          }
        },
        {
          text: 'Employee Management',
          to: {
              name: 'employee-management'
          }
        },
        {
          text: 'Create'
        }
    ],
      formData: {
        Fullname: '',
        Username: '',
        Email: '',
        Password: ''
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
      Fullname: {
        required,
      },
      Username: {
        required,
      },
      Email: {
        required,
        email
      },
      Password: {
        required,
        minLength: minLength(6)
      },
    }
  },
  methods: {
    postData() {
      this.$v.$touch()

      if (this.$v.$invalid) {
        return
      }

      const data = {
        data: {
          Fullname: this.formData.Fullname,
          Username: this.formData.Username,
          Email: this.formData.Email,
          Password: this.formData.Password
        }
      }

      this.$store.dispatch('employee/createEmployeeManagement', data)
        .then((result) => {
          if(result.data.attributes) {
            createAlert('success', 'Success', 'Data has been created')
            setTimeout(() => {
              this.$router.push({ name: 'employee-management' })
            }, 1000)
          }
        })
        .catch((err) => {
          console.log({err})
          createAlert('error', 'Error', 'Failed to create data')
        })
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