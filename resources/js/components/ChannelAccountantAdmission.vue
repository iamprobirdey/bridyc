<template>
  <div>
    <a :href="ledgerUrl" class="btn btn-secondary">Go to Ledger</a>
    <a :href="cashbookUrl" class="btn btn-primary">Go to Cashbook</a>
    <br />
    <br />
    <button class="btn btn-primary" @click="takeAdmission()">
      Take Admission
    </button>

    <table class="table">
      <thead>
        <tr>
          <th>#</th>
          <th scope="col">Admission Number</th>
          <th scope="col">Student Name</th>
          <th scope="col">Class</th>
          <th scope="col">Phone</th>
          <th scope="col">Category</th>
          <th scope="col">Total Balance</th>
          <th scope="col">Total Pending Balance</th>
          <th scope="col">Paid Balance</th>
          <th scope="col">Monthly Bill</th>
          <th scope="col">Receipt</th>
          <th scope="col">Official Details</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(admission, index) in admissionData" :key="index">
          <td>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              width="20"
              height="20"
              style="color: #1dbede"
            >
              <path
                fill-rule="evenodd"
                d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z"
                clip-rule="evenodd"
              />
            </svg>
            {{ index + 1 }}
          </td>
          <td>{{ admission.admission_number }}</td>
          <td>
            {{ admission.name }}
          </td>
          <td>
            {{ getTheProperStandard(admission.standard) }}
            <edit-class
              :channelid="channelId"
              :admission="admission"
              :index="index"
              @pass-admission-class-edit-data="getClassEditData"
            ></edit-class>
          </td>
          <td>
            <a :href="'tel:' + admission.phone"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                width="20"
                height="20"
                style="cursor: pointer"
              >
                <path
                  d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                />
                <path
                  d="M16.707 3.293a1 1 0 010 1.414L15.414 6l1.293 1.293a1 1 0 01-1.414 1.414L14 7.414l-1.293 1.293a1 1 0 11-1.414-1.414L12.586 6l-1.293-1.293a1 1 0 011.414-1.414L14 4.586l1.293-1.293a1 1 0 011.414 0z"
                /></svg
              >{{ admission.phone }}</a
            >
          </td>
          <td>{{ admission.category }}</td>
          <td>{{ admission.total_balance }}</td>
          <td>{{ admission.old_balance }}</td>
          <td>{{ admission.balance_taken }}</td>
          <td>
            <a :href="monthlyUrl + '/monthly/bill/' + admission.id">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                width="30"
                height="30"
                style="cursor: pointer; color: #c26925"
              >
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                <path
                  fill-rule="evenodd"
                  d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </td>
          <td>
            <a :href="reportUrl + '/receipt/' + admission.id">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                width="30"
                height="30"
                style="cursor: pointer; color: #31d6d3"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm2.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.207.293a1 1 0 00-1.414 0l-6 6a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414zM12.5 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </td>
          <td>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              width="30"
              height="30"
              style="cursor: pointer; color: #6626a3"
            >
              <path
                d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"
              />
            </svg>
          </td>
        </tr>
      </tbody>
    </table>

    <admission
      ref="childComponent"
      :channelid="channelId"
      @pass-admission-data-to-parent="getModalDataFromChild"
    ></admission>
    <school-session :channelid="channelId"></school-session>
  </div>
</template>

<script>
import admission from "./accountant/Admission.vue";
import SchoolSession from "./accountant/SchoolSession.vue";
import EditClass from "./accountant/EditClass.vue";

export default {
  data() {
    return {
      channelId: "",
      admission_decider: false,
      admissionData: [],
      classData: [],
      ledgerUrl: "",
      cashbookUrl: "",
      reportUrl: location.href,
      monthlyUrl: location.href,
    };
  },
  components: {
    admission,
    "school-session": SchoolSession,
    "edit-class": EditClass,
  },
  props: {
    channelid: {
      type: Number,
      default: null,
    },
  },
  created() {
    this.channelId = this.channelid;
    this.getAdmissionData();
    this.getClassData();
    this.getTheLedgerCashbookUrl();
  },
  mounted() {},
  methods: {
    getTheLedgerCashbookUrl() {
      let url = location.pathname.split("/");
      let url2 = location.pathname.split("/");
      url[url.length - 1] = "ledger";
      url2[url2.length - 1] = "cashbook";
      this.ledgerUrl = location.origin + url.join("/");
      this.cashbookUrl = location.origin + url2.join("/");
    },
    getClassData() {
      axios
        .get("/api/channel/get/accountant/class/admission-ledger/data")
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
    getAdmissionData() {
      axios
        .get("/api/channel/get/acccountant/admission/data/" + this.channelId)
        .then((response) => {
          this.admissionData = response.data.data;
          this.admissionData;
        })
        .catch((error) => {});
    },
    takeAdmission() {
      this.admission_decider = true;
      this.$refs.childComponent.openModal();
    },
    getModalDataFromChild(data) {
      this.admissionData.push(data[0]);
    },
    getClassEditData(index, data) {
      this.admissionData[index].standard = data[0].standard;
    },
    getTheProperStandard(standard) {
      let standardName = "";
      standard.forEach((element) => {
        if (element.current_class_state === "present") {
          standardName = element.accountclass.name;
        }
      });
      return standardName;
    },
  },
};
</script>
