<template>
  <div class="shadow-sm">
    <div class="table-responsive table--no-card">
      <div
        class="d-sm-flex align-items-center justify-content-between mb-4 m-2"
      >
        <select
          class="btn btn-outline-primary btn-sm"
          name="usertype"
          v-model="district"
          @change="OnDataChange"
        >
          <option
            v-for="(district, index) in districtData"
            :key="index"
            :value="district.id"
          >
            {{ district.name }}
          </option>
        </select>
        <a
          class="btn btn-outline-primary btn-sm"
          href="javascript:void(0)"
          @click="getChannelData()"
          >Clear</a
        >
      </div>

      <table class="table t-text table-hover table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">District</th>
            <th scope="col">Expense</th>
            <th scope="col">Income</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(channel, index) in channelsData" :key="index">
            <th scope="row">{{ channel.title }}</th>
            <th>{{ channel.district.name }}</th>
            <th v-if="channel.expense_income.length > 0">
              {{ channel.expense_income[0].expense }}
              <a @click="getTheExpense(channel)" href="javascript:void(0)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  height="20"
                  margin-botton="12"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </a>
            </th>
            <th v-else>-</th>
            <th v-if="channel.expense_income.length > 0">
              {{ channel.expense_income[0].income }}
              <a @click="getTheIncome(channel)" href="javascript:void(0)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  height="20"
                  margin-botton="12"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </a>
            </th>
            <th v-else>-</th>
          </tr>
        </tbody>
      </table>
    </div>

    <div
      class="modal fade"
      id="charts"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content modal-lg">
          <div class="modal-body" style="left:-38px">
            <div class="container-fluid">
              <expense
                width="500"
                height="350"
                type="bar"
                :options="chartOptions"
                :series="series"
              ></expense>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
export default {
  data() {
    return {
      channelsData: {},
      districtData: {},
      district: "1",
      chartOptions: {
        chart: {
          id: "basic-bar",
        },
        // xaxis: {
        //   categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        // },
        xaxis: {
          type: "category",
          categories: [],
          labels: {
            show: true,
            rotate: -45,
            rotateAlways: false,
            hideOverlappingLabels: true,
            showDuplicates: false,
            trim: false,
            minHeight: undefined,
            maxHeight: 120,
            style: {
              colors: [],
              fontSize: "12px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 400,
              cssClass: "apexcharts-xaxis-label",
            },
            offsetX: 0,
            offsetY: 0,
            format: undefined,
            formatter: undefined,
            datetimeUTC: true,
            datetimeFormatter: {
              year: "yyyy",
              month: "MMM 'yy",
              day: "dd MMM",
              hour: "HH:mm",
            },
          },
          axisBorder: {
            show: true,
            color: "#78909C",
            height: 1,
            width: "100%",
            offsetX: 0,
            offsetY: 0,
          },
          axisTicks: {
            show: true,
            borderType: "solid",
            color: "#78909C",
            height: 6,
            offsetX: 0,
            offsetY: 0,
          },
          tickAmount: undefined,
          tickPlacement: "between",
          min: undefined,
          max: undefined,
          range: undefined,
          floating: false,
          position: "bottom",
          title: {
            text: undefined,
            offsetX: 0,
            offsetY: 0,
            style: {
              color: undefined,
              fontSize: "12px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 600,
              cssClass: "apexcharts-xaxis-title",
            },
          },
          crosshairs: {
            show: true,
            width: 1,
            position: "back",
            opacity: 0.9,
            stroke: {
              color: "#b6b6b6",
              width: 0,
              dashArray: 0,
            },
            fill: {
              type: "solid",
              color: "#B1B9C4",
              gradient: {
                colorFrom: "#D8E3F0",
                colorTo: "#BED1E6",
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5,
              },
            },
            dropShadow: {
              enabled: false,
              top: 0,
              left: 0,
              blur: 1,
              opacity: 0.4,
            },
          },
          tooltip: {
            enabled: true,
            formatter: undefined,
            offsetY: 0,
            style: {
              fontSize: 0,
              fontFamily: 0,
            },
          },
        },
        yaxis: {
          min: 0,
          max: 100,
        },
      },
      series: [
        {
          name: "expense",
          data: [],
        },
      ],
    };
  },
  created() {
    this.getChannelData();
  },
  mounted() {},
  methods: {
    OnDataChange() {
      console.log("/api/get/supervisor/channel/data/" + this.district);
      axios
        .get("/api/get/supervisor/channel/data/" + this.district)
        .then((response) => {
          this.channelsData = response.data.channels;
        })
        .catch((error) => {
          Vue.toasted.error("Something went wrong", {
            position: "top-center",
            duration: 5000,
          });
        });
    },
    getChannelData() {
      axios
        .get("/api/get/supervisor/channel/data")
        .then((response) => {
          this.channelsData = response.data.channels;
          this.districtData = response.data.districts;
        })
        .catch((error) => {
          Vue.toasted.error("Something went wrong", {
            position: "top-center",
            duration: 5000,
          });
        });
    },
    getTheExpense(channel) {
      let expenseData = [];
      channel.expense_income.forEach((element) => {
        expenseData.push(element.expense);
      });
      this.series[0].data = expenseData;
      $("#charts").modal("show");
    },
    getTheIncome(channel) {
      let incomeData = [];
      channel.expense_income.forEach((element) => {
        incomeData.push(element.income);
      });
      this.series[0].data = incomeData;
      $("#charts").modal("show");
    },
  },
  components: {
    expense: VueApexCharts,
  },
};
</script>

