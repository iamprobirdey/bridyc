<template>
    <div>
        <!-- Form start from here -->

        
            <transition name="slide-fade">
                <div v-if="websiteOnPresent">
                    <h4>Your website link</h4>
                    <p style="color:blue">
                        {{ websiteLinkFromServer }}   
                    </p>
                    <button
                            class="btn btnwebdes rounded-0"
                            @click="editMyWebsiteLink()"
                        >
                           <i class="fa fa-pencil" aria-hidden="true"></i> Change website url
                        </button>
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
                    <label for="exampleInputEmail1">Website</label>

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
                        placeholder="Insert your website link(optional)"
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
                    class="btn btn-success mt-n2 p-1"
                    v-if="websiteLinkFromServer != ''"
                    @click="goBack()"
                >
                    <i class="fa fa-long-arrow-left" aria-hidden="true"></i> Back
                </button>
                <button type="submit" class="btn btnsubmit mt-n3">Submit</button>
            </form>
        
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
