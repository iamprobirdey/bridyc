<template>
  <div class="channelname">
    <div v-if="channelChecker" class="mt-n4">
      <h4>Institute:</h4>
      <span v-if="userInstituteData.channel_id != null">{{
        userInstituteData.channel.title
      }}</span>
      <span>{{ userInstituteData.school_name }}</span>
      <button class="btn btn-primary" @click="editAddress()">Edit</button>
    </div>
    <div v-if="!channelChecker">
      <form @submit.prevent="channelForm()">
        <div
          class="form-group row mx-2"
          :class="{
            'has-error': errors.has('channel') || serverErrors.channel_id != '',
          }"
        >
          <label col="col-sm-3 col-form-label" class="mt-2">Institute : </label>

          <select
            v-model="userFormData.channel_id"
            class="form-control col-sm-9 mx-lg-2"
            name="channel"
            v-validate="'numeric'"
          >
            <option value>Select your institute (optional)</option>

            <option
              v-for="channel in channelsData"
              :key="channel.id"
              :value="channel.id"
            >
              {{ channel.title }}
            </option>
          </select>
          <p class="text-danger mx-auto" style="font-size: 14px">
            *If your institute is not listed here, you can always type it below.
          </p>
          <i v-show="errors.has('channel')" class="is-invalid"></i>

          <span
            v-show="errors.has('channel')"
            class="text-danger text-center"
            >{{ errors.first("channel") }}</span
          >
          <span
            v-show="serverErrors.channel_id != ''"
            class="text-danger text-center"
            >{{ serverErrors.channel_id }}</span
          >
        </div>

        <div
          class="form-group row mx-2"
          :class="{
            'has-error':
              errors.has('serverErrors.school_name') ||
              serverErrors.school_name != '',
          }"
        >
          <label col="col-sm-4 col-form-label" class="mt-2"
            >Institute Name :
          </label>
          <input
            v-model="userFormData.school_name"
            class="form-control col-sm-8 mx-lg-2"
            data-vv-delay="20"
            name="school_name"
            type="text"
            :class="{
              'form-control': true,
              'is-invalid': errors.has('school_name'),
            }"
            placeholder="Type your institute name (optional)"
          />
          <span
            v-show="errors.has('school_name')"
            class="text-danger text-center"
            >{{ errors.first("school_name") }}</span
          >
          <span
            v-show="serverErrors.school_name != ''"
            class="text-danger text-center"
            >{{ serverErrors.school_name }}</span
          >
        </div>
        <div class="container text-center">
          <button type="submit" class="btn btnsubmit">Submit</button>
        </div>
      </form>
      <br />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInstituteData: {},
      userData: [],
      channelsData: [],
      channelChecker: false,
      userFormData: {
        channel_id: "",
        school_name: "",
      },
      serverErrors: {
        channel_id: "",
        school_name: "",
      },
    };
  },
  props: {
    user: {
      type: Object,
      default: null,
    },
    userinstitute: {
      type: Object,
      default: null,
    },
    channel: {
      type: Array,
      default: null,
    },
  },
  created() {
    this.userInstituteData = this.userinstitute;
    this.userData = this.user;
    this.channelsData = this.channel;
    console.log(this.userInstituteData);
    if (this.userInstituteData != null) {
      this.channelChecker = true;
    }
  },
  methods: {
    channelForm() {
      this.$validator.validate().then((result) => {
        if (
          this.userFormData.school_name == "" &&
          this.userFormData.channel_id == ""
        ) {
          this.serverErrors.school_name = "Any Either field name is required";
          this.serverErrors.channel_id = "Any Either field name is required";
          result = false;
        }
        if (
          this.userFormData.school_name != "" &&
          this.userFormData.channel_id != ""
        ) {
          Vue.toasted.error("Choose only one option", {
            position: "top-center",
            duration: 5000,
          });
          this.userFormData.school_name == "" &&
            this.userFormData.channel_id == "";
          result = false;
        }
        if (result) {
          axios
            .post(
              "/api/profile/edit/address/channel/" + this.userData.id,
              this.userFormData
            )
            .then((response) => {
              if (response.data.message) {
                Vue.toasted.success("School  is succefully updated", {
                  position: "top-center",
                  duration: 5000,
                });
                this.userInstituteData = {};
                this.userInstituteData = response.data.data;
                this.channelChecker = true;
              }
            })
            .catch((errors) => {
              Vue.toasted.error("Something went wrong", {
                position: "top-center",
                duration: 5000,
              });
              if (errors.response.data.errors.channel_id) {
                this.serverErrors.channel_id =
                  errors.response.data.errors.channel_id[0];
              }
            });
        }
      });
    },
    editAddress() {
      this.channelChecker = false;
    },
  },
};
</script>
