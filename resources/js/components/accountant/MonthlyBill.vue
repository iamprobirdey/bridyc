<template>
  <div>
    <h1>Student Details</h1>
    <p>Name: {{ admissionData.name }}</p>
    <p>Admission Number : {{ admissionData.admission_number }}</p>
    <p>Category : {{ admissionData.category }}</p>
    <p>Father Name : {{ admissionData.father_name }}</p>
    <p class="text-danger">Pending balance : {{ admissionData.old_balance }}</p>
    <button class="btn btn-primary" @click="payMonthlyBillDue">Pay</button>
    <table class="table">
      <thead>
        <tr>
          <th>#</th>
          <th scope="col">Class</th>
          <th scope="col">Month</th>
          <th scope="col">Status</th>
          <th scope="col">Pay</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(monthly, index) in admissionData.monthlybill" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ admissionData.standard[0].accountclass.name }}</td>
          <td>{{ monthly.month.name }}</td>
          <td>{{ monthly.payment_status }}</td>
          <td v-if="monthly.payment_status === 'pending'">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              width="20"
              height="20"
              style="color: red; cursor: pointer"
              @click="payMonthBillPendingModal(monthly.id, index)"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 5a1 1 0 100 2h1a2 2 0 011.732 1H7a1 1 0 100 2h2.732A2 2 0 018 11H7a1 1 0 00-.707 1.707l3 3a1 1 0 001.414-1.414l-1.483-1.484A4.008 4.008 0 0011.874 10H13a1 1 0 100-2h-1.126a3.976 3.976 0 00-.41-1H13a1 1 0 100-2H7z"
                clip-rule="evenodd"
              />
            </svg>
          </td>
          <td v-if="monthly.payment_status === 'paid'" class="text-success">
            Paid
          </td>
        </tr>
      </tbody>
    </table>
    <div
      class="modal fade"
      :id="'monthlyBill' + index"
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
            <h1>Monthly Bill</h1>
            <form @submit.prevent="submitForm('monthlyBillFormData')">
              <div
                class="form-group"
                :class="{
                  'has-error':
                    errors.has('serverError.ledger_id') ||
                    serverError.ledger_id != '',
                }"
              >
                <label for="">Class Name </label>
                <select
                  v-model="monthlyBillFormData.ledger_id"
                  class="form-control"
                  name="monthlyBillFormData.ledger_id"
                  v-validate="'required'"
                >
                  <option value="" disabled>Select any Class</option>
                  <option
                    v-for="(data, index) in ledgerData"
                    :key="index"
                    :value="data.id"
                  >
                    {{ data.name }}
                  </option>
                </select>
                <span
                  v-show="errors.has('monthlyBillFormData.ledger_id')"
                  class="text-danger text-center"
                  >{{ errors.first("monthlyBillFormData.ledger_id") }}</span
                >
                <span
                  v-show="serverError.ledger_id != ''"
                  class="help text-danger"
                  >{{ serverError.ledger_id }}</span
                >
              </div>
              <button type="submit" class="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <monthly-due
      ref="monthlyDue"
      @pass-monthly-due-data="getMonthlyDueData"
    ></monthly-due>
  </div>
</template>

<script>
import MonthlyDue from "./month/MonthDue";
import MonthDue from "./month/MonthDue.vue";
export default {
  data() {
    return {
      admissionData: [],
      ledgerData: [],
      monthlyData: [],
      index: "",
      channelId: "",
      monthlyBillFormData: {
        ledger_id: "",
        monthly_id: "",
      },
      serverError: {
        ledger_id: "",
      },

      monthlyPendingIndex: "",
    };
  },
  components: {
    "monthly-due": MonthlyDue,
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
    ledger: {
      type: Array,
      default: null,
    },
    monthly: {
      type: Array,
      default: null,
    },
  },
  created() {
    this.channelId = this.channelid;
    this.admissionData = this.admission;
    this.ledgerData = this.ledger;
    this.monthlyData = this.monthly;
  },
  mounted() {},
  computed: {},
  methods: {
    getMonthlyBillModal() {
      $("#monthlyBill" + this.index).modal("show");
    },
    getMonthlyBillData() {
      axios
        .get(
          "/api/channel/accountant/get/monthly/bill/data" +
            this.admissionData.channel_id
        )
        .then((response) => {
          this.admissionData = response.data.data;
          this.admissionData;
        })
        .catch((error) => {});
    },
    getMonthlyDueData(data) {
      this.admissionData.monthlybill.push(data);
    },
    payMonthlyBillDue() {
      this.$refs.monthlyDue.openMonthlyDueForm(
        this.monthlyData,
        this.ledgerData,
        this.admissionData.id
      );
    },
    payMonthBillPendingModal(monthlyId, index) {
      this.monthlyBillFormData.monthly_id = monthlyId;
      this.monthlyPendingIndex = index;
      $("#monthlyBill" + this.index).modal("show");
    },

    submitForm(scope) {
      this.$validator.validate().then((result) => {
        if (result) {
          axios
            .post(
              "/api/channel/accountant/pay/pending/monthly/bill/" +
                this.monthlyBillFormData.monthly_id,
              this.monthlyBillFormData
            )
            .then((response) => {
              if (response.data.error) {
                Vue.toasted.error("Something went wrong. Try Again", {
                  position: "top-center",
                  duration: 5000,
                });
              }
              if (response.data.message) {
                this.admissionData.monthlybill[
                  this.monthlyPendingIndex
                ].payment_status = "paid";
                $("#monthlyBill" + this.index).modal("hide");
                Vue.toasted.success("Monthly Bill is paid Successfully", {
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
              if (errors.response.data.errors.ledger_id) {
                this.serverError.ledger_id =
                  errors.response.data.errors.ledger_id[0];
              }
            });
        }
      });
    },
  },
};
</script>
