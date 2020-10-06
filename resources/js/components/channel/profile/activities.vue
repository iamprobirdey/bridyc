<template>
  <div>
    <br />
    <br />
    <br />
    <br />
    Add your Extra Cirruculum Activities
    <div v-if="activities != null">
      <ul
        class="nav flex-column col-sm-6 mt-5 mt-sm-0"
        v-for="(activity, index) in activities"
        :key="index"
      >
        <li>
          <div class="card mx-sm-3 shadow profiledetails" style="height: auto">
            <div class="card-body mt-n2">
              Activity and Sociaty :
              {{ activity.activity }}
            </div>
          </div>
        </li>
        <br />
        <li>
          <div class="card mx-sm-3 shadow profiledetails">
            <div class="card-body mt-n2">
              Description:
              {{ activity.description }}
            </div>
          </div>
        </li>
        <button class="btn btn-success" @click="editActivity(activity, index)">
          Edit
        </button>
        <br />
        <br />
        <br />
      </ul>
    </div>

    <button class="btn btn-primary" @click="addActivity()">Add</button>

    <div
      class="modal fade"
      id="addActivity"
      tabindex="-1"
      role="dialog"
      aria-labelledby="principalprofilemodal"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="principalprofilemodal">
              Please fill in these details
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="getActivityData()">
              <h6 class="mb-3 mt-n2">Activities:</h6>

              <div
                class="form-group"
                :class="{
                  'has-error':
                    errors.has('activity') || activityError.activity != '',
                }"
              >
                <label for="exampleInputEmail1">Activity</label>
                <input
                  v-model="activityFormData.activity"
                  v-validate="'required'"
                  data-vv-delay="20"
                  name="activity"
                  type="text"
                  :class="{
                    'form-control': true,
                    'is-invalid': errors.has('activity'),
                  }"
                  placeholder="Field of study(specialization)"
                />
                <i v-show="errors.has('class')" class="is-invalid"></i>

                <span v-show="errors.has('activity')" class="text-danger">{{
                  errors.first("activity")
                }}</span>
                <span
                  v-show="activityError.activity != ''"
                  class="text-danger"
                  >{{ activityError.activity }}</span
                >
              </div>

              <div
                class="form-group"
                :class="{
                  'has-error':
                    errors.has('description') ||
                    activityError.description != '',
                }"
              >
                <label for="exampleInputEmail1">Description</label>
                <input
                  v-model="activityFormData.description"
                  v-validate="'required'"
                  data-vv-delay="20"
                  name="description"
                  type="text"
                  :class="{
                    'form-control': true,
                    'is-invalid': errors.has('description'),
                  }"
                  placeholder="Name of your description"
                />
                <i v-show="errors.has('class')" class="is-invalid"></i>

                <span v-show="errors.has('description')" class="text-danger">{{
                  errors.first("description")
                }}</span>
                <span
                  v-show="activityError.description != ''"
                  class="text-danger"
                  >{{ activityError.description }}</span
                >
              </div>

              <button type="submit" class="btn btnadd ml-0">Submit</button>
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
      activities: [],
      activityFormData: {
        activity: "",
        description: "",
      },
      activityError: {
        activity: "",
        description: "",
      },
      activityPath: "",
      activityIndex: "",
    };
  },
  props: {
    profiledata: {
      type: Object,
      default: null,
    },
  },
  created() {
    this.activities = this.profiledata.activities;
  },
  mounted() {},
  methods: {
    addActivity() {
      this.activityPath = "/api/add/activity";
      this.activityIndex = "";
      this.emptyActivity();
      $("#addActivity").modal("show");
    },
    emptyActivity() {
      this.activityFormData.activity = "";
      this.activityFormData.description = "";
    },
    editActivity(activity, index) {
      this.activityPath = "/api/edit/activity/" + activity.id;
      this.activityIndex = index;
      this.activityFormData.activity = activity.activity;
      this.activityFormData.description = activity.description;
      $("#addActivity").modal("show");
    },
    getActivityData() {
      this.$validator.validate().then((result) => {
        if (result) {
          axios
            .post(this.activityPath, this.activityFormData)
            .then((response) => {
              if (response.data.message) {
                console.log(response.data);
                if (this.activityIndex === "") {
                  this.activities = response.data.data;
                } else {
                  this.activities = response.data.data;
                }
                //this.emptyActivity();
                $("#addActivity").modal("hide");
              }
            })
            .catch((errors) => {
              if (errors.response.data.errors.activity) {
                this.activityError.activity =
                  errors.response.data.errors.activity[0];
              }
              if (errors.response.data.errors.description) {
                this.activityError.description =
                  errors.response.data.errors.description[0];
              }
            });
        }
      });
    },
  },
};
</script>
