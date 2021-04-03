<style >
.customAction {
  display: block;
  position: absolute;
  z-index: 1;
  right: 120px;
}
@media (max-width: 576px) {
  .customAction {
    right: 50px !important;
  }
}
@media (min-width: 1768px) {
  .customAction {
    right: 260px !important;
  }
}
/* 2nd card */
.customAction1 {
  display: block;
  position: absolute;
  z-index: 1;
  right: 80px;
}
@media (max-width: 576px) {
  .customAction1 {
    right: 70px !important;
  }
}
@media (min-width: 1768px) {
  .customAction1 {
    right: 80px !important;
  }
}
</style>
<template>
  <div class="row">
    <a :href="admissionUrl" class="btn btn-secondary">Go to Admission</a>
    <a :href="cashbookUrl" class="btn btn-primary">Go to Cashbook</a>
    <br />
    <br />

    <div class="m-1">
      <button @click="createNewLedger()" class="btn btn-primary">
        Create Ledger
      </button>
    </div>

    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th>Sub-Ledger</th>
            <th scope="col ">Id</th>
            <th scope="col">Ledger Name</th>
            <th scope="col">Credit/Debit</th>
            <th scope="col">Balance</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(ledger, index) in ledgerData" :key="index">
            <td>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                height="23"
                width="34"
                @click="getAllSubLedger(ledger)"
                style="cursor: pointer"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </td>
            <td>{{ index + 1 }}</td>
            <td>{{ ledger.name }}</td>
            <td>{{ ledger.payment_type }}</td>
            <td>{{ ledger.balance }}</td>
            <td>
              <a href="javascript:void(0)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  height="23"
                  width="34"
                  style="color: black"
                  v-on:click="getTheDotDecide(index)"
                >
                  <path
                    d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
                  />
                </svg>
              </a>
              <!-- Card Start -->

              <div
                class="card customAction"
                v-if="showDot === index && showDotBool === true"
              >
                <div class="card-body">
                  <p
                    style="color: black; cursor: pointer"
                    @click="createSubLedger(ledger)"
                  >
                    Create Sub Ledger
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      height="23"
                      width="34"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </p>
                  <p
                    style="cursor: pointer"
                    @click="editParentLedger(ledger, index)"
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
                    @click="deleteParentLedger(ledger.id, index)"
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
              <!-- Card End -->
            </td>
          </tr>
          <button v-if="ledgerDataFailed" @click="getTheLedgerData()">
            Try Again
          </button>
        </tbody>
      </table>
    </div>
    <div
      class="modal fade"
      id="ledgerModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      data-backdrop="static"
      data-keyboard="false"
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
              <h1 v-if="urlDecider === 'ledger-add'">Create A New Ledger</h1>
              <h1 v-else-if="urlDecider === 'ledger-edit'">Edit a Ledger</h1>
              <h1 v-else>Create a Sub Ledger</h1>
              <div
                class="form-group"
                :class="{
                  'has-error':
                    errors.has('serverError.name') || serverError.name != '',
                }"
              >
                <input
                  id="name"
                  v-model="ledgerForm.name"
                  v-validate="'required'"
                  data-vv-delay="20"
                  name="name"
                  type="text"
                  :class="{
                    'form-control': true,
                    'is-invalid': errors.has('name'),
                  }"
                  placeholder="Enter Ledger Name"
                />
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
                <select
                  v-model="ledgerForm.payment_type"
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
                    errors.has('serverError.balance') ||
                    serverError.balance != '',
                }"
              >
                <input
                  v-model="ledgerForm.balance"
                  v-validate="'required|numeric'"
                  data-vv-delay="20"
                  name="balance"
                  type="text"
                  :class="{
                    'form-control': true,
                    'is-invalid': errors.has('balance'),
                  }"
                  placeholder="Balance"
                />
                <span
                  v-show="errors.has('balance')"
                  class="text-danger text-center"
                  >{{ errors.first("balance") }}</span
                >
                <span
                  v-show="serverError.balance != ''"
                  class="help text-danger"
                  >{{ serverError.balance }}</span
                >
              </div>

              <div
                class="form-group"
                :class="{
                  'has-error':
                    errors.has('serverError.admission_check') ||
                    serverError.admission_check != '',
                }"
                v-if="
                  urlDecider === 'ledger-add' || urlDecider === 'ledger-edit'
                "
              >
                <input
                  v-model="ledgerForm.admission_check"
                  type="checkbox"
                  data-vv-delay="20"
                  name="admission_check"
                  :class="{
                    'form-control': true,
                    'is-invalid': errors.has('admission_check'),
                  }"
                  placeholder="Balance"
                />
                <label>Only check for Admission Ledger</label>
                <span
                  v-show="errors.has('admission_check')"
                  class="text-danger text-center"
                  >{{ errors.first("admission_check") }}</span
                >
                <span
                  v-show="serverError.admission_check != ''"
                  class="help text-danger"
                  >{{ serverError.admission_check }}</span
                >
              </div>

              <button type="submit" class="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="subLedgerModal"
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
            <div class="spinner-border text-info" role="status" v-if="loader">
              <span class="sr-only">Loading...</span>
            </div>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col ">Id</th>
                  <th scope="col">Ledger Name</th>
                  <th scope="col">Credit/Debit</th>
                  <th scope="col">Balance</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(ledger, index) in subLedgerData" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ ledger.name }}</td>
                  <td>{{ ledger.payment_type }}</td>
                  <td>{{ ledger.balance }}</td>
                  <td>
                    <a
                      href="javascript:void(0)"
                      @click="showSubLedgerDot(index)"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        height="23"
                        width="34"
                        style="color: black"
                      >
                        <path
                          d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
                        />
                      </svg>
                    </a>
                  </td>

                  <div
                    class="card customAction1"
                    v-if="showSubDot === index && showSubDotBool === true"
                  >
                    <div class="card-body">
                      <p
                        style="cursor: pointer"
                        @click="editChildLedger(ledger, index)"
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
                        @click="deleteChildLedger(ledger, index)"
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
                </tr>
                <button v-if="ledgerDataFailed" @click="getTheLedgerData()">
                  Try Again
                </button>
              </tbody>
            </table>
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
      ledgerData: [],
      subLedgerData: [],
      ledgerDataFailed: false,
      channelId: "",
      parentAddLedgeUrl: "/api/channel/add/ledger/",
      parentEditLedgeUrl: "/api/channel/edit/ledger/",
      childAddLedgerUrl: "/api/channel/child/add/ledger/",
      parentEditLedgerIndex: "",
      childEditLegderIndex: "",
      urlDecider: "",
      mainUrl: "",
      ledgerForm: {
        name: "",
        payment_type: "credit",
        balance: "",
        admission_check: false,
      },
      serverError: {
        name: "",
        payment_type: "",
        balance: "",
        admission_check: false,
      },
      showDot: null,
      showDotBool: false,
      cashbookUrl: "",
      admissionUrl: "",
      loader: true,
      showSubDot: null,
      showSubDotBool: false,
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
    this.getTheLedgerData();
    this.getTheAdmissionCashbookUrl();
  },
  mounted() {},
  methods: {
    showSubLedgerDot(index) {
      this.showSubDot = index;
      this.showSubDotBool = !this.showSubDotBool;
    },
    getTheAdmissionCashbookUrl() {
      let url = location.pathname.split("/");
      let url2 = location.pathname.split("/");
      url[url.length - 1] = "admission";
      url2[url2.length - 1] = "cashbook";
      this.admissionUrl = location.origin + url.join("/");
      this.cashbookUrl = location.origin + url2.join("/");
    },
    createNewLedger() {
      this.urlDecider = "ledger-add";
      this.mainUrl = this.parentAddLedgeUrl + this.channelId;
      $("#ledgerModal").modal("show");
    },
    getTheLedgerData() {
      axios
        .get("/api/channel/get/ledger/data")
        .then((response) => {
          this.ledgerDataFailed = false;
          this.ledgerData = response.data.data;
        })
        .catch((errors) => {
          Vue.toasted.error("Something went wrong", {
            position: "top-center",
            duration: 5000,
          });
          this.ledgerDataFailed = true;
        });
    },
    deleteParentLedger(ledgerId, index) {
      axios
        .get("/api/channel/delete/parent/ledger/" + ledgerId)
        .then((response) => {
          if (response.data.msg) {
            this.ledgerData.splice(index, 1);
          }
        })
        .catch((errors) => {
          Vue.toasted.error("Something went wrong", {
            position: "top-center",
            duration: 5000,
          });
        });
    },
    deleteChildLedger(ledger, indexOfSubledger) {
      axios
        .get("/api/channel/delete/parent/ledger/" + ledger.id)
        .then((response) => {
          if (response.data.msg) {
            let index = this.ledgerData.indexOf(ledger);
            this.subLedgerData.splice(indexOfSubledger, 1);
            this.ledgerData.splice(index, 1);
          }
        })
        .catch((errors) => {
          Vue.toasted.error("Something went wrong", {
            position: "top-center",
            duration: 5000,
          });
        });
    },
    editParentLedger(ledger, index) {
      this.mainUrl = this.parentEditLedgeUrl + ledger.id;
      this.parentEditLedgerIndex = index;
      this.ledgerForm.name = ledger.name;
      this.ledgerForm.payment_type = ledger.payment_type;
      this.ledgerForm.balance = ledger.balance;
      this.urlDecider = "ledger-edit";
      $("#ledgerModal").modal("show");
    },
    editChildLedger(ledger, index) {
      this.mainUrl = this.parentEditLedgeUrl + ledger.id;
      this.parentEditLedgerIndex = this.ledgerData.indexOf(ledger);
      this.childEditLegderIndex = this.subLedgerData.indexOf(ledger);
      this.ledgerForm.name = ledger.name;
      this.ledgerForm.payment_type = ledger.payment_type;
      this.ledgerForm.balance = ledger.balance;
      this.urlDecider = "ledger-edit-child";
      $("#subLedgerModal").modal("hide");
      $("#ledgerModal").modal("show");
    },
    createSubLedger(ledger) {
      this.mainUrl = this.childAddLedgerUrl + this.channelId + "/" + ledger.id;
      this.urlDecider = "ledger-add-child";
      $("#ledgerModal").modal("show");
    },
    getAllSubLedger(ledger) {
      this.subLedgerData = [];
      axios
        .get("/api/channel/get/subledger/ledger/data/" + ledger.id)
        .then((response) => {
          this.loader = false;
          this.subLedgerData = response.data.data;
        })
        .catch((errors) => {
          Vue.toasted.error("Something went wrong", {
            position: "top-center",
            duration: 5000,
          });
        });
      //   this.ledgerData.forEach((element) => {
      //     if (ledger.id === parseInt(element.channel_accountant_ledger_id)) {
      //       this.subLedgerData.push(element);
      //     }
      //   });
      $("#subLedgerModal").modal("show");
    },
    submitForm() {
      this.$validator.validate().then((result) => {
        if (result) {
          axios
            .post(this.mainUrl, this.ledgerForm)
            .then((response) => {
              if (this.urlDecider === "ledger-edit-child") {
                if (response.data.msg === true) {
                  $("#ledgerModal").modal("hide");
                  Vue.toasted.success("Ledger is been edited", {
                    position: "top-center",
                    duration: 5000,
                  });
                  this.ledgerData[this.parentEditLedgerIndex].name =
                    response.data.data.name;
                  this.ledgerData[this.parentEditLedgerIndex].payment_type =
                    response.data.data.payment_type;
                  this.ledgerData[this.parentEditLedgerIndex].balance =
                    response.data.data.balance;

                  this.subLedgerData[this.childEditLegderIndex].name =
                    response.data.data.name;
                  this.subLedgerData[this.childEditLegderIndex].payment_type =
                    response.data.data.payment_type;
                  this.subLedgerData[this.childEditLegderIndex].balance =
                    response.data.data.balance;

                  this.ledgerForm.name = "";
                  this.ledgerForm.payment_type = "";
                  this.ledgerForm.balance = "";
                  $("#subLedgerModal").modal("show");
                }
              }
              if (this.urlDecider === "ledger-add-child") {
                if (response.data.message === true) {
                  $("#ledgerModal").modal("hide");
                  Vue.toasted.success("New Sub Ledger is been added", {
                    position: "top-center",
                    duration: 5000,
                  });
                  this.ledgerForm.name = "";
                  this.ledgerForm.payment_type = "";
                  this.ledgerForm.balance = "";
                }
              }
              if (this.urlDecider === "ledger-add") {
                if (response.data.message === true) {
                  $("#ledgerModal").modal("hide");
                  Vue.toasted.success("New Ledger is been added", {
                    position: "top-center",
                    duration: 5000,
                  });
                  this.ledgerData.push(response.data.data);
                  this.ledgerForm.name = "";
                  this.ledgerForm.payment_type = "";
                  this.ledgerForm.balance = "";
                }
              }
              if (this.urlDecider === "ledger-edit") {
                if (response.data.msg === true) {
                  $("#ledgerModal").modal("hide");
                  Vue.toasted.success("Ledger is been edited", {
                    position: "top-center",
                    duration: 5000,
                  });
                  this.ledgerData[this.parentEditLedgerIndex].name =
                    response.data.data.name;
                  this.ledgerData[this.parentEditLedgerIndex].payment_type =
                    response.data.data.payment_type;
                  this.ledgerData[this.parentEditLedgerIndex].balance =
                    response.data.data.balance;
                  this.ledgerForm.name = "";
                  this.ledgerForm.payment_type = "";
                  this.ledgerForm.balance = "";
                }
              }
            })
            .catch((errors) => {
              Vue.toasted.error("Something went wrong", {
                position: "top-center",
                duration: 5000,
              });
              if (errors.response.data.errors.name) {
                this.serverError.name = errors.response.data.errors.name[0];
              }
              if (errors.response.data.errors.payment_type) {
                this.serverError.payment_type =
                  errors.response.data.errors.payment_type[0];
              }
              if (errors.response.data.errors.balance) {
                this.serverError.balance =
                  errors.response.data.errors.balance[0];
              }
            });
        }
      });
    },
    getTheDotDecide(index) {
      this.showDot = index;
      this.showDotBool = !this.showDotBool;
    },
  },
};
</script>

