<style >
.customAction {
  display: block;
  position: absolute;
  z-index: 1;
  right: 120px;
}
@media (max-width: 576px) {
  .customAction {
    right: 80px !important;
  }
}
</style>
<template>
  <div>
    <div class="m-1">
      <button class="btn btn-secondary" @click="createCashbook()">
        Create Cashbook
      </button>
    </div>
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th scope="col ">Id</th>
            <th scope="col">Particular</th>
            <th scope="col">Credit/Debit</th>
            <th scope="col">Online/Offline</th>
            <th scope="col">Balance</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(cashbook, index) in cashbookData" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ cashbook.ledger.name }}</td>
            <td>{{ cashbook.payment_type }}</td>
            <td>{{ cashbook.payment_mode }}</td>
            <td>{{ cashbook.total }}</td>
            <td>
              <a
                href="javascript:void(0)"
                style="color: black"
                v-on:click="getTheDotDecider(index)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  height="23"
                  width="34"
                >
                  <path
                    d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
                  />
                </svg>
              </a>
              <div
                class="card customAction"
                v-if="showDot === index && showDotBool === true"
              >
                <div class="card-body">
                  <p
                    style="cursor: pointer"
                    @click="editCashbook(cashbook, index)"
                  >
                    Edit
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      height="23"
                      width="34"
                    >
                      <path
                        d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                      />
                    </svg>
                  </p>
                  <p
                    style="color: red; cursor: pointer"
                    @click="deleteCashbook(cashbook.id, index)"
                  >
                    Delete
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      height="23"
                      width="34"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </p>
                </div>
              </div>
            </td>
          </tr>
          <button v-if="cashbookDataFailed" @click="getCashbookData()">
            Try Again
          </button>
        </tbody>
      </table>
    </div>
    <div
      class="modal fade"
      id="cashbookModal"
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
                    errors.has('serverError.name') || serverError.name != '',
                }"
              >
                <label for="">Select Particular</label>
                <select
                  v-model="cashbookForm.ledger_id"
                  class="form-control"
                  name="payment_mode"
                  v-validate="'required'"
                  @change="onLedgerChange(cashbookForm.ledger_id, $event)"
                >
                  <option
                    v-for="(ledger, index) in ledgerData"
                    :key="index"
                    :value="ledger.id"
                  >
                    {{ ledger.name }}
                  </option>
                </select>
                <span
                  v-show="errors.has('name')"
                  class="text-danger text-center"
                  >{{ errors.first("name") }}</span
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
                    errors.has('serverError.payment_type') ||
                    serverError.payment_type != '',
                }"
              >
                <label for="">Select Payment Type</label>
                <select
                  v-model="cashbookForm.payment_type"
                  class="form-control"
                  name="payment_type"
                  v-validate="'required'"
                >
                  <option value="credit">Credit</option>
                  <option value="debit">Debit</option>
                </select>
                <span
                  v-show="errors.has('payment_type')"
                  class="text-danger text-center"
                  >{{ errors.first("payment_type") }}</span
                >
                <span
                  v-show="serverError.payment_type != ''"
                  class="help text-danger"
                  >{{ serverError.payment_type }}</span
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
                <label for="">Select Payment Mode</label>
                <select
                  v-model="cashbookForm.payment_mode"
                  class="form-control"
                  name="payment_mode"
                  v-validate="'required'"
                >
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
                    errors.has('serverError.balance') ||
                    serverError.balance != '',
                }"
              >
                <label for="">Select Total</label>
                <input
                  v-model="cashbookForm.total"
                  v-validate="'required|numeric'"
                  data-vv-delay="20"
                  name="total"
                  type="text"
                  :class="{
                    'form-control': true,
                    'is-invalid': errors.has('total'),
                  }"
                  placeholder="Balance"
                />
                <span
                  v-show="errors.has('total')"
                  class="text-danger text-center"
                  >{{ errors.first("total") }}</span
                >
                <span
                  v-show="serverError.total != ''"
                  class="help text-danger"
                  >{{ serverError.total }}</span
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
      cashbookData: [],
      ledgerData: [],
      cashbookDataFailed: false,
      createCashbookUrl: "/api/channel/add/cashbook/",
      editCashbookUrl: "/api/channel/edit/cashbook/",
      editCashbookIndex: "",
      urlDecider: "",
      mainUrl: "",
      channelId: "",
      cashbookForm: {
        ledger_id: "",
        payment_type: "",
        payment_mode: "",
        total: "",
      },
      serverError: {
        ledger_id: "",
        payment_type: "",
        payment_mode: "",
        total: "",
      },
      showDot: null,
      showDotBool: false,
    };
  },
  created() {
    this.channelId = this.channelid;
    this.getCashbookData();
  },
  mounted() {},
  props: {
    channelid: {
      type: Number,
      default: null,
    },
  },
  methods: {
    editCashbook(cashbook, index) {
      this.cashbookForm.ledger_id = cashbook.accountant_ledger_id;
      this.cashbookForm.payment_type = cashbook.payment_type;
      this.cashbookForm.payment_mode = cashbook.payment_mode;
      this.cashbookForm.total = cashbook.total;
      this.mainUrl = this.editCashbookUrl + cashbook.id;
      this.urlDecider = "edit";
      this.editCashbookIndex = index;
      $("#cashbookModal").modal("show");
    },
    deleteCashbook(cashbookId, index) {
      axios
        .get("/api/channel/delete/cashbook/" + cashbookId)
        .then((response) => {
          if (response.data.msg) {
            this.cashbookData.splice(index, 1);
          }
        })
        .catch((errors) => {
          Vue.toasted.error("Something went wrong", {
            position: "top-center",
            duration: 5000,
          });
        });
    },
    getCashbookData() {
      axios
        .get("/api/channel/get/cashbook/data")
        .then((response) => {
          this.cashbookData = response.data.cashbooks;
          this.ledgerData = response.data.ledgers;
        })
        .catch((errors) => {
          this.cashbookDataFailed = true;
          Vue.toasted.error("Something went wrong", {
            position: "top-center",
            duration: 5000,
          });
        });
    },
    createCashbook() {
      this.mainUrl = this.createCashbookUrl + this.channelId;
      this.urlDecider = "add";
      $("#cashbookModal").modal("show");
    },
    onLedgerChange(ledgerId, event) {
      this.ledgerData.forEach((element) => {
        if (ledgerId === parseInt(element.id)) {
          console.log(element);
          this.cashbookForm.payment_type = element.payment_type;
          if (this.cashbookData.length > 0) {
            if (element.payment_type === "credit") {
              this.cashbookForm.total += element.balance;
            }
            if (element.payment_type === "debit") {
              this.cashbookForm.total -= element.balance;
            }
          }
        }
      });
    },
    submitForm() {
      this.$validator.validate().then((result) => {
        if (result) {
          axios
            .post(this.mainUrl, this.cashbookForm)
            .then((response) => {
              if (this.urlDecider === "add") {
                if (response.data.message === true) {
                  $("#cashbookModal").modal("hide");
                  Vue.toasted.success("New Cashbook has been entered", {
                    position: "top-center",
                    duration: 5000,
                  });
                  this.cashbookData.push(response.data.cashbook);
                  this.cashbookForm.ledger_id = "";
                  this.cashbookForm.payment_type = "";
                  this.cashbookForm.payment_mode = "";
                  this.cashbookForm.total = "";
                }
              }
              if (this.urlDecider === "edit") {
                if (response.data.message === true) {
                  $("#cashbookModal").modal("hide");
                  Vue.toasted.success("Cashbook has been edited successfully", {
                    position: "top-center",
                    duration: 5000,
                  });

                  this.cashbookData[
                    this.editCashbookIndex
                  ].accountant_ledger_id =
                    response.data.cashbook.accountant_ledger_id;
                  this.cashbookData[this.editCashbookIndex].payment_type =
                    response.data.cashbook.payment_type;
                  this.cashbookData[this.editCashbookIndex].payment_mode =
                    response.data.cashbook.payment_mode;
                  this.cashbookData[this.editCashbookIndex].total =
                    response.data.cashbook.total;

                  this.cashbookForm.ledger_id = "";
                  this.cashbookForm.payment_type = "";
                  this.cashbookForm.payment_mode = "";
                  this.cashbookForm.total = "";
                }
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
              if (errors.response.data.errors.payment_type) {
                this.serverError.payment_type =
                  errors.response.data.errors.payment_type[0];
              }
              if (errors.response.data.errors.payment_mode) {
                this.serverError.payment_mode =
                  errors.response.data.errors.payment_mode[0];
              }
              if (errors.response.data.errors.total) {
                this.serverError.total = errors.response.data.errors.total[0];
              }
            });
        }
      });
    },
    getTheDotDecider(index) {
      this.showDot = index;
      this.showDotBool = !this.showDotBool;
    },
  },
};
</script>
