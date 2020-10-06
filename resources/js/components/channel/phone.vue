<template>
  <div>
    <div v-if="phoneVerificationChecker">
      <label col="col-sm-3 col-form-label">Phone: </label>
      <button class="btn btn-info">
        +91 {{ userData.phone }}
        <span v-if="userData.phone_verified != null" class="text-success text-center"
          >verified</span
        >
      </button>
      <!-- <button
        v-if="userData.phone_verified == null"
        class="btn btn-primary"
        @click="verifyPhoneNumber()"
      >
        Verify Your Number
      </button> -->
    </div>

    <div>
      <div v-if="!phoneVerificationChecker">
        <form @submit.prevent="phoneVerificationForm()">
          <div
            class="form-group row mx-5"
            :class="{
              'has-error':
                errors.has('serverError.phone') || serverError.phone != '',
            }"
          >
            <label col="col-sm-3 col-form-label">Phone: </label>
            <input
              class="col-sm-9 ml-4"
              v-model="phoneData.phone"
              v-validate="'required|numeric|max:10|min:10'"
              data-vv-delay="20"
              name="phone"
              type="text"
              :class="{
                'form-control': true,
                'is-invalid': errors.has('phone'),
              }"
              placeholder="Verify your phone"
            />
            <span
              v-show="errors.has('phone')"
              class="text-danger text-center"
              >{{ errors.first("phone") }}</span
            >
            <span
              v-show="serverError.phone != ''"
              class="text-danger text-center"
              >{{ serverError.phone }}</span
            >
          </div>
          <div class="ml-5">
            <button type="submit" class="btn btnsubmit mt-n2 rounded-0">Verify</button>
          </div>
        </form>
      </div>
      <div v-if="otpVerificationCheck">
        <form @submit.prevent="otpVerificationForm()">
          <div
            class="form-group row mx-5"
            :class="{
              'has-error':
                errors.has('serverOtpError.otp') || serverOtpError.otp != '',
            }"
          >
            <label col="col-sm-3 col-form-label">Phone: </label>
            <input
              class="col-sm-9 ml-4"
              v-model="otpData.otp"
              v-validate="'required|numeric|min:6|max:6'"
              data-vv-delay="20"
              name="otp"
              type="text"
              :class="{
                'form-control': true,
                'is-invalid': errors.has('otp'),
              }"
              placeholder="Verify your otp"
            />
            <span v-show="errors.has('otp')" class="text-danger text-center">{{
              errors.first("otp")
            }}</span>
            <span
              v-show="serverOtpError.otp != ''"
              class="help is-danger text-center"
              >{{ serverOtpError.otp }}</span
            >
          </div>
          <div class="ml-5">
            <button type="submit" class="btn btnsubmit mt-n2">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: {},
      phoneData: {
        phone: "",
      },
      serverError: {
        phone: "",
      },
      otpData: {
        otp: "",
      },
      serverOtpError: {
        otp: "",
      },
      phoneVerificationChecker: true,
      otpVerificationCheck: false,
    };
  },
  props: {
    user: {
      type: Object,
      default: null,
    },
  },
  created() {
    this.userData = this.user;
    if (this.userData.phone == null) {
      this.phoneVerificationChecker = false;
    }
  },
  mounted() {
    console.log("Phone Mounted");
  },
  methods: {
    phoneVerificationForm() {
      this.$validator.validate().then((result) => {
        if (result) {
          axios
            .post(
              "/api/edit/channel/phone/number/" + this.userData.id,
              this.phoneData
            )
            .then((response) => {
              if (response.data.message === true) {
                Vue.toasted.success("Phone number is succefully created", {
                  position: "top-center",
                  duration: 5000,
                });
                this.userData = response.data.user;
                this.phoneVerificationChecker = true;
              }
            })
            .catch((errors) => {
              Vue.toasted.error("Something went wrong", {
                position: "top-center",
                duration: 5000,
              });
              if (errors.response.data.errors.phone) {
                this.serverError.phone = errors.response.data.errors.phone[0];
              }
            });
        }
      });
    },
    otpVerificationForm() {},
    verifyPhoneNumber() {
      axios
        .post("/api/edit/channel/phone/number" + this.userData.id)
        .then(
          (response) => {
            if (response.data.message === true) {
            }
          },
          (response) => {
            if (response.status === 422) {
            }
          }
        )
        .catch((errors) => {
          Vue.toasted.error("Something went wrong", {
            position: "top-center",
            duration: 5000,
          });
        });
    },
  },
};
</script>
