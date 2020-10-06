<template>
    <div class="container-fluid mx-0">
        <div  class="container princi-profile-display" v-if="genderVissionChecker">
            <div class="row mx-0">
              <div class="col-sm-4 mb-3">
            Gender: <button class="btn btn-info">{{channelProfileData.gender}}</button>
            </div>
            <div  class="col-sm-8 mission-message-display shadow mb-5 py-1">
            Mission: <p class="mt-3 mb-2">{{channelProfileData.vission}}</p>
            </div>
            </div>
            <div class="mission-message-display shadow px-3 py-1">
            Message from the Principal: <p class="mt-3 mb-2">{{channelProfileData.message}}</p>
            </div>
           
            <button class="btn btnsubmit rounded-0 mt-2" @click="editGenderAndVission()"><i class="fa fa-pencil" aria-hidden="true"></i> Edit</button>
           
        </div>
    <form @submit.prevent="getFormData()" v-if="!genderVissionChecker">
     <div class="row">
      <div
        class="form-group col-sm-4"
        :class="{'has-error':errors.has('profileError') || profileError != ''}"
      >
        <label for="exampleInputEmail1">Gender: </label>

            <select
                v-model="profileData.gender"
                class="form-control"
                name="gender"
                v-validate="'required'"
          >
            <option value>Select your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        <span v-show="errors.has('gender')" class="text-danger text-center">
          {{
          errors.first("gender")
          }}
        </span>
        <span v-show="profileError != ''" class="help is-danger">
          {{
          profileError.gender
          }}
        </span>
      </div>
         <div
          class="form-group col-sm-8"
          :class="{'has-error': errors.has('vission') || profileError.vission != '' }"
        >
          <label>Mission/Vision: </label>
          <input
            v-model="profileData.vission"
            v-validate="'required'"
            data-vv-delay="20"
            name="vission"
            type="text"
            :class="{'form-control': true, 'is-invalid': errors.has('vission') }"
            placeholder="Mission and vision of your institute"
          />
          <i v-show="errors.has('vission')" class="is-invalid"></i>

          <span v-show="errors.has('vission')" class="text-danger text-center">{{ errors.first('vission') }}</span>
          <span v-show="profileError.vission != ''" class="text-danger text-center">{{ profileError.vission }}</span>
        </div>
        </div>

              <div
          class="form-group"
          :class="{'has-error': errors.has('message') || profileError.message != '' }"
        >
          <label>Principal's Message: </label>
          <textarea
            v-model="profileData.message"
            v-validate="'required'"
            data-vv-delay="20"
            name="message"
            type="text"
            rows="5"
            :class="{'form-control': true, 'is-invalid': errors.has('message') }"
            placeholder="Write a Message to the visitors/students"
          />
          <i v-show="errors.has('message')" class="is-invalid"></i>

          <span v-show="errors.has('message')" class="text-danger text-center">{{ errors.first('message') }}</span>
          <span v-show="profileError.message != ''" class="text-danger text-center">{{ profileError.message }}</span>
        </div>
         <button type="button" class="btn btn-success" @click="goBack()">Back</button>
      <button type="submit" class="btn btnsubmit mt-n2">Submit</button>
    </form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            channelProfileData : [],
            genderVissionChecker: true,
            profileData: {
                'gender' :  '',
                'vission' : '',
                'message' : ''
            },
            profileError: {
                'gender' :  '',
                'vission' : '',
                'message' : ''
            },
        };
    },
    props:{
        user : {
            type : Object,
            default : null
        }
    },
    created(){
        this.channelProfileData = this.user;
        if(this.channelProfileData.gender == null) this.genderVissionChecker = false;
    },
    mounted(){},
    methods:{
            getFormData(){
            this.$validator.validate().then(result => {
                console.log(result);
                if (result) {
                    axios
                        .post('/api/gender/vission', this.profileData)
                        .then(response => {
                            if (response.data.message === true) {
                                Vue.toasted.success("Profile is updated", {
                                    position: "top-center",
                                    duration: 5000
                                });
                                this.channelProfileData.gender = this.profileData.gender;
                                this.channelProfileData.vission = this.profileData.vission;
                                this.channelProfileData.message = this.profileData.message;
                                this.genderVissionChecker = true;
                            }
                        })
                        .catch(errors => {
                             Vue.toasted.error("Something went wrong", {
                                    position: "top-center",
                                    duration: 5000
                            });
                              if (errors.response.data.errors.gender) {
                                    this.profileError.gender =
                                    errors.response.data.errors.gender[0];
                                }
                                  if (errors.response.data.errors.vission) {
                                    this.profileError.vission =
                                    errors.response.data.errors.vission[0];
                                }
                        });
                }
            });
        },
        editGenderAndVission(){
            this.profileData.gender = this.channelProfileData.gender;
            this.profileData.vission = this.channelProfileData.vission;
            this.genderVissionChecker = false;
        },
    }
}
</script>
