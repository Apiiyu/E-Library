<template>
    <section id="main-content" class="mt-4" data-aos="fade-up" data-aos-duration="1200">
        <div class="row justify-content-center">
            <div class="col-12 col-md-5">
                <div class="card w-100 h-100">
                    <div class="text-left">
                        <h1>Sign Up</h1>
                        <p>
                            Sign Up to create your account.
                        </p>
                    </div>

                    <form-wrapper :validator="$v.formData">
                        <div class="row">
                            <div class="col-6">
                                <form-group name="Fullname" label="Fullname" class="mt-4 w-100">
                                    <b-form-input class="form-control" id="Fullname" v-model="formData.Fullname" />
                                </form-group>
                            </div>

                            <div class="col-6">
                                <form-group name="username" label="Username" class="mt-4 w-100">
                                    <b-form-input class="form-control" id="username" v-model="formData.username" />
                                </form-group>
                            </div>
                        </div>

                        <form-group name="email" label="Email" class="mt-4 w-100">
                            <b-form-input class="form-control" id="email" v-model="formData.email" />
                        </form-group>

                        <form-group name="password" label="Password" class="mt-4 w-100">
                            <b-form-input class="form-control" id="password" type="password" v-model="formData.password" />
                        </form-group>
                    </form-wrapper>

                    <div class="text-right mt-3">
                        <p>Don't have account ?
                            <router-link :to="{ name: 'auth-login'}">
                                Sign In
                            </router-link>
                        </p>
                    </div>

                    <b-button pill class="btn btn-primary btn-lg mt-2" @click="postData">
                        Sign Up
                    </b-button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { required, minLength, email } from 'vuelidate/lib/validators'
import { createAlert } from '@/helpers/alert'

export default {
    name: 'Register',
    data() {
        return {
            formData: {
                Fullname: '',
                username: '',
                email: '',
                password: ''
            }
        }
    },
    validations: {
        formData: {
            Fullname: {
                required,
            },
            username: {
                required,
            },
            email: {
                required,
                email
            },
            password: {
                required,
                minLength: minLength(8)
            }
        }
    },
    methods: {
        postData() {
            this.$v.$touch()

            if (this.$v.$invalid) {
                return
            }

            this.$store.dispatch('authentication/register', this.formData)
                .then((result) => {
                    createAlert('success', 'Success', 'Successfully create your account!')
                    setTimeout(() => {
                        this.$router.push({ name: 'auth-login' })
                    }, 1000)
                    console.log({result})
                })
                .catch((error) => {
                    console.log({error})
                })
        }
    }
}
</script>