<template>
  <div
    class="modal fade"
    id="schoolsession"
    tabindex="-1"
    role="dialog"
    aria-labelledby="schoolsession"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <button
          type="button"
          class="close ml-auto mr-2"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <h1>Your School Session</h1>
        <div class="modal-body">
          <form @submit.prevent="submitForm()">
            <div
              class="form-group"
              :class="{
                'has-error':
                  errors.has('serverError.start_session_id') ||
                  serverError.start_session_id != '',
              }"
            >
              <label for="">Your Start Session</label>
              <select
                v-model="sessionData.start_session_id"
                class="form-control"
                name="start_session_id"
                v-validate="'required'"
              >
                <option
                  v-for="(month, index) in monthsData"
                  :key="index"
                  :value="month.id"
                >
                  {{ month.name }}
                </option>
              </select>
              <span
                v-show="errors.has('start_session_id')"
                class="text-danger text-center"
                >{{ errors.first("start_session_id") }}</span
              >
              <span
                v-show="serverError.start_session_id != ''"
                class="help text-danger"
                >{{ serverError.start_session_id }}</span
              >
            </div>

            <div
              class="form-group"
              :class="{
                'has-error':
                  errors.has('serverError.end_session_id') ||
                  serverError.end_session_id != '',
              }"
            >
              <label for="">Your End Session</label>
              <select
                v-model="sessionData.end_session_id"
                class="form-control"
                name="end_session_id"
                v-validate="'required'"
              >
                <option
                  v-for="(month, index) in monthsData"
                  :key="index"
                  :value="month.id"
                >
                  {{ month.name }}
                </option>
              </select>
              <span
                v-show="errors.has('end_session_id')"
                class="text-danger text-center"
                >{{ errors.first("end_session_id") }}</span
              >
              <span
                v-show="serverError.end_session_id != ''"
                class="help text-danger"
                >{{ serverError.end_session_id }}</span
              >
            </div>

            <button type="submit" class="btn btn-success">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      channelId: "",
      monthsData: [],
      sessionData: {
        start_session_id: "",
        end_session_id: "",
      },
      serverError: {
        start_session_id: "",
        end_session_id: "",
      },
    };
  },
  props: {
    channelid: {
      type: Number,
      default: null,
    },
  },
  created() {
    this.channelId = this.channelid;
    this.getSessionAvailability();
  },
  methods: {
    getSessionAvailability() {
      console.log("session called");
      axios
        .get("/api/channel/school/session/check/" + this.channelId)
        .then((response) => {
          if (!response.data.session) this.openSessionModel();
          this.monthsData = response.data.months;
        })
        .catch((errors) => {
          Vue.toasted.error("Something went wrong", {
            position: "top-center",
            duration: 5000,
          });
        });
    },
    openSessionModel() {
      $("#schoolsession").modal("show");
    },
    submitForm() {
      this.$validator.validate().then((result) => {
        if (result) {
          axios
            .post(
              "/api/channel/school/session/store/" + this.channelId,
              this.sessionData
            )
            .then((response) => {
              if (response.data.message === true) {
                $("#schoolsession").modal("hide");
                Vue.toasted.success("Session has been created", {
                  position: "top-center",
                  duration: 5000,
                });
              }
            })
            .catch((errors) => {
              Vue.toasted.error("Something went wrong", {
                position: "top-center",
                duration: 5000,
              });
              if (errors.response.data.errors.start_session_id) {
                this.serverError.start_session_id =
                  errors.response.data.errors.start_session_id[0];
              }
              if (errors.response.data.errors.end_session_id) {
                this.serverError.end_session_id =
                  errors.response.data.errors.end_session_id[0];
              }
            });
        }
      });
    },
  },
};
</script>
