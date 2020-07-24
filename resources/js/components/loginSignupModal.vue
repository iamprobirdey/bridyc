<template>
    <div>
            <div class="modal-body row p-0">
        <div class="col-md-5 regBen">
            <button type="button" class="close mr-3 mt-3 smallclose" data-dismiss="modal">&times;</button>
            <div><img src="/images/circle-bridyc.png" class="regformlogo" alt="bridyc logo"></div>
            <br>
            <p>If you are a student or a parent, sign up here! You will be able to apply for different schools,colleges or take part in
            various educational and fun activities from time to time.</p>

            <p>If you are an institute and wants to partner with us. Please contact us or call us at +91-9435285795 / +91-9476844478 </p>
            <br>
            <a href="#" class="haveanaccount">Have An Account</a>
        </div>

        <div class="col-md-7">
            <button type="button" class="close mr-3 mt-3 bigclose" data-dismiss="modal">&times;</button>
            <br>

            <div class="signup" id="mysignup">
                <div class="regheader">
                    <h2>Welcome to Bridyc.com</h2>
                    <h6>Signup to continue</h6>
                <br>
                    <a href="#" class="fbsignup"><i class="fa fa-facebook-official" aria-hidden="true"></i> Sign up with Facebook</a>
                <br>
                <br>
                    <h6>OR</h6>
                </div>
            <br>
                <form @submit.prevent="validateRegisterForm()"  class="px-5">
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
                        name="emailR"
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
                        name="passwordR"
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
                <br>
                <h6 class="mx-5 haveaccount">Already have an Account?<a href="#"> Log In</a></h6>
            </div>

            <div class="login" id="mylogin">
            <div class="logheader">
                <h2>Hey, Good to see you back!</h2>
                <h6>Login to continue</h6>
                <br>
            </div>

            <form @submit.prevent="validateLoginForm()"  class="px-5 mb-3">
                    <input
                        id="email"
                        v-on:focus="serverLoginError.email = ''"
                        v-model="loginFormData.email"
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
                        <span v-show="serverLoginError.email != ''" class="text-danger">{{ serverLoginError.email }}</span>
                    <br>
                        <input
                        id="password"
                        v-on:focus="serverLoginError.password = ''"
                        v-model="loginFormData.password"
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
                        <span v-show="serverLoginError.password != ''" class="text-danger">{{ serverLoginError.password }}</span>
                    <br>
                    <input type="checkbox" name="checkbox" v-model="loginCheckbox" v-on:change="loginCheckBox()"> Remember Password
                    <br>
                    <input type="checkbox" name="checkbox" v-model="checkbox" v-on:change="checkBox()" > show password
                <button type="submit" class="btn btnlognsign">Log In</button>
            </form>
            <h6 class="mx-5">New to bridyc? <a href="#" class="newuser">Sign Up</a></h6>
            </div>

        </div>
        </div>
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
                user_type: 'student'
            },
            loginFormData: {
                email: '',
                password: '',
                remmeber: ''
            },
            serverRegisterError: {
                name: '',
                email: '',
                phone: '',
                password: ''
            },
            serverLoginError: {
                email: '',
                password: ''
            },
            checkbox: '',
            password: 'password',
            domainUrl: location.href,
            loginCheckbox: ''
        };
    },
    mounted(){},
    methods:{
        validateRegisterForm(){
                axios
                .post('register',this.registerFormData)
                .then(response => {
                    if(response.data.auth){
                         location.reload();
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
        },
        validateLoginForm(){
                axios
                .post('login',this.loginFormData)
                .then(response => {
                    if(
                        response.data.status === 'success' &&
                        response.data.message === true
                    ){
                        location.href = location.origin + response.data.route;
                     }

                    if(
                        response.data.status === 'failed'
                    ){
                         Vue.toasted.error(response.data.message, {
                            position: "top-center",
                            duration: 5000
                        });
                    }

                })
                .catch(errors => {
                    Vue.toasted.error("Something went wrong", {
                        position: "top-center",
                        duration: 5000
                    });
                    if (errors.response.data.errors.email) {
                        this.serverLoginError.email =
                        errors.response.data.errors.email[0];
                    }
                    if (errors.response.data.errors.password) {
                        this.serverLoginError.password =
                        errors.response.data.errors.password[0];
                    }
                });
        },
        checkBox(){
            this.password = this.checkbox === true ? 'text' : 'password';
        },
        loginCheckBox(){
            this.loginFormData.checkbox = this.loginCheckbox === true ? 'on' : '';
        }
    },
    computed:{}
}
</script>

<style>

</style>
