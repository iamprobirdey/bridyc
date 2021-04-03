<template>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      width="20"
      height="20"
      @click="changeAdmissionClassModal"
      style="cursor: pointer"
    >
      <path
        d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
      />
    </svg>

    <div
      class="modal fade"
      :id="'edit-class' + indexId"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      data-backdrop="static"
      data-keyboard="false"
    >
      >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <button
            type="button"
            class="close ml-auto mr-2"
            data-dismiss="modal"
            aria-label="Close"
            @click="closeTheModal"
          >
            <span aria-hidden="true">&times;</span>
          </button>

          <div class="modal-body">
            <div v-if="!standardDecider">
              <h1>Choose</h1>

              <button
                class="btn btn-primary"
                @click="getStandardDesireChoices('edit')"
              >
                Want to Edit Previous Class?
              </button>
              <button
                class="btn btn-secondary"
                @click="getStandardDesireChoices('promote')"
              >
                Want to Promote Student's Class?
              </button>
            </div>

            <h1 v-if="standardDecider">Change Class</h1>
            <form @submit.prevent="submitForm()" v-if="standardDecider">
              <div
                class="form-group"
                :class="{
                  'has-error':
                    errors.has('serverError.class_name') ||
                    serverError.class_name != '',
                }"
              >
                <label for="">Class Name </label>
                <select
                  v-model="classFormData.class_name"
                  class="form-control"
                  name="class"
                  v-validate="'required'"
                >
                  <option value="" disabled>Select any Class</option>
                  <option
                    v-for="(data, index) in classData"
                    :key="index"
                    :value="data.id"
                  >
                    {{ data.name }}
                  </option>
                </select>
                <span
                  v-show="errors.has('class_name')"
                  class="text-danger text-center"
                  >{{ errors.first("class_name") }}</span
                >
                <span
                  v-show="serverError.class_name != ''"
                  class="help text-danger"
                  >{{ serverError.class_name }}</span
                >
              </div>
              <button type="submit" class="btn btn-success">Submit</button>
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
      serverError: {
        class_name: "",
      },
      classFormData: {
        class_name: "",
      },
      channelId: null,
      admissionData: [],
      indexId: "",
      classData: [],
      classRelectedData: [],
      classId: "",
      standardDecider: false,
      mainUrl: "",
      selectedClassId: "",
    };
  },
  props: {
    channelid: {
      type: Number,
      default: null,
    },
    admission: {
      type: Object,
      default: null,
    },
    index: {
      type: Number,
      default: null,
    },
  },
  created() {
    this.channelId = this.channelid;
    this.admissionData = this.admission;
    this.indexId = this.index;
    this.admissionData.standard.forEach((element) => {
      if (element.current_class_state === "present") {
        this.selectedClassId = element.accountant_class_id;
        this.classId = element.id;
      }
    });

    this.getClassData();
  },
  methods: {
    changeAdmissionClassModal() {
      $("#edit-class" + this.indexId).modal("show");
    },
    getClassData() {
      axios
        .get("/api/channel/get/accountant/class/admission-ledger/data")
        .then((response) => {
          this.classRelectedData = response.data.data;
        })
        .catch((error) => {
          Vue.toasted.error("Something went wrong", {
            position: "top-center",
            duration: 5000,
          });
        });
    },
    getStandardDesireChoices(choice) {
      if (choice === "edit") {
        this.classData = this.classRelectedData;
        this.classFormData.class_name = this.selectedClassId;
      }

      if (choice === "promote") {
        let data = this.classRelectedData;
        this.classData = [];
        this.classFormData.class_name = this.selectedClassId + 1;
        data.forEach((element) => {
          if (this.selectedClassId < element.id) {
            this.classData.push(element);
          }
        });
      }
      this.standardDecider = true;
      this.mainUrl =
        "/api/channel/accountant/edit/class/data/" +
        this.admissionData.id +
        "/" +
        this.channelId +
        "/" +
        this.classId +
        "/" +
        choice;
    },
    closeTheModal() {
      this.standardDecider = false;
    },
    submitForm() {
      this.$validator.validate().then((result) => {
        if (result) {
          if (this.selectedClassId != this.classFormData.class_name) {
            axios
              .post(this.mainUrl, this.classFormData)
              .then((response) => {
                if (response.data.choice === "edit") {
                  $("#edit-class" + this.indexId).modal("hide");
                  this.selectedClassId = this.classFormData.class_name;
                  this.classFormData.class_name = "";
                  Vue.toasted.success("Class has been edited successfully", {
                    position: "top-center",
                    duration: 5000,
                  });
                  this.$emit(
                    "pass-admission-class-edit-data",
                    this.indexId,
                    response.data.data
                  );
                }

                if (response.data.choice === "promote") {
                  this.classFormData.class_name = "";
                  $("#edit-class" + this.indexId).modal("hide");
                  Vue.toasted.success("Class has been Promoted successfully", {
                    position: "top-center",
                    duration: 5000,
                  });
                  this.$emit(
                    "pass-admission-class-edit-data",
                    this.indexId,
                    response.data.data
                  );
                }
              })
              .catch((errors) => {
                Vue.toasted.error("Something went wrong", {
                  position: "top-center",
                  duration: 5000,
                });
                if (errors.response.data.errors.class_name) {
                  this.serverError.class_name =
                    errors.response.data.errors.class_name[0];
                }
              });
          } else {
            Vue.toasted.error("Class is not edited", {
              position: "top-center",
              duration: 5000,
            });
          }
        }
      });
    },
  },
};
</script>
