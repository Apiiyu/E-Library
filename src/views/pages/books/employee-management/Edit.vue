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
            <b-button variant="primary" class="btn-sm px-4 py-3" @click="updateData(employeeId)">
              Update Data
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
  data() {
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
          text: 'Update'
        }
      ],
      employeeId: null,
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
  created(){
    this.getData()
  },
  methods: {
    getData(){
      this.employeeId = this.$route.params.id
      this.$store.dispatch('employee/getSelectedDataEmployee', this.employeeId)
        .then((result) => {
          console.log({result})
          const data = result.data.attributes
          this.formData = {
            Fullname: data.Fullname,
            Username: data.Username,
            Email: data.Email,
            Password: data.Password
          }
        })
      .catch((error) => {
        console.log({error})
      })
    },
    updateData(id){
      this.$v.$touch()

      if (this.$v.$invalid) {
        return
      }

      const data = {
        id,
        data: {
          Fullname: this.formData.Fullname,
          Username: this.formData.Username,
          Email: this.formData.Email,
          Password: this.formData.Password
        }
      }

      this.$store.dispatch('employee/updateEmployeeManagement', data)
        .then((result) => {
          if(result.data){
            createAlert('success', 'Success', 'Data has been updated')
            setTimeout(() => {
              this.$router.push({name: 'employee-management'})
            }, 1000)
          }
        })
        .catch((error) => {
          console.log({error})
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
