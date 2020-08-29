<template>
  <div>
    <div v-if="verificationStatus === true && userData === 1">
      <h2>
        <span class="text-danger">Your data is under verification</span>
      </h2>
    </div>
    <div v-if="userData === 3 && verificationStatus === true">
      <h2>
        <span class="text-danger">You are blocked by Admin</span>
      </h2>
    </div>
    <div v-if="verificationStatus === false">
      <div>

        <form @submit.prevent="validateForm()">
          <div
            class="form-group"
            :class="{'has-error': errors.has('title') || serverErrors.title != '' }"
          >
            <label for="exampleInputEmail1">Title</label>
            <input
              id="title"
              v-on:focus="serverErrors.title = ''"
              v-model="formData.title"
              v-validate="'required|alpha_spaces'"
              data-vv-delay="20"
              name="title"
              type="text"
              :class="{'form-control': true, 'is-invalid': errors.has('title') }"
              placeholder="title"
            />
            <i v-show="errors.has('title')" class="is-invalid"></i>

            <span v-show="errors.has('title')" class="text-danger">{{ errors.first('title') }}</span>
            <span v-show="serverErrors.title != ''" class="text-danger">{{ serverErrors.title }}</span>
          </div>

          <div
            class="form-group"
            :class="{'has-error': errors.has('udise') || serverErrors.udise != '' }"
          >
            <label for="exampleInputEmail1">udise</label>
            <input
              id="udise"
              v-on:focus="serverErrors.udise = ''"
              v-model="formData.udise"
              v-validate="'required'"
              data-vv-delay="20"
              name="udise"
              type="text"
              :class="{'form-control': true, 'is-invalid': errors.has('udise') }"
              placeholder="udise"
            />
            <i v-show="errors.has('udise')" class="is-invalid"></i>

            <span v-show="errors.has('udise')" class="text-danger">{{ errors.first('udise') }}</span>
            <span v-show="serverErrors.udise != ''" class="text-danger">{{ serverErrors.udise }}</span>
          </div>

          <div
            class="form-group"
            :class="{'has-error': errors.has('location') || serverErrors.location != '' }"
          >
            <label for="exampleInputEmail1">Location</label>
            <input
              id="location"
              v-on:focus="serverErrors.location = ''"
              v-model="formData.location"
              v-validate="'required'"
              data-vv-delay="20"
              name="location"
              type="text"
              :class="{'form-control': true, 'is-invalid': errors.has('location') }"
              placeholder="location"
            />
            <i v-show="errors.has('location')" class="is-invalid"></i>

            <span v-show="errors.has('location')" class="text-danger">{{ errors.first('location') }}</span>
            <span
              v-show="serverErrors.location != ''"
              class="text-danger"
            >{{ serverErrors.location }}</span>
          </div>

          <div
            class="form-group"
            :class="{'has-error': errors.has('ownership') || serverErrors.ownership != '' }"
          >
            <label>Ownership</label>
            <select
              v-model="formData.ownership"
              class="form-control"
              name="ownership"
              v-validate="'required'"
            >
              <option value>Select ownership</option>
              <option value="private">Private</option>
              <option value="government">Government</option>
            </select>
            <i v-show="errors.has('ownership')" class="is-invalid"></i>

            <span
              class="text-danger"
              v-show="errors.has('ownership')"
            >{{ errors.first('ownership') }}</span>
            <span
              v-show="serverErrors.ownership != ''"
              class="text-danger"
            >{{ serverErrors.ownership }}</span>
          </div>

          <div
            class="form-group"
            :class="{'has-error': errors.has('founded') || serverErrors.founded != '' }"
          >
            <label for="exampleInputEmail1">founded</label>
            <input
              id="founded"
              v-on:focus="serverErrors.founded = ''"
              v-model="formData.founded"
              v-validate="'required'"
              data-vv-delay="20"
              name="founded"
              type="date"
              :max="todaysDate"
              :class="{'form-control': true, 'is-invalid': errors.has('founded') }"
              placeholder="founded"
            />
            <i v-show="errors.has('founded')" class="is-invalid"></i>

            <span class="text-danger" v-show="errors.has('founded')">{{ errors.first('founded') }}</span>
            <span v-show="serverErrors.founded != ''" class="text-danger">{{ serverErrors.founded }}</span>
          </div>

          <div
            class="form-group"
            :class="{'has-error': errors.has('pin') || serverErrors.pin != '' }"
          >
            <label for="exampleInputEmail1">pin</label>
            <input
              id="text"
              v-on:focus="serverErrors.pin = ''"
              v-model="formData.pin"
              v-validate="'required|numeric|min:6|max:6'"
              data-vv-delay="20"
              name="pin"
              type="text"
              :class="{'form-control': true, 'is-invalid': errors.has('pin') }"
              placeholder="pin"
            />
            <i v-show="errors.has('pin')" class="is-invalid"></i>

            <span class="text-danger" v-show="errors.has('pin')">{{ errors.first('pin') }}</span>
            <span v-show="serverErrors.pin != ''" class="text-danger">{{ serverErrors.pin }}</span>
          </div>

          <div
            class="form-group"
            :class="{'has-error': errors.has('gender') || serverErrors.gender != '' }"
          >
            <label for="exampleInputEmail1">Gender</label>
            <select
              v-model="formData.gender"
              class="form-control"
              name="gender"
              v-validate="'required'"
            >
              <option value>Select Gender</option>
              <option value="only_boys">Only Boys</option>
              <option value="only_girls">Only Girls</option>
              <option value="both">Both Girls and boys</option>
            </select>
            <i v-show="errors.has('gender')" class="is-invalid"></i>

            <span class="text-danger" v-show="errors.has('gender')">{{ errors.first('gender') }}</span>
            <span v-show="serverErrors.gender != ''" class="text-danger">{{ serverErrors.gender }}</span>
          </div>

          <div
            class="form-group"
            :class="{'has-error': errors.has('language') || serverErrors.language_id != '' }"
          >
            <label>Select Institute Medium</label>

            <select
              v-model="formData.language_id"
              class="form-control"
              name="language"
              v-validate="'required'"
            >
              <option value>Select language</option>
              <option
                v-for="language in languages"
                :key="language.id"
                :value="language.id"
              >{{language.name}}</option>
            </select>
            <i v-show="errors.has('language')" class="is-invalid"></i>

            <span v-show="errors.has('language')" class="text-danger">{{ errors.first('language') }}</span>
            <span
              v-show="serverErrors.language_id != ''"
              class="text-danger"
            >{{ serverErrors.language_id }}</span>
          </div>

          <div
            class="form-group"
            :class="{'has-error': errors.has('state') || serverErrors.state_id != '' }"
          >
            <label>Select State</label>

            <select
              v-model="formData.state_id"
              class="form-control"
              name="state"
              v-validate="'required'"
            >
              <option value>Select State</option>
              <option v-for="state in placesData" :key="state.id" :value="state.id">{{state.name}}</option>
            </select>
            <i v-show="errors.has('state')" class="is-invalid"></i>

            <span v-show="errors.has('state')" class="text-danger">{{ errors.first('state') }}</span>
            <span
              v-show="serverErrors.state_id != ''"
              class="text-danger"
            >{{ serverErrors.state_id }}</span>
          </div>

          <div
            class="form-group"
            :class="{'has-error': errors.has('district') || serverErrors.district_id != '' }"
            v-if="districtStatusComputed"
          >
            <label>Select Dis</label>
            <select
              v-model="formData.district_id"
              class="form-control"
              name="district"
              v-validate="'required'"
            >
              <option value>Select district</option>

              <option
                v-for="district in districtData[0]"
                :key="district.id"
                :value="district.id"
              >{{district.name}}</option>
            </select>
            <i v-show="errors.has('district')" class="is-invalid"></i>

            <span v-show="errors.has('district')" class="text-danger">{{ errors.first('district') }}</span>
            <span
              v-show="serverErrors.district_id != ''"
              class="text-danger"
            >{{ serverErrors.district_id }}</span>
          </div>

          <div
            class="form-group"
            :class="{'has-error': errors.has('village') || serverErrors.village_id != '' }"
            v-if="villageStatusComputed"
          >
            <label>Select Village</label>
            <select
              v-model="formData.village_id"
              class="form-control"
              name="village"
              v-validate="'required'"
            >
              <option value>Select village</option>

              <option
                v-for="village in villageData[0]"
                :key="village.id"
                :value="village.id"
              >{{village.name}}</option>
            </select>
            <i v-show="errors.has('village')" class="is-invalid"></i>

            <span v-show="errors.has('village')" class="text-danger">{{ errors.first('village') }}</span>
            <span
              v-show="serverErrors.village_id != ''"
              class="text-danger"
            >{{ serverErrors.village_id }}</span>
          </div>
            <div v-if="wait" class="spinner-border text-primary" role="status">
                <span class="sr-only">Loading...</span>
            </div>
          <button v-if="wait === false" type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      verificationStatus: false,
      placesData: [],
      userData: 0,
      languagesData: [],
      districtData: [],
      villageData: [],
      authData: {},
      formData: {
        state_id: "",
        district_id: "",
        village_id: "",
        language_id: "",
        title: "",
        udise: "",
        location: "",
        ownership: "",
        founded: "",
        pin: "",
        gender: ""
      },
      serverErrors: {
        state_id: "",
        district_id: "",
        village_id: "",
        language_id: "",
        title: "",
        udise: "",
        location: "",
        ownership: "",
        founded: "",
        pin: "",
        gender: ""
      },
      wait: false,
      todaysDate : ''
    };
  },
  props: {
    places: {
      type: Array,
      default: null
    },
    user: {
      type: Object,
      default: null
    },
    languages: {
      type: Array,
      default: null
    },
    auth: {
        type: Object,
        default: null
    },
    date: {
        type: String,
        default : null
    }
  },
  computed: {
    districtStatusComputed: function() {
      if (this.formData.state_id != "") {
        this.districtData = [];
        this.placesData.filter(item => {
          if (item.id === this.formData.state_id) {
            this.districtData.push(item.district);
          }
        });
        return true;
      }
      return false;
    },
    villageStatusComputed: function() {
      if (this.formData.state_id != "" && this.formData.district_id != "") {
        this.villageData = [];
        this.districtData[0].filter(item => {
          if (item.id === this.formData.district_id) {
            this.villageData.push(item.village);
          }
        });
        return true;
      }
      return false;
    }
  },
  created(){
      this.placesData = this.places;
      if(this.user != null)this.userData = this.user.status;
      if(this.userData === 1 || this.userData === 3) this.verificationStatus = true;
      this.languagesData = this.languages;
      this.authData = this.auth;
      this.getDate();
  },
  methods: {
    getDate(){
        this.todaysDate  = this.date;
    },
    validateForm() {
        this.wait = true;
      this.$validator.validate().then(result => {
        if (result) {
          axios
            .post("api/verification", this.formData)
            .then(response => {
              if (response.status === 200) {
                  if(response.data.message === 'Successful'){
                      this.verificationStatus = true;
                      this.userData = 1;
                      Vue.toasted.success("Data is successfully submited", {
                        position: "top-center",
                        duration: 5000
                      });
                  }
                  if(response.data.message === 'failed'){
                      this.wait = false;
                      Vue.toasted.error("Something went wrong", {
                        position: "top-center",
                        duration: 5000
                      });
                  }
              }
            })
            .catch(errors => {
              if (errors.response.data.errors.state_id) {
                this.serverErrors.state_id =
                  errors.response.data.errors.state_id[0];
              }
              if (errors.response.data.errors.district_id) {
                this.serverErrors.district_id =
                  errors.response.data.errors.district_id[0];
              }
              if (errors.response.data.errors.village) {
                this.serverErrors.village =
                  errors.response.data.errors.village[0];
              }
              if (errors.response.data.errors.language_id) {
                this.serverErrors.language_id =
                  errors.response.data.errors.language_id[0];
              }
              if (errors.response.data.errors.title) {
                this.serverErrors.title = errors.response.data.errors.title[0];
              }
              if (errors.response.data.errors.udies) {
                this.serverErrors.udies = errors.response.data.errors.udies[0];
              }
              if (errors.response.data.errors.location) {
                this.serverErrors.location =
                  errors.response.data.errors.location[0];
              }
              if (errors.response.data.errors.ownership) {
                this.serverErrors.ownership =
                  errors.response.data.errors.ownership[0];
              }
              if (errors.response.data.errors.founded) {
                this.serverErrors.founded =
                  errors.response.data.errors.founded[0];
              }
              if (errors.response.data.errors.pin) {
                this.serverErrors.pin = errors.response.data.errors.pin[0];
              }
              if (errors.response.data.errors.gender) {
                this.serverErrors.gender =
                  errors.response.data.errors.gender[0];
              }
            });
        }
      });
    }
  }
};
</script>

<style>
</style>
