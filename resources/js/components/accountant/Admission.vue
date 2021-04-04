<style scoped>
.s-md {
  border: 2px dashed #2c3e50ab;
  border-radius: 4px;
  padding: 5px 7px 5px 7px !important;
}
</style>
<template>
  <div>
    <div
      class="modal fade bd-example-modal-lg"
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
            <div class="d-flex justify-content-center">
              <h3 class="s-md text-center">Admission</h3>
            </div>
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
                <label for="">Admission Number</label>
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
                <label for="">Student Name</label>
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
                  placeholder="Enter Student Name"
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

              <div class="row">
                <div
                  class="form-group col-6"
                  :class="{
                    'has-error':
                      errors.has('serverError.class') ||
                      serverError.class != '',
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
                  class="form-group col-6"
                  :class="{
                    'has-error':
                      errors.has('serverError.roll_number') ||
                      serverError.roll_number != '',
                  }"
                >
                  <label for="">Roll Number</label>
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
              </div>

              <div
                class="form-group"
                :class="{
                  'has-error':
                    errors.has('serverError.phone') || serverError.phone != '',
                }"
              >
                <label for="">Phone Number</label>
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
                <label for="">Father Name</label>
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
                <label for="">Category</label>

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
              <div class="d-flex justify-content-between">
                <button type="button" class="btn btn-success" disabled>
                  Previous
                </button>
                <button type="submit" class="btn btn-success">Next</button>
              </div>
            </form>

            <form @submit.prevent="submitForm()" v-if="step === 2">
              <div
                class="form-group"
                :class="{
                  'has-error':
                    errors.has('serverError.admission_ledger_id') ||
                    serverError.admission_ledger_id != '',
                }"
              >
                <label for="">Admission For which class? </label>
                <select
                  v-model="admissionFormData.admission_ledger_id"
                  class="form-control"
                  name="admission_ledger_id"
                  v-validate="'required'"
                >
                  <option value="" disabled>Select any admission</option>
                  <option
                    v-for="(data, index) in admissionLedgerData"
                    :key="index"
                    :value="data.id"
                  >
                    {{ data.name }}
                  </option>
                </select>
                <span
                  v-show="errors.has('admission_ledger_id')"
                  class="text-danger text-center"
                  >{{ errors.first("admission_ledger_id") }}</span
                >
                <span
                  v-show="serverError.admission_ledger_id != ''"
                  class="help text-danger"
                  >{{ serverError.admission_ledger_id }}</span
                >
              </div>

              <div
                class="form-group"
                :class="{
                  'has-error':
                    errors.has('serverError.payment_mode') ||
                    serverError.payment_mode != '',
                }"
              >
                <label for="">Payment Mode</label>
                <select
                  v-model="admissionFormData.payment_mode"
                  class="form-control"
                  name="payment_mode"
                  v-validate="'required'"
                >
                  <option value="" disabled>Select any mode</option>
                  <option value="online">Online</option>
                  <option value="offline">Offline</option>
                </select>
                <span
                  v-show="errors.has('payment_mode')"
                  class="text-danger text-center"
                  >{{ errors.first("payment_mode") }}</span
                >
                <span
                  v-show="serverError.payment_mode != ''"
                  class="help text-danger"
                  >{{ serverError.payment_mode }}</span
                >
              </div>

              <div
                class="form-group"
                :class="{
                  'has-error':
                    errors.has('serverError.balance_taken') ||
                    serverError.balance_taken != '',
                }"
              >
                <label for="">the Admission Amount</label>
                <br />
                <label for="" class="text-danger"
                  >Expected amount to be taken {{ balanceTaken }}</label
                >
                <input
                  v-model="admissionFormData.balance_taken"
                  v-validate="'required|numeric'"
                  data-vv-delay="20"
                  name="balance_taken"
                  type="text"
                  :class="{
                    'form-control': true,
                    'is-invalid': errors.has('balance_taken'),
                  }"
                  placeholder="Enter the Admission Amount"
                />
                <span
                  v-show="errors.has('balance_taken')"
                  class="text-danger text-center"
                  >{{ errors.first("balance_taken") }}</span
                >
                <span
                  v-show="serverError.balance_taken != ''"
                  class="help text-danger"
                  >{{ serverError.balance_taken }}</span
                >
              </div>
              <div class="d-flex justify-content-between">
                <button
                  type="button"
                  class="btn btn-success"
                  @click="previousStep"
                >
                  Previous
                </button>
                <button type="submit" class="btn btn-success">Submit</button>
              </div>
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
      classData: [],
      admissionLedgerData: [],
      serverError: {
        admission_number: "",
        name: "",
        class: "",
        roll_number: "",
        phone: "",
        father_name: "",
        category: "",
        //step 2
        admission_ledger_id: "",
        payment_mode: "",
        balance_taken: "",
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
        name: "",
        class: "",
        roll_number: "",
        phone: "",
        father_name: "",
        category: "",
        admission_number: "",
        //step 2
        admission_ledger_id: "",
        payment_mode: "",
        balance_taken: "",
        total_balance: "",
      },
      channelId: "",
      step: 1,
    };
  },
  computed: {
    balanceTaken() {
      let data = "";
      if (this.admissionFormData.admission_ledger_id != "") {
        this.admissionLedgerData.forEach((element) => {
          if (element.id === this.admissionFormData.admission_ledger_id) {
            data = element.balance;
          }
        });
      }
      return data;
    },
  },
  props: {
    channelid: {
      type: Number,
      default: null,
    },
  },
  created() {
    this.channelId = this.channelid;
    this.getClassAndAdmissionData();
  },
  mounted() {},
  methods: {
    getClassAndAdmissionData() {
      axios
        .get("/api/channel/get/accountant/class/admission-ledger/data")
        .then((response) => {
          this.classData = response.data.data;
          this.admissionLedgerData = response.data.ledger;
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
      this.$validator.validate().then((result) => {
        if (result) {
          this.step = 2;
          this.admissionFormData.admission_number = this.step1.admission_number;
          this.admissionFormData.name = this.step1.name;
          this.admissionFormData.class = this.step1.class;
          this.admissionFormData.roll_number = this.step1.roll_number;
          this.admissionFormData.phone = this.step1.phone;
          this.admissionFormData.father_name = this.step1.father_name;
          this.admissionFormData.category = this.step1.category;
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
          this.admissionLedgerData.forEach((element) => {
            if (element.id === this.admissionFormData.admission_ledger_id) {
              this.admissionFormData.total_balance = element.balance;
            }
          });
          //   if (
          //     this.admissionFormData.balance_taken <=
          //     this.admissionFormData.total_balance
          //   ) {
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
                this.step = 1;
                this.admissionFormData.admission_number = "";
                this.admissionFormData.name = "";
                this.admissionFormData.roll_number = "";
                this.admissionFormData.phone = "";
                this.admissionFormData.father_name = "";
                this.admissionFormData.category = "";
                this.admissionFormData.admission_ledger_id = "";
                this.admissionFormData.payment_mode = "";
                this.admissionFormData.balance_taken = "";
                this.admissionFormData.total_balance = "";
                this.$emit("pass-admission-data-to-parent", response.data.data);
              }
            })
            .catch((errors) => {
              Vue.toasted.error("Something went wrong", {
                position: "top-center",
                duration: 5000,
              });
              if (errors.response.data.errors.admission_number) {
                this.step = 1;
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
              if (errors.response.data.errors.admission_ledger_id) {
                this.serverError.admission_ledger_id =
                  errors.response.data.errors.admission_ledger_id[0];
              }
              if (errors.response.data.errors.payment_mode) {
                this.serverError.payment_mode =
                  errors.response.data.errors.payment_mode[0];
              }
              if (errors.response.data.errors.balance_taken) {
                this.serverError.balance_taken =
                  errors.response.data.errors.balance_taken[0];
              }
            });
          //   } else {
          //     Vue.toasted.error(
          //       "Taken Balance cannot be more than Admission Fee",
          //       {
          //         position: "top-center",
          //         duration: 6000,
          //       }
          //     );
          //   }
        }
      });
    },
  },
};
</script>
