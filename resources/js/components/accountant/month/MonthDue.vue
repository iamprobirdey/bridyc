<template>
  <div>
    <div
      class="modal fade"
      :id="'monthlyBillDue'"
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
            <h1>Monthly Due Bill</h1>
            <form @submit.prevent="monthlyBillDue('monthDueFormData')">
              <div
                class="form-group"
                :class="{
                  'has-error':
                    errors.has('serverError2.monthly_id') ||
                    serverError2.monthly_id != '',
                }"
              >
                <label for="">Which Month </label>
                <select
                  v-model="monthDueFormData.monthly_id"
                  class="form-control"
                  name="monthDueFormData.monthly_id"
                  v-validate="'required'"
                >
                  <option value="" disabled>Select any Class</option>
                  <option
                    v-for="(data, index) in monthlyData"
                    :key="index"
                    :value="data.id"
                  >
                    {{ data.name }}
                  </option>
                </select>
                <span
                  v-show="errors.has('monthDueFormData.monthly_id')"
                  class="text-danger text-center"
                  >{{ errors.first("monthDueFormData.monthly_id") }}</span
                >
                <span
                  v-show="serverError2.monthly_id != ''"
                  class="help text-danger"
                  >{{ serverError2.monthly_id }}</span
                >
              </div>
              <div
                class="form-group"
                :class="{
                  'has-error':
                    errors.has('serverError2.ledger_id') ||
                    serverError2.ledger_id != '',
                }"
              >
                <label for="">Class Name From Ledger </label>
                <select
                  v-model="monthDueFormData.ledger_id"
                  class="form-control"
                  name="monthDueFormData.ledger_id"
                  v-validate="'required'"
                >
                  <option value="" disabled>Select any Ledger Class</option>
                  <option
                    v-for="(data, index) in ledgerData"
                    :key="index"
                    :value="data.id"
                  >
                    {{ data.name }}
                  </option>
                </select>
                <span
                  v-show="errors.has('monthDueFormData.ledger_id')"
                  class="text-danger text-center"
                  >{{ errors.first("monthDueFormData.ledger_id") }}</span
                >
                <span
                  v-show="serverError2.ledger_id != ''"
                  class="help text-danger"
                  >{{ serverError2.ledger_id }}</span
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
      monthlyData: [],
      ledgerData: [],
      monthDueFormData: {
        monthly_id: "",
        ledger_id: "",
      },
      serverError2: {
        monthly_id: "",
        ledger_id: "",
      },
      admissionId: "",
    };
  },
  created() {},
  mounted() {},
  methods: {
    openMonthlyDueForm(monthlyData, ledgerData, admissionId) {
      this.monthlyData = monthlyData;
      this.ledgerData = ledgerData;
      this.admissionId = admissionId;
      $("#monthlyBillDue").modal("show");
    },
    monthlyBillDue(scope) {
      this.$validator.validate().then((result) => {
        if (result) {
          axios
            .post(
              "/api/channel/accountant/pay/due/monthly/bill/" +
                this.admissionId,
              this.monthDueFormData
            )
            .then((response) => {
              if (response.data.message) {
                this.$emit("pass-monthly-due-data", response.data.data);
                $("#monthlyBillDue").modal("hide");
                Vue.toasted.success("Monthly Bill is paid Successfully", {
                  position: "top-center",
                  duration: 5000,
                });
                console.log("called inside");
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
              if (errors.response.data.errors.monthly_id) {
                this.serverError.monthly_id =
                  errors.response.data.errors.monthly_id[0];
              }
            });
        }
      });
    },
  },
};
</script>
