<template>
    <div>
         <form @submit.prevent="validateRegisterForm()" class="px-5">
                    <input
                        id="name"
                        v-on:focus="serverRegisterError.name = ''"
                        v-model="registerFormData.name"
                        v-validate="'required'"
                        data-vv-delay="20"
                        name="name"
                        type="text"
                        :class="{'form-control': true, 'is-invalid': errors.has('name') }"
                        placeholder="name"
                        class="iplognsign form-control shadow-none"
                        />
                        <i v-show="errors.has('name')" class="is-invalid"></i>

                        <span v-show="errors.has('name')" class="text-danger">{{ errors.first('name') }}</span>
                        <span v-show="serverRegisterError.name != ''" class="text-danger">{{ serverRegisterError.name }}</span>
                    <br>
                    <br>
                        <input
                        id="email"
                        v-on:focus="serverRegisterError.email = ''"
                        v-model="registerFormData.email"
                        v-validate="'required|email'"
                        data-vv-delay="20"
                        name="email"
                        type="text"
                        :class="{'form-control': true, 'is-invalid': errors.has('email') }"
                        placeholder="email"
                        class="iplognsign form-control shadow-none"
                        />
                        <i v-show="errors.has('email')" class="is-invalid"></i>

                        <span v-show="errors.has('email')" class="text-danger">{{ errors.first('email') }}</span>
                        <span v-show="serverRegisterError.email != ''" class="text-danger">{{ serverRegisterError.email }}</span>
                    <br>
                        <input
                        id="phone"
                        v-on:focus="serverRegisterError.phone = ''"
                        v-model="registerFormData.phone"
                        v-validate="'required|numeric|min:10|max:10'"
                        data-vv-delay="20"
                        name="phone"
                        type="text"
                        :class="{'form-control': true, 'is-invalid': errors.has('phone') }"
                        placeholder="phone"
                        class="iplognsign form-control shadow-none"
                        />
                        <i v-show="errors.has('phone')" class="is-invalid"></i>

                        <span v-show="errors.has('phone')" class="text-danger">{{ errors.first('phone') }}</span>
                        <span v-show="serverRegisterError.phone != ''" class="text-danger">{{ serverRegisterError.phone }}</span>
                    <br>
                        <input
                        id="password"
                        v-on:focus="serverRegisterError.password = ''"
                        v-model="registerFormData.password"
                        v-validate="'required'"
                        data-vv-delay="20"
                        name="password"
                        :type="password"
                        :class="{'form-control': true, 'is-invalid': errors.has('password') }"
                        placeholder="password"
                        class="iplognsign form-control shadow-none"
                        />
                        <i v-show="errors.has('password')" class="is-invalid"></i>

                        <span v-show="errors.has('password')" class="text-danger">{{ errors.first('password') }}</span>
                        <span v-show="serverRegisterError.password != ''" class="text-danger">{{ serverRegisterError.password }}</span>
                    <br>
                    <input type="checkbox" name="checkbox" v-model="checkbox" v-on:change="checkBox()" > show password
                    <p>By continuing, you agree with Bridyc's <a href="/terms">Terms and Conditions</a> and <a href="/privacy">Privacy Policy</a></p>
                    <button type="submit" class="btn btnlognsign">Sign Up</button>
                </form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            registerFormData: {
                name: '',
                email: '',
                phone: '',
                password: '',
                user_type: 'institute'
            },
            serverRegisterError: {
                name: '',
                email: '',
                phone: '',
                password: ''
            },
            checkbox: '',
            password: 'password',
        };
    },
    methods: {
             validateRegisterForm(){
                this.$validator.validate().then(result => {
                if (result) {
                axios
                .post('register',this.registerFormData)
                .then(response => {
                    if(response.data.auth){
                         location.href = location.origin + response.data.redirectRoute;
                    }
                })
                .catch(errors => {
                    Vue.toasted.error("Something went wrong", {
                        position: "top-center",
                        duration: 5000
                        });
                     if (errors.response.data.errors.name) {
                        this.serverRegisterError.name =
                        errors.response.data.errors.name[0];
                    }
                    if (errors.response.data.errors.email) {
                        this.serverRegisterError.email =
                        errors.response.data.errors.email[0];
                    }
                    if (errors.response.data.errors.phone) {
                        this.serverRegisterError.phone =
                        errors.response.data.errors.phone[0];
                    }
                    if (errors.response.data.errors.password) {
                        this.serverRegisterError.password =
                        errors.response.data.errors.password[0];
                    }
                });
                }
            });
        },
        checkBox(){
            this.password = this.checkbox === true ? 'text' : 'password';
        },
    }
}
</script>

<style>

</style>
