<template>
  <div class="notification-section">
    <button class="btn add-notifications mb-5" @click="addNewNotification()">
      Add New Notification
    </button>

    <h3 class="text-uppercase mb-n2">News and Notifications</h3>
    <hr />

    <ul>
      <li
        class="mb-1"
        v-for="(notification, index) in notificationData"
        :key="index"
      >
        {{ notification.notify }}
        <button
          class="btn btn-danger"
          @click="deleteNotification(notification, index)"
        >
          Remove
        </button>
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
          <button
            type="button"
            class="close ml-auto mr-2"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>

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
                <label>Add News and Notification</label>
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
                <span
                  v-show="errors.has('notify')"
                  class="text-danger text-center"
                  >{{ errors.first("notify") }}</span
                >
                <span
                  v-show="serverError.notify != ''"
                  class="help is-danger"
                  >{{ serverError.notify }}</span
                >
              </div>
              <button type="submit" class="btn btn-success">Publish</button>
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
                this.notificationForm.notify = "";
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
    deleteNotification(notification, index) {
      axios
        .post("/api/channel/delete/notification/" + notification.id)
        .then((response) => {
          if (response.data.message === true) {
            Vue.toasted.success("New Notification is been added", {
              position: "top-center",
              duration: 5000,
            });
            this.notificationData.splice(index, 1);
          }
        })
        .catch((errors) => {
          Vue.toasted.error("Something went wrong", {
            position: "top-center",
            duration: 5000,
          });
        });
    },
  },
};
</script>
