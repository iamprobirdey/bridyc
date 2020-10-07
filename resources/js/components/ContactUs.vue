<template>
    <div>
        <form @submit.prevent="contactForm()">
                <div
                    class="form-group row"
                    :class="{'has-error' :errors.has('contactError.name') || contactError.name != ''}"
                >
                    <label class="col-sm-3 col-form-label">Name :</label>
                        <input
                        class="col-sm-9"
                        v-model="contactData.name"
                        v-validate="'required'"
                        data-vv-delay="20"
                        name="name"
                        type="text"
                        :class="{'form-control': true,'is-invalid': errors.has('name')}"
                        placeholder="Enter your full name"
                        />
                    <span v-show="errors.has('name')" class="text-danger text-center">{{errors.first("name")}}</span>
                    <span v-show="contactError.name != ''" class="help is-danger">{{contactError.name}}</span>
                </div>

                     <div
                    class="form-group row"
                    :class="{'has-error':errors.has('contactError.email') || contactError.email != ''}"
                >
                    <label class="col-sm-3 col-form-label">E-mail :</label>
                        <input
                        class="col-sm-9"
                        v-model="contactData.email"
                        v-validate="'required|email'"
                        data-vv-delay="20"
                        name="email"
                        type="text"
                        :class="{'form-control': true,'is-invalid': errors.has('email')}"
                        placeholder="Enter your email"
                        />
                    <span v-show="errors.has('email')" class="text-danger text-center">{{errors.first("email")}}</span>
                    <span v-show="contactError.email != ''" class="help is-danger">{{contactError.email}}</span>
                </div>

                <div
                    class="form-group row"
                    :class="{'has-error':errors.has('contactError.phone') || contactError.phone != ''}"
                >
                    <label class="col-sm-6 col-form-label">Phone Number :</label>
                        <input
                        class="col-sm-6"
                        v-model="contactData.phone"
                        v-validate="'required|numeric|min:10|max:10'"
                        data-vv-delay="20"
                        name="phone"
                        type="text"
                        :class="{'form-control': true,'is-invalid': errors.has('phone')}"
                        placeholder="Enter your phone number"
                        />
                    <span v-show="errors.has('phone')" class="text-danger text-center">{{errors.first("phone")}}</span>
                    <span v-show="contactError.phone != ''" class="help is-danger">{{contactError.phone}}</span>
                </div>
                     <div
                    class="form-group row"
                    :class="{'has-error':errors.has('contactError.message') || contactError.message != ''}"
                >
                    <label class="col-sm-4 col-form-label">Message :</label>
                        <textarea
                        class="col-sm-8"
                        v-model="contactData.message"
                        v-validate="'required'"
                        data-vv-delay="20"
                        name="message"
                        type="text"
                        :class="{'form-control': true,'is-invalid': errors.has('message')}"
                        placeholder="Message text"
                        />
                    <span v-show="errors.has('message')" class="text-danger text-center">{{errors.first("message")}}</span>
                    <span v-show="contactError.message != ''" class="help is-danger">{{contactError.message}}</span>
                </div>

                <button type="submit" class="btn btncontact">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            contactData: {
                'name' : '',
                'email' : '',
                'phone' : '',
                'message' : ''
            },
            contactError: {
                'name' : '',
                'email' : '',
                'phone' : '',
                'message' : ''
            }
        };
    },
    methods: {
        contactForm(){
            this.$validator.resume();
            this.$validator.validate().then(result => {
            if (result) {
            axios
                .post('contact', this.contactData)
                .then(response => {
                if (response.data.message === true) {
                    Vue.toasted.success("We will contact you soon", {
                    position: "top-center",
                    duration: 5000
                    });
                    this.emptyTheForm();
                }
                })
                .catch(errors => {
                     Vue.toasted.error("Something went wrong", {
                        position: "top-center",
                        duration: 5000
                    });
                    if (errors.response.data.errors.name) {
                        this.contactError.name =
                        errors.response.data.errors.name[0];
                    }
                    if (errors.response.data.errors.email) {
                        this.contactError.email =
                        errors.response.data.errors.email[0];
                    }
                    if (errors.response.data.errors.phone) {
                        this.contactError.phone =
                        errors.response.data.errors.phone[0];
                    }
                    if (errors.response.data.errors.message) {
                        this.contactError.message =
                        errors.response.data.errors.message[0];
                    }
                });
            }
        });
        },
        emptyTheForm(){
            this.$validator.pause();
            this.contactData.name = '';
            this.contactData.email = '';
            this.contactData.phone = '';
            this.contactData.message = '';

        }
    }
};
</script>
