<template>
  <div class="address">
    <div v-if="addressDataChecker" class="address-display">
       <div>
       <div class="row mx-0">
         <div class="col-sm-6">
            <strong>Qualification :</strong>
            <span>{{ userInformationData.standard.standard_name }}</span>
         </div>
         <div class="col-sm-6">
           <strong>Locality/Village :</strong>
           <span>{{ userInformationData.village.name }}</span>
         </div>
      </div>
      <div class="row mx-0">
           <div class="col-sm-6">
               <strong>District :</strong>
              <span>{{ userInformationData.district.name }}</span>
            </div>
      
           <div class="col-sm-6">
                <strong>State :</strong>
                <span>{{ userInformationData.state.name }}</span> 
           </div>
      </div>

      <button class="btn edit-btn" @click="editAddress()" data-toggle="tooltip" title="Edit"><i class="fa fa-pencil" aria-hidden="true"></i></button>
    </div>
    </div>
    <div v-if="!addressDataChecker">
      <form @submit.prevent="addressForm()">
        <div
          class="form-group row mx-0 mx-lg-5"
          :class="{
            'has-error': errors.has('state') || serverErrors.state_id != '',
          }"
        >
          <label col="col-sm-3 col-form-label">STATE:</label>
          <select
            class="form-control col-sm-9 ml-auto"
            v-model="userFormData.state_id"
            name="state"
            v-validate="'required'"
          >
            <option value>Select State</option>

            <option
              v-for="state in statesData"
              :key="state.id"
              :value="state.id"
            >
              {{ state.name }}
            </option>
          </select>
          <i v-show="errors.has('state')" class="is-invalid"></i>

          <span v-show="errors.has('state')" class="text-danger text-center">{{
            errors.first("state")
          }}</span>
          <span
            v-show="serverErrors.state_id != ''"
            class="text-danger text-center"
            >{{ serverErrors.state_id }}</span
          >
        </div>

        <div
          class="form-group row mx-0 mx-lg-5"
          :class="{
            'has-error':
              errors.has('district') || serverErrors.district_id != '',
          }"
        >
          <label col="col-sm-3 col-form-label">DISTRICT:</label>
          <select
            v-model="userFormData.district_id"
            class="form-control col-sm-9 ml-auto"
            name="district"
            v-validate="'required'"
          >
            <option value>Select District</option>

            <option
              v-for="district in districtsData"
              :key="district.id"
              :value="district.id"
            >
              {{ district.name }}
            </option>
          </select>
          <i v-show="errors.has('district')" class="is-invalid"></i>

          <span
            v-show="errors.has('district')"
            class="text-danger text-center"
            >{{ errors.first("district") }}</span
          >
          <span
            v-show="serverErrors.district_id != ''"
            class="text-danger text-center"
            >{{ serverErrors.district_id }}</span
          >
        </div>

        <div
          class="form-group row mx-0 mx-lg-5"
          :class="{
            'has-error': errors.has('village') || serverErrors.village_id != '',
          }"
        >
          <label col="col-sm-3 col-form-label">LOCALITY:</label>
          <select
            v-model="userFormData.village_id"
            class="form-control col-sm-9 ml-auto"
            name="village"
            v-validate="'required'"
          >
            <option value>Select Locality</option>

            <option
              v-for="village in villagesData"
              :key="village.id"
              :value="village.id"
            >
              {{ village.name }}
            </option>
          </select>
          <i v-show="errors.has('village')" class="is-invalid"></i>

          <span
            v-show="errors.has('village')"
            class="text-danger text-center"
            >{{ errors.first("village") }}</span
          >
          <span
            v-show="serverErrors.village_id != ''"
            class="text-danger text-center"
            >{{ serverErrors.village_id }}</span
          >
        </div>

        <div
          class="form-group row mx-0 mx-lg-5"
          :class="{
            'has-error':
              errors.has('standard') || serverErrors.standard_id != '',
          }"
        >
          <label col="col-sm-3 col-form-label">QUALIFICATION:</label>
          <select
            v-model="userFormData.standard_id"
            class="form-control col-sm-9 ml-auto"
            name="standard"
            v-validate="'required'"
          >
            <option value>Select Qualification</option>

            <option
              v-for="standard in standardsData"
              :key="standard.id"
              :value="standard.id"
            >
              {{ standard.standard_name }}
            </option>
          </select>
          <i v-show="errors.has('standard')" class="is-invalid"></i>

          <span
            v-show="errors.has('standard')"
            class="text-danger text-center"
            >{{ errors.first("standard") }}</span
          >
          <span
            v-show="serverErrors.standard_id != ''"
            class="text-danger text-center"
            >{{ serverErrors.standard_id }}</span
          >
        </div>
        <div class="ml-5">
          <button
            v-show="userInformationData != null"
            class="btn btn-warning"
            @click="cancelForm()"
          >
            Cancel
          </button>
          <button type="submit" class="btn btnsubmit mt-n2">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      channelsData: [],
      statesData: [],
      districtsData: [],
      villagesData: [],
      standardsData: [],
      userInformationData: {},
      userFormData: {
        state_id: "",
        district_id: "",
        village_id: "",
        standard_id: "",
      },
      serverErrors: {
        state_id: "",
        district_id: "",
        village_id: "",
        standard_id: "",
      },
      addressDataChecker: true,
      userId: "",
    };
  },
  props: {
    channels: {
      type: Array,
      default: null,
    },
    states: {
      type: Array,
      default: null,
    },
    districts: {
      type: Array,
      default: null,
    },
    villages: {
      type: Array,
      default: null,
    },
    standards: {
      type: Array,
      default: null,
    },
    userinformation: {
      type: Object,
      default: null,
    },
    id: {
      type: Number,
      default: null,
    },
  },
  created() {
    this.userId = this.id;
    this.channelsData = this.channels;
    this.statesData = this.states;
    this.districtsData = this.districts;
    this.villagesData = this.villages;
    this.standardsData = this.standards;
    this.userInformationData = this.userinformation;
    if (this.userInformationData === null) this.addressDataChecker = false;
    console.log(this.channelsData);
  },
  methods: {
    addressForm() {
      this.$validator.validate().then((result) => {
        if (result) {
          axios
            .post(
              "/api/profile/teacher/edit/address/" + this.userId,
              this.userFormData
            )
            .then((response) => {
              if (response.data.message === true) {
                Vue.toasted.success("Address is succefully created", {
                  position: "top-center",
                  duration: 5000,
                });
                this.userInformationData = {};
                this.userInformationData = response.data.userData;
                console.log(this.userInformationData);
                this.addressDataChecker = true;
              }
            })
            .catch((errors) => {
              Vue.toasted.error("Something went wrong", {
                position: "top-center",
                duration: 5000,
              });
              if (errors.response.data.errors.channel_id) {
                this.serverErrors.channel_id =
                  errors.response.data.errors.channel_id[0];
              }
              if (errors.response.data.errors.village_id) {
                this.serverErrors.village_id =
                  errors.response.data.errors.village_id[0];
              }
              if (errors.response.data.errors.district_id) {
                this.serverErrors.district_id =
                  errors.response.data.errors.district_id[0];
              }
              if (errors.response.data.errors.village_id) {
                this.serverErrors.village_id =
                  errors.response.data.errors.village_id[0];
              }
              if (errors.response.data.errors.standard_id) {
                this.serverErrors.standard_id =
                  errors.response.data.errors.standard_id[0];
              }
            });
        }
      });
    },
    editAddress() {
      this.addressDataChecker = false;
      this.userFormData.channel_id = this.userInformationData.channel.id;
      this.userFormData.state_id = this.userInformationData.state.id;
      this.userFormData.district_id = this.userInformationData.district.id;
      this.userFormData.village_id = this.userInformationData.village.id;
      this.userFormData.standard_id = this.userInformationData.standard.id;
    },
    cancelForm() {
      this.addressDataChecker = true;
    },
  },
};
</script>
