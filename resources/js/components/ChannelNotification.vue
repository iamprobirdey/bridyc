<template>
  <div>
    <button class="btn btn-primary" @click="addNewNotification()">
      Add new Notification
    </button>
    <ul>
      <li v-for="(notification, index) in notificationData" :key="index">
        {{ notification.notify }}
      </li>
    </ul>

    <div
      class="modal fade"
      id="notificationModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <form @submit.prevent="submitForm()">
              <div
                class="form-group"
                :class="{
                  'has-error':
                    errors.has('serverError.notify') ||
                    serverError.notify != '',
                }"
              >
                <label>Add new Notification</label>
                <input
                  id="notify"
                  v-model="notificationForm.notify"
                  v-validate="'required'"
                  data-vv-delay="20"
                  name="notify"
                  type="text"
                  :class="{
                    'form-control': true,
                    'is-invalid': errors.has('notify'),
                  }"
                  placeholder="Notify anything to your student"
                />
                <span v-show="errors.has('notify')" class="text-danger">{{
                  errors.first("notify")
                }}</span>
                <span
                  v-show="serverError.notify != ''"
                  class="help is-danger"
                  >{{ serverError.notify }}</span
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
      notificationData: [],
      channelId: "",
      notificationForm: {
        notify: "",
      },
      serverError: {
        notify: "",
      },
    };
  },
  props: {
    notification: {
      type: Array,
      default: null,
    },
    channelid: {
      type: Number,
      default: null,
    },
  },
  created() {
    this.notificationData = this.notification;
    console.log(this.notificationData);
    this.channelId = this.channelid;
  },
  mounted() {
    console.log("Notification");
  },
  methods: {
    addNewNotification() {
      $("#notificationModal").modal("show");
    },
    submitForm() {
      this.$validator.validate().then((result) => {
        if (result) {
          axios
            .post(
              "/api/channel/add/notification/" + this.channelId,
              this.notificationForm
            )
            .then((response) => {
              if (response.data.message === true) {
                Vue.toasted.success("New Notification is been added", {
                  position: "top-center",
                  duration: 5000,
                });
                this.notificationData = [];
                this.notificationData = response.data.data;
                $("#notificationModal").modal("hide");
              }
            })
            .catch((errors) => {
              Vue.toasted.error("Something went wrong", {
                position: "top-center",
                duration: 5000,
              });
              if (errors.response.data.errors.notify) {
                this.serverError.notify = errors.response.data.errors.notify[0];
              }
            });
        }
      });
    },
  },
};
</script>
