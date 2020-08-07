<template>
    <div>
        <!-- Form start from here -->

        <div class="row">
            <transition name="slide-fade">
                <div v-if="websiteOnPresent">
                    <h2>Your website link</h2>
                    <h4>
                        {{ websiteLinkFromServer }}
                        <button
                            class="btn btn-primary"
                            @click="editMyWebsiteLink()"
                        >
                            Edit your website
                        </button>
                    </h4>
                </div>
            </transition>
            <form
                @submit.prevent="getFormData()"
                v-if="websiteOnPresent === false"
            >
                <div
                    class="form-group"
                    :class="{
                        'has-error':
                            errors.has('websiteLinkError') ||
                            websiteLinkError != ''
                    }"
                >
                    <label for="exampleInputEmail1">Website Link</label>

                    <input
                        id="website"
                        v-model="formData.website"
                        v-validate="'required|url'"
                        data-vv-delay="20"
                        name="website"
                        type="text"
                        :class="{
                            'form-control': true,
                            'is-invalid': errors.has('website')
                        }"
                        placeholder="Enter if you have any website"
                    />
                    <span v-show="errors.has('website')" class="text-danger">
                        {{ errors.first("website") }}
                    </span>
                    <span v-show="websiteLinkError != ''" class="text-danger">
                        {{ websiteLinkError }}
                    </span>
                </div>
                <button
                    type="button"
                    class="btn btn-success"
                    v-if="websiteLinkFromServer != ''"
                    @click="goBack()"
                >
                    Go Back
                </button>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            websiteLinkFromServer: "",
            formData: {
                website: ""
            },
            websiteLinkError: "",
            websiteOnPresent: false,
            url: "api/website/"
        };
    },
    mounted() {
        this.getWebsiteData();
    },
    methods: {
        getFormData() {
            this.$validator.validate().then(result => {
                if (result) {
                    if (this.websiteLinkFromServer != "")
                        this.url = "api/website/edit";
                    axios
                        .post(this.url, this.formData)
                        .then(response => {
                            if (response.data.message === true) {
                                Vue.toasted.success("Website is updated", {
                                    position: "top-center",
                                    duration: 5000
                                });
                                this.websiteLinkFromServer =
                                    response.data.data[0]["website_link"];
                                this.websiteOnPresent = true;
                            }
                        })
                        .catch(errors => {
                            this.websiteLinkError =
                                errors.response.data.message;
                        });
                }
            });
        },
        getWebsiteData() {
            axios
                .get("api/website")
                .then(response => {
                    if (response.status === 200) {
                        if (response.data.data[0]["website_link"] != null) {
                            this.websiteLinkFromServer =
                                response.data.data[0]["website_link"];
                            this.websiteOnPresent = true;
                        }
                    }
                })
                .catch(errors => {
                    console.log(errors);
                });
        },
        editMyWebsiteLink() {
            this.formData.website = this.websiteLinkFromServer;
            this.websiteOnPresent = false;
        },
        goBack() {
            this.websiteOnPresent = true;
        }
    }
};
</script>

<style scoped>
.slide-fade-enter-active {
    transition: all 0.5s ease;
}
.slide-fade-leave-active {
    transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
}
</style>
