<template>
    <section id="main-content" class="mt-4" data-aos="fade-up" data-aos-duration="1200">
        <div class="row justify-content-center">
            <div class="col-12 col-md-5">
                <div class="card w-100 h-100">
                    <div class="text-left">
                        <h1>Sign In</h1>
                        <p>
                            Sign In to your account to continue.
                        </p>
                    </div>

                    <form-wrapper :validator="$v.formData">
                        <b-form-row>
                            <form-group name="identifier" label="Email" class="mt-4 w-100">
                                <b-form-input class="form-control" id="email" v-model="formData.identifier" />
                            </form-group>

                            <form-group name="password" label="Password" class="mt-4 w-100">
                                <b-form-input class="form-control" id="password" type="password"
                                    v-model="formData.password" />
                            </form-group>
                        </b-form-row>
                    </form-wrapper>

                    <div class="text-right mt-3">
                        <p>Don't have account ?
                            <router-link :to="{ name: 'auth-register'}">
                                Sign Up
                            </router-link>
                        </p>
                    </div>

                    <b-button pill class="btn btn-primary btn-lg mt-2" @click="postData">
                        Sign In
                    </b-button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { createAlert } from '@/helpers/alert'
import { required, email, minLength } from "vuelidate/lib/validators";

export default {
    name: 'Login',
    data() {
        return {
            formData: {
                identifier: '',
                password: ''
            }
        }
    },
    validations: {
        formData: {
            identifier: {
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

            this.$store.dispatch('authentication/login', this.formData)
                .then((result) => {
                    createAlert('success', 'Success', 'You are logged in')
                    setTimeout(() => {
                        this.$router.push({ name: 'dashboard' })
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