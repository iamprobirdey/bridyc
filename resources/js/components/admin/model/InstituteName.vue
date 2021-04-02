<template>
  <div>
    <button class="btn btn-secondary" @click="openUserNameModal">
      Change title
    </button>
    <div
      class="modal fade"
      :id="'userNameGenerator' + verificationId"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <form @submit.prevent="userNameForm()">
              <div
                class="form-group"
                :class="{
                  'has-error':
                    errors.has('titleDataError.institute_title') ||
                    titleDataError.institute_title != '',
                }"
              >
                <label>Meta Keywords</label>
                <input
                  v-model="titleData.institute_title"
                  v-validate="'required'"
                  data-vv-delay="20"
                  name="title"
                  type="text"
                  :class="{
                    'form-control': true,
                    'is-invalid': errors.has('institute_title'),
                  }"
                />
                <span
                  v-show="errors.has('institute_title')"
                  class="text-danger"
                  >{{ errors.first("institute_title") }}</span
                >
                <span
                  v-show="titleDataError.institute_title != ''"
                  class="help is-danger"
                  >{{ titleDataError.institute_title }}</span
                >
              </div>

              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: "",
      verificationId: "",
      titleData: {
        institute_title: "",
      },
      titleDataError: {
        institute_title: "",
      },
    };
  },
  props: {
    username: {
      type: String,
      default: String,
    },
    userid: {
      type: Number,
      default: Number,
    },
    verificationid: {
      type: Number,
      default: Number,
    },
  },
  mounted() {
    this.titleData.institute_title = this.username;
    this.userId = this.userid;
    this.verificationId = this.verificationid;
  },
  methods: {
    openUserNameModal() {
      $("#userNameGenerator" + this.verificationId).modal("show");
    },
    userNameForm() {
      this.$validator.validate().then((result) => {
        if (result) {
          axios
            .post(
              "verification/api/institute/title/" + this.userId,
              this.titleData
            )
            .then((response) => {
              if (response.data.error) {
                Vue.toasted.error("Duplicate Institute Title", {
                  position: "top-center",
                  duration: 7000,
                });
              }
              if (response.data.message) {
                Vue.toasted.success("Institute Title is created", {
                  position: "top-center",
                  duration: 5000,
                });
                $("#userNameGenerator" + this.verificationId).modal("hide");
              }
            })
            .catch((errors) => {
              Vue.toasted.error("Something went wrong", {
                position: "top-center",
                duration: 5000,
              });
              if (errors.response.data.errors.institute_title) {
                this.metaDataError.institute_title =
                  errors.response.data.errors.institute_title[0];
              }
            });
        }
      });
    },
  },
};
</script>
