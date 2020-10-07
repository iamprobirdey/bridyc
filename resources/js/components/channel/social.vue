<template>
  <div>
    <h4>Social Media handles</h4>
    <ul v-if="getTheModel === false">
      <li v-if="socialData.facebook != null">
        <a :href="socialData.facebook" target="_blank"><span>Facebook</span></a>
      </li>
      <li v-if="socialData.instagram != null">
        <a :href="socialData.instagram" target="_blank"
          ><span>Instagram</span></a
        >
      </li>
      <li v-if="socialData.linkedIn != null">
        <a :href="socialData.linkedIn" target="_blank"><span>LinkedIn</span></a>
      </li>
      <li v-if="socialData.youtube != null">
        <a :href="socialData.youtube" target="_blank"><span> Youtube</span></a>
      </li>
    </ul>
    <button @click="editTheSocial()" class="btn btnwebdes">Edit</button>
    <div v-if="getTheModel">
      <form @submit.prevent="validateForm()">
        <div class="row">
          <div
            class="form-group col-sm-6"
            :class="{
              'has-error':
                errors.has('facebook') || serverErrors.facebook != '',
            }"
          >
            <label for="exampleInputEmail1">Facebook</label>
            <input
              id="facebook"
              v-on:focus="serverErrors.facebook = ''"
              v-model="formData.facebook"
              data-vv-delay="20"
              name="facebook"
              type="text"
              :class="{
                'form-control': true,
                'is-invalid': errors.has('facebook'),
              }"
              placeholder="facebook (optional)"
            />
            <i v-show="errors.has('facebook')" class="is-invalid"></i>

            <span v-show="errors.has('facebook')" class="text-danger">{{
              errors.first("facebook")
            }}</span>
            <span v-show="serverErrors.facebook != ''" class="text-danger">{{
              serverErrors.facebook
            }}</span>
          </div>

          <div
            class="form-group col-sm-6"
            :class="{
              'has-error':
                errors.has('instagram') || serverErrors.instagram != '',
            }"
          >
            <label for="exampleInputEmail1">Instagram</label>
            <input
              id="instagram"
              v-on:focus="serverErrors.instagram = ''"
              v-model="formData.instagram"
              data-vv-delay="20"
              name="instagram"
              type="text"
              :class="{
                'form-control': true,
                'is-invalid': errors.has('instagram'),
              }"
              placeholder="instagram (optional)"
            />
            <i v-show="errors.has('instagram')" class="is-invalid"></i>

            <span v-show="errors.has('instagram')" class="text-danger">{{
              errors.first("instagram")
            }}</span>
            <span v-show="serverErrors.instagram != ''" class="text-danger">{{
              serverErrors.instagram
            }}</span>
          </div>
        </div>

        <div class="row">
          <div
            class="form-group col-md-6"
            :class="{
              'has-error':
                errors.has('linkedIn') || serverErrors.linkedIn != '',
            }"
          >
            <label for="exampleInputEmail1">LinkedIn</label>
            <input
              id="linkedIn"
              v-on:focus="serverErrors.linkedIn = ''"
              v-model="formData.linkedIn"
              data-vv-delay="20"
              name="linkedIn"
              type="text"
              :class="{
                'form-control': true,
                'is-invalid': errors.has('linkedIn'),
              }"
              placeholder="linkedIn (optional)"
            />
            <i v-show="errors.has('linkedIn')" class="is-invalid"></i>

            <span v-show="errors.has('linkedIn')" class="text-danger">{{
              errors.first("linkedIn")
            }}</span>
            <span v-show="serverErrors.linkedIn != ''" class="text-danger">{{
              serverErrors.linkedIn
            }}</span>
          </div>

          <div
            class="form-group col-md-6"
            :class="{
              'has-error': errors.has('youtube') || serverErrors.youtube != '',
            }"
          >
            <label for="exampleInputEmail1">Youtube</label>
            <input
              id="youtube"
              v-on:focus="serverErrors.youtube = ''"
              v-model="formData.youtube"
              data-vv-delay="20"
              name="youtube"
              type="text"
              :class="{
                'form-control': true,
                'is-invalid': errors.has('youtube'),
              }"
              placeholder="youtube (optional)"
            />
            <i v-show="errors.has('youtube')" class="is-invalid"></i>

            <span v-show="errors.has('youtube')" class="text-danger">{{
              errors.first("youtube")
            }}</span>
            <span v-show="serverErrors.youtube != ''" class="text-danger">{{
              serverErrors.youtube
            }}</span>
          </div>
        </div>
        <button type="submit" class="btn btnsubmit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import { Validator } from "vee-validate";
export default {
  data() {
    return {
      getTheModel: false,
      socialData: [],
      formData: {
        facebook: "",
        instagram: "",
        linkedIn: "",
        youtube: "",
      },
      serverErrors: {
        facebook: "",
        instagram: "",
        linkedIn: "",
        youtube: "",
      },
    };
  },
  mounted() {
    this.getSocailData();
  },
  methods: {
    getSocailData() {
      axios
        .get("/api/social")
        .then((response) => {
          this.socialData = response.data.channel.extra_attributes.social;
          console.log(this.socialData);
        })
        .catch((errors) => {
          Vue.toasted.error("Something went wrong", {
            position: "top-center",
            duration: 5000,
          });
        });
    },
    validateForm() {
      this.$validator.validate().then((result) => {
        if (result) {
          axios
            .post("/api/social", this.formData)
            .then((response) => {
              this.socialData = response.data.data.extra_attributes.social;
              this.getTheModel = false;
            })
            .catch((errors) => {
              if (errors.response.data.errors.facebook) {
                this.serverErrors.facebook =
                  errors.response.data.errors.facebook[0];
              }
              if (errors.response.data.errors.instagram) {
                this.serverErrors.instagram =
                  errors.response.data.errors.instagram[0];
              }
              if (errors.response.data.errors.linkedIn) {
                this.serverErrors.linkedIn =
                  errors.response.data.errors.linkedIn[0];
              }
              if (errors.response.data.errors.youtube) {
                this.serverErrors.youtube =
                  errors.response.data.errors.youtube[0];
              }
            });
        }
      });
    },
    editTheSocial() {
      this.getTheModel = !this.getTheModel;
      if (this.socialData.facebook != null)
        this.formData.facebook = this.socialData.facebook;
      if (this.socialData.instagram != null)
        this.formData.instagram = this.socialData.instagram;
      if (this.socialData.linkedIn != null)
        this.formData.linkedIn = this.socialData.linkedIn;
      if (this.socialData.youtube != null)
        this.formData.youtube = this.socialData.youtube;
    },
  },
};
</script>

<style>
</style>
