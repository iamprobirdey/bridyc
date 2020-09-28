<template>
  <div>
    <div v-if="channelChecker">
      <h3>Your School name:</h3>
      <span v-if="userInstituteData.channel_id != null">{{userInstituteData.channel.title}}</span>
      <span>{{userInstituteData.school_name}}</span>
      <button class="btn btn-primary" @click="editAddress()">Edit</button>
    </div>
    <div v-if="!channelChecker">
      <form @submit.prevent="channelForm()">
        <div
          class="form-group row mx-lg-5"
          :class="{'has-error': errors.has('channel') || serverErrors.channel_id != '' }"
        >
          <label col="col-sm-3 col-form-label">CHANNEL:</label>
          <span class="text-danger">If you don't find your college you can type it</span>
          <select
            v-model="userFormData.channel_id"
            class="form-control col-sm-9 ml-auto"
            name="channel"
            v-validate="'numeric'"
          >
            <option value>Select School Optional</option>

            <option
              v-for="channel in channelsData"
              :key="channel.id"
              :value="channel.id"
            >{{channel.title}}</option>
          </select>
          <i v-show="errors.has('channel')" class="is-invalid"></i>

          <span
            v-show="errors.has('channel')"
            class="text-danger text-center"
          >{{ errors.first('channel') }}</span>
          <span
            v-show="serverErrors.channel_id != ''"
            class="text-danger text-center"
          >{{ serverErrors.channel_id }}</span>
        </div>

        <div
          class="form-group"
          :class="{'has-error' :errors.has('serverErrors.school_name') || serverErrors.school_name != ''}"
        >
          <label>Name Optional</label>
          <input
            v-model="userFormData.school_name"
            data-vv-delay="20"
            name="school_name"
            type="text"
            :class="{'form-control': true,'is-invalid': errors.has('school_name')}"
            placeholder="OPTIONAL Enter your school name  "
          />
          <span
            v-show="errors.has('school_name')"
            class="text-danger"
          >{{errors.first("school_name")}}</span>
          <span
            v-show="serverErrors.school_name != ''"
            class="help is-danger"
          >{{serverErrors.school_name}}</span>
        </div>
        <button type="submit" class="btn btnsubmit">Submit</button>
      </form>
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
          console.log("Called");
          console.log(this.userFormData);
          axios
            .post(
              "/api/profile/teacher/edit/channel/" + this.userData.id,
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
                console.log(this.userInstituteData);
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
