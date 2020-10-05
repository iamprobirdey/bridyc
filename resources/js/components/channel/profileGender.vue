<template>
  <div>
    <h2>We highly appreciate to give profile details of Schools principle</h2>
    <div v-if="genderVissionChecker">
      <button class="btn-primary" @click="editGenderAndVission()">Edit</button>
      <p>{{ channelProfileData.gender }}</p>
      <p>{{ channelProfileData.vission }}</p>
      <p>{{ channelProfileData.message }}</p>
    </div>
    <form @submit.prevent="getFormData()" v-if="!genderVissionChecker">
      <div
        class="form-group"
        :class="{
          'has-error': errors.has('profileError') || profileError != '',
        }"
      >
        <label for="exampleInputEmail1">Your gender</label>

        <select
          v-model="profileData.gender"
          class="form-control"
          name="gender"
          v-validate="'required'"
        >
          <option value>Select your gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <span v-show="errors.has('gender')" class="text-danger">
          {{ errors.first("gender") }}
        </span>
        <span v-show="profileError != ''" class="help is-danger">
          {{ profileError.gender }}
        </span>
      </div>
      <div
        class="form-group"
        :class="{
          'has-error': errors.has('vission') || profileError.vission != '',
        }"
      >
        <label>Your vission for your college</label>
        <input
          v-model="profileData.vission"
          v-validate="'required'"
          data-vv-delay="20"
          name="vission"
          type="text"
          :class="{ 'form-control': true, 'is-invalid': errors.has('vission') }"
          placeholder="Vission"
        />
        <i v-show="errors.has('vission')" class="is-invalid"></i>

        <span v-show="errors.has('vission')" class="text-danger">{{
          errors.first("vission")
        }}</span>
        <span v-show="profileError.vission != ''" class="text-danger">{{
          profileError.vission
        }}</span>
      </div>
      <div
        class="form-group"
        :class="{
          'has-error': errors.has('message') || profileError.message != '',
        }"
      >
        <label>What message do you have for your college</label>
        <textarea
          v-model="profileData.message"
          v-validate="'required'"
          data-vv-delay="20"
          name="message"
          type="text"
          :class="{ 'form-control': true, 'is-invalid': errors.has('message') }"
          placeholder="message"
        />
        <i v-show="errors.has('message')" class="is-invalid"></i>

        <span v-show="errors.has('message')" class="text-danger">{{
          errors.first("message")
        }}</span>
        <span v-show="profileError.message != ''" class="text-danger">{{
          profileError.message
        }}</span>
      </div>
      <button type="button" class="btn btn-success" @click="goBack()">
        Go Back
      </button>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      channelProfileData: [],
      genderVissionChecker: true,
      profileData: {
        gender: "",
        vission: "",
        message: "",
      },
      profileError: {
        gender: "",
        vission: "",
        message: "",
      },
    };
  },
  props: {
    user: {
      type: Array,
      default: null,
    },
  },
  created() {
    this.channelProfileData = this.user;
    if (this.channelProfileData.gender == null)
      this.genderVissionChecker = false;
  },
  mounted() {},
  methods: {
    getFormData() {
      this.$validator.validate().then((result) => {
        console.log(result);
        if (result) {
          axios
            .post("/api/gender/vission", this.profileData)
            .then((response) => {
              if (response.data.message === true) {
                Vue.toasted.success("Profile is updated", {
                  position: "top-center",
                  duration: 5000,
                });
                this.channelProfileData.gender = this.profileData.gender;
                this.channelProfileData.vission = this.profileData.vission;
                this.channelProfileData.message = this.profileData.message;
                this.genderVissionChecker = true;
              }
            })
            .catch((errors) => {
              Vue.toasted.error("Something went wrong", {
                position: "top-center",
                duration: 5000,
              });
              if (errors.response.data.errors.gender) {
                this.profileError.gender =
                  errors.response.data.errors.gender[0];
              }
              if (errors.response.data.errors.vission) {
                this.profileError.vission =
                  errors.response.data.errors.vission[0];
              }
            });
        }
      });
    },
    editGenderAndVission() {
      this.profileData.gender = this.channelProfileData.gender;
      this.profileData.vission = this.channelProfileData.vission;
      this.genderVissionChecker = false;
    },
  },
};
</script>
