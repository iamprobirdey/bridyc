<template>
    <div>

        <div v-if="addressDataChecker">
            <h3>Your School name: <span>{{userInformationData.channel.title}}</span></h3>
            <h3>Your state: <span>{{userInformationData.state.name}}</span></h3>
            <h3>Your District: <span>{{userInformationData.district.name}}</span></h3>
            <h3>Your Village: <span>{{userInformationData.village.name}}</span></h3>
            <h3>Your Standard: <span>{{userInformationData.standard.standard_name}}</span></h3>
            <button class="btn btn-primary" @click="editAddress()">Edit</button>
        </div>
        <div v-if="!addressDataChecker">
            <form @submit.prevent="addressForm()">
             <div
                class="form-group" :class="{'has-error': errors.has('channel') || serverErrors.channel_id != '' }"
            >
            <label>Channel</label>
            <select
              v-model="userFormData.channel_id"
              class="form-control"
              name="channel"
              v-validate="'required'"
            >
              <option value>Select Schools</option>

              <option
                v-for="channel in channelsData"
                :key="channel.id"
                :value="channel.id"
              >{{channel.title}}</option>
            </select>
            <i v-show="errors.has('channel')" class="is-invalid"></i>

            <span v-show="errors.has('channel')" class="text-danger">{{ errors.first('channel') }}</span>
            <span
              v-show="serverErrors.channel_id != ''"
              class="text-danger"
            >{{ serverErrors.channel_id }}</span>
          </div>

            <div
                class="form-group" :class="{'has-error': errors.has('state') || serverErrors.state_id != '' }"
            >
            <label>State</label>
            <select
              v-model="userFormData.state_id"
              class="form-control"
              name="state"
              v-validate="'required'"
            >
              <option value>Select State</option>

              <option
                v-for="state in statesData"
                :key="state.id"
                :value="state.id"
              >{{state.name}}</option>
            </select>
            <i v-show="errors.has('state')" class="is-invalid"></i>

            <span v-show="errors.has('state')" class="text-danger">{{ errors.first('state') }}</span>
            <span
              v-show="serverErrors.state_id != ''"
              class="text-danger"
            >{{ serverErrors.state_id }}</span>
          </div>

            <div
                class="form-group" :class="{'has-error': errors.has('district') || serverErrors.district_id != '' }"
            >
            <label>District</label>
            <select
              v-model="userFormData.district_id"
              class="form-control"
              name="district"
              v-validate="'required'"
            >
              <option value>Select district</option>

              <option
                v-for="district in districtsData"
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
                class="form-group" :class="{'has-error': errors.has('village') || serverErrors.village_id != '' }"
            >
            <label>village</label>
            <select
              v-model="userFormData.village_id"
              class="form-control"
              name="village"
              v-validate="'required'"
            >
              <option value>Select village</option>

              <option
                v-for="village in villagesData"
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

          <div
                class="form-group" :class="{'has-error': errors.has('standard') || serverErrors.standard_id != '' }"
            >
            <label>standard</label>
            <select
              v-model="userFormData.standard_id"
              class="form-control"
              name="standard"
              v-validate="'required'"
            >
              <option value>Select standard</option>

              <option
                v-for="standard in standardsData"
                :key="standard.id"
                :value="standard.id"
              >{{standard.standard_name}}</option>
            </select>
            <i v-show="errors.has('standard')" class="is-invalid"></i>

            <span v-show="errors.has('standard')" class="text-danger">{{ errors.first('standard') }}</span>
            <span
              v-show="serverErrors.standard_id != ''"
              class="text-danger"
            >{{ serverErrors.standard_id }}</span>
          </div>
            <button v-show="userInformationData != null"  class="btn btn-danger" @click="cancelForm()">Cancel</button>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return{
            channelsData: [],
            statesData: [],
            districtsData : [],
            villagesData : [],
            standardsData : [],
            userInformationData: {},
            userFormData:{
                'channel_id' : '',
                'state_id' : '',
                'district_id' : '',
                'village_id' : '',
                'standard_id' : ''
            },
            serverErrors:{
                'channel_id' : '',
                'state_id' : '',
                'district_id' : '',
                'village_id' : '',
                'standard_id' : ''
            },
            addressDataChecker: true,
            userId: ''
        };
    },
    props:{
        channels: {
            type : Array,
            default : null
        },
        states: {
            type : Array,
            default : null
        },
        districts: {
            type : Array,
            default : null
        },
        villages: {
            type : Array,
            default : null
        },
        standards: {
            type : Array,
            default : null
        },
        userinformation:{
            type : Object,
            default : null
        },
        id: {
            type : Number,
            default : null
        }
    },
    created(){
        this.userId = this.id;
        this.channelsData = this.channels;
        this.statesData = this.states;
        this.districtsData = this.districts;
        this.villagesData = this.villages;
        this.standardsData = this.standards;
        this.userInformationData = this.userinformation;
        if(this.userInformationData === null) this.addressDataChecker = false;
    },
    methods:{
        addressForm(){
        this.$validator.validate().then(result => {
            if (result) {
            axios
                .post('/api/profile/edit/address/'+this.userId,this.userFormData)
                .then(response => {
                if (response.data.message === true) {
                    Vue.toasted.success("Address is succefully created", {
                    position: "top-center",
                    duration: 5000
                    });
                    this.userInformationData = {};
                    this.userInformationData = response.data.userData;
                    console.log(this.userInformationData);
                    this.addressDataChecker = true;
                }
                })
                .catch(errors => {
                     Vue.toasted.error("Something went wrong", {
                        position: "top-center",
                        duration: 5000
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
        editAddress(){
            this.addressDataChecker = false;
            this.userFormData.channel_id = this.userInformationData.channel.id;
            this.userFormData.state_id = this.userInformationData.state.id;
            this.userFormData.district_id = this.userInformationData.district.id;
            this.userFormData.village_id = this.userInformationData.village.id;
            this.userFormData.standard_id = this.userInformationData.standard.id;
        },
        cancelForm(){
            this.addressDataChecker = true;
        }
    },
}
</script>
