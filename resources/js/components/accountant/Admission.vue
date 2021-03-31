<template>
  <div>
    <div
      class="modal fade"
      id="admission"
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
            <h1>Admission</h1>
            <form
              @submit.prevent="firstStep('step1')"
              data-vv-scope="step1"
              v-if="step === 1"
            >
              <div
                class="form-group"
                :class="{
                  'has-error':
                    errors.has('serverError.admission_number') ||
                    serverError.admission_number != '',
                }"
              >
                <label for="">Enter Admission Number</label>
                <input
                  v-model="step1.admission_number"
                  v-validate="'required|numeric'"
                  data-vv-delay="20"
                  name="admission_number"
                  type="text"
                  :class="{
                    'form-control': true,
                    'is-invalid': errors.has('step1.admission_number'),
                  }"
                  placeholder="Enter Admission Number"
                />
                <span
                  v-show="errors.has('step1.admission_number')"
                  class="text-danger text-center"
                  >{{ errors.first("step1.admission_number") }}</span
                >
                <span
                  v-show="serverError.admission_number != ''"
                  class="help text-danger"
                  >{{ serverError.admission_number }}</span
                >
              </div>

              <div
                class="form-group"
                :class="{
                  'has-error':
                    errors.has('serverError.name') || serverError.name != '',
                }"
              >
                <label for="">Enter Student Name</label>
                <input
                  v-model="step1.name"
                  v-validate="'required'"
                  data-vv-delay="20"
                  name="name"
                  type="text"
                  :class="{
                    'form-control': true,
                    'is-invalid': errors.has('step1.name'),
                  }"
                  placeholder="Enter Name"
                />
                <span
                  v-show="errors.has('step1.name')"
                  class="text-danger text-center"
                  >{{ errors.first("step1.name") }}</span
                >
                <span
                  v-show="serverError.name != ''"
                  class="help text-danger"
                  >{{ serverError.name }}</span
                >
              </div>

              <div
                class="form-group"
                :class="{
                  'has-error':
                    errors.has('serverError.class') || serverError.class != '',
                }"
              >
                <label for="">Select Class</label>
                <select
                  v-model="step1.class"
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
                  v-show="errors.has('step1.class')"
                  class="text-danger text-center"
                  >{{ errors.first("step1.class") }}</span
                >
                <span
                  v-show="serverError.class != ''"
                  class="help text-danger"
                  >{{ serverError.class }}</span
                >
              </div>

              <div
                class="form-group"
                :class="{
                  'has-error':
                    errors.has('serverError.roll_number') ||
                    serverError.roll_number != '',
                }"
              >
                <label for="">Enter Roll Number</label>
                <input
                  v-model="step1.roll_number"
                  v-validate="'required|numeric'"
                  data-vv-delay="20"
                  name="roll_number"
                  type="text"
                  :class="{
                    'form-control': true,
                    'is-invalid': errors.has('step1.roll_number'),
                  }"
                  placeholder="Enter Roll Number"
                />
                <span
                  v-show="errors.has('step1.roll_number')"
                  class="text-danger text-center"
                  >{{ errors.first("step1.roll_number") }}</span
                >
                <span
                  v-show="serverError.roll_number != ''"
                  class="help text-danger"
                  >{{ serverError.roll_number }}</span
                >
              </div>

              <div
                class="form-group"
                :class="{
                  'has-error':
                    errors.has('serverError.phone') || serverError.phone != '',
                }"
              >
                <label for="">Enter Phone Number</label>
                <input
                  v-model="step1.phone"
                  v-validate="'required|numeric|min:10|max:10'"
                  data-vv-delay="20"
                  name="phone"
                  type="text"
                  :class="{
                    'form-control': true,
                    'is-invalid': errors.has('step1.phone'),
                  }"
                  placeholder="Enter Phone Number"
                />
                <span
                  v-show="errors.has('step1.phone')"
                  class="text-danger text-center"
                  >{{ errors.first("step1.phone") }}</span
                >
                <span
                  v-show="serverError.phone != ''"
                  class="help text-danger"
                  >{{ serverError.phone }}</span
                >
              </div>

              <div
                class="form-group"
                :class="{
                  'has-error':
                    errors.has('serverError.father_name') ||
                    serverError.father_name != '',
                }"
              >
                <label for="">Enter Father Name</label>
                <input
                  v-model="step1.father_name"
                  v-validate="'required'"
                  data-vv-delay="20"
                  name="father_name"
                  type="text"
                  :class="{
                    'form-control': true,
                    'is-invalid': errors.has('step1.father_name'),
                  }"
                  placeholder="Enter Father Name"
                />
                <span
                  v-show="errors.has('step1.father_name')"
                  class="text-danger text-center"
                  >{{ errors.first("step1.father_name") }}</span
                >
                <span
                  v-show="serverError.father_name != ''"
                  class="help text-danger"
                  >{{ serverError.father_name }}</span
                >
              </div>

              <div
                class="form-group"
                :class="{
                  'has-error':
                    errors.has('serverError.category') ||
                    serverError.category != '',
                }"
              >
                <label for="">Enter Category</label>

                <select
                  v-model="step1.category"
                  class="form-control"
                  name="class"
                  v-validate="'required'"
                >
                  <option value="" disabled>Select any Category</option>
                  <option value="general">General</option>
                  <option value="sc">SC</option>
                  <option value="st">ST</option>
                  <option value="muslim">Muslim</option>
                </select>
                <span
                  v-show="errors.has('step1.category')"
                  class="text-danger text-center"
                  >{{ errors.first("step1.category") }}</span
                >
                <span
                  v-show="serverError.category != ''"
                  class="help text-danger"
                  >{{ serverError.category }}</span
                >
              </div>
              <button type="button" class="btn btn-success" disabled>
                Previous
              </button>
              <button type="submit" class="btn btn-success">Next</button>
            </form>
            <!-- <form @submit.prevent="submitForm()" v-if="step === 2">
              <div
                class="form-group"
                :class="{
                  'has-error':
                    errors.has('serverError.class') || serverError.class != '',
                }"
              >
                <label for="">Select Class</label>
                <select
                  v-model="step1.class"
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
                  v-show="errors.has('class')"
                  class="text-danger text-center"
                  >{{ errors.first("class") }}</span
                >
                <span
                  v-show="serverError.class != ''"
                  class="help text-danger"
                  >{{ serverError.class }}</span
                >
              </div>

              <div
                class="form-group"
                :class="{
                  'has-error':
                    errors.has('serverError.father_name') ||
                    serverError.father_name != '',
                }"
              >
                <label for="">Enter Father Name</label>
                <input
                  v-model="step1.father_name"
                  v-validate="'required'"
                  data-vv-delay="20"
                  name="father_name"
                  type="text"
                  :class="{
                    'form-control': true,
                    'is-invalid': errors.has('father_name'),
                  }"
                  placeholder="Enter Father Name"
                />
                <span
                  v-show="errors.has('father_name')"
                  class="text-danger text-center"
                  >{{ errors.first("father_name") }}</span
                >
                <span
                  v-show="serverError.father_name != ''"
                  class="help text-danger"
                  >{{ serverError.father_name }}</span
                >
              </div>

              <div
                class="form-group"
                :class="{
                  'has-error':
                    errors.has('serverError.category') ||
                    serverError.category != '',
                }"
              >
                <label for="">Enter Category</label>

                <select
                  v-model="step1.category"
                  class="form-control"
                  name="class"
                  v-validate="'required'"
                >
                  <option value="" disabled>Select any Category</option>
                  <option value="general">General</option>
                  <option value="sc">SC</option>
                  <option value="st">ST</option>
                  <option value="muslim">Muslim</option>
                </select>
                <span
                  v-show="errors.has('category')"
                  class="text-danger text-center"
                  >{{ errors.first("category") }}</span
                >
                <span
                  v-show="serverError.category != ''"
                  class="help text-danger"
                  >{{ serverError.category }}</span
                >
              </div>
              <button
                type="button"
                class="btn btn-success"
                @click="previousStep"
              >
                Previous
              </button>
              <button type="submit" class="btn btn-success">Submit</button>
            </form> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import boardVue from "../channel/board.vue";
export default {
  data() {
    return {
      classData: [],
      serverError: {
        admission_number: "",
        name: "",
        class: "",
        roll_number: "",
        phone: "",
        father_name: "",
        category: "",
      },
      step1: {
        admission_number: "",
        name: "",
        class: "",
        roll_number: "",
        phone: "",
        father_name: "",
        category: "",
      },
      admissionFormData: {
        admission_number: "",
        name: "",
        class: "",
        roll_number: "",
        phone: "",
        father_name: "",
        category: "",
      },
      channelId: "",
      step: 1,
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
    this.getClassData();
  },
  mounted() {},
  methods: {
    getClassData() {
      axios
        .get("/api/channel/get/accountant/class/data")
        .then((response) => {
          this.classData = response.data.data;
        })
        .catch((error) => {
          Vue.toasted.error("Something went wrong", {
            position: "top-center",
            duration: 5000,
          });
        });
    },
    openModal() {
      $("#admission").modal("show");
    },
    previousStep() {
      this.step = 1;
    },
    firstStep: function (scope) {
      this.$validator.validate(scope).then((result) => {
        if (result) {
          this.step = 1;
        } else {
          Vue.toasted.error("Please fill the required fields!", {
            position: "top-center",
            duration: 3000,
          });
        }
      });
    },
    submitForm() {
      this.$validator.validate().then((result) => {
        if (result) {
          axios
            .post(
              "/api/channel/accountant/admission/data/" + this.channelId,
              this.admissionFormData
            )
            .then((response) => {
              if (response.data.error) {
                Vue.toasted.error("Something went wrong", {
                  position: "top-center",
                  duration: 5000,
                });
              }
              if (response.data.message === true) {
                $("#admission").modal("hide");
                Vue.toasted.success("New Admission has been entered", {
                  position: "top-center",
                  duration: 5000,
                });
                this.admissionFormData.admission_number = "";
                this.admissionFormData.name = "";
                this.admissionFormData.roll_number = "";
                this.admissionFormData.phone = "";
                this.admissionFormData.father_name = "";
                this.admissionFormData.category = "";
                this.$emit("pass-admission-data-to-parent", response.data.data);
              }
            })
            .catch((errors) => {
              Vue.toasted.error("Something went wrong", {
                position: "top-center",
                duration: 5000,
              });
              if (errors.response.data.errors.admission_number) {
                this.serverError.admission_number =
                  errors.response.data.errors.admission_number[0];
              }
              if (errors.response.data.errors.name) {
                this.serverError.name = errors.response.data.errors.name[0];
              }
              if (errors.response.data.errors.roll_number) {
                this.serverError.roll_number =
                  errors.response.data.errors.roll_number[0];
              }
              if (errors.response.data.errors.phone) {
                this.serverError.phone = errors.response.data.errors.phone[0];
              }
              if (errors.response.data.errors.father_name) {
                this.serverError.father_name =
                  errors.response.data.errors.father_name[0];
              }
              if (errors.response.data.errors.category) {
                this.serverError.category =
                  errors.response.data.errors.category[0];
              }
            });
        }
      });
    },
  },
};
</script>
