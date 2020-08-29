<template>
    <div>
        <h2>We highly appreciate to give profile details of Schools principle</h2>
        <div v-if="genderVissionChecker">
            <button class="btn-primary" @click="editGenderAndVission()">Edit</button>
            <p>{{channelProfileData.gender}}</p>
            <p>{{channelProfileData.vission}}</p>
        </div>
    <form @submit.prevent="getFormData()" v-if="!genderVissionChecker">
      <div
        class="form-group"
        :class="{'has-error':errors.has('profileError') || profileError != ''}"
      >
        <label for="exampleInputEmail1">Your gender</label>

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
        <span v-show="errors.has('gender')" class="text-danger">
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
          class="form-group"
          :class="{'has-error': errors.has('vission') || profileError.vission != '' }"
        >
          <label >Your vission for your college</label>
          <input
            v-model="profileData.vission"
            v-validate="'required'"
            data-vv-delay="20"
            name="vission"
            type="text"
            :class="{'form-control': true, 'is-invalid': errors.has('vission') }"
            placeholder="Vission"
          />
          <i v-show="errors.has('vission')" class="is-invalid"></i>

          <span v-show="errors.has('vission')" class="text-danger">{{ errors.first('vission') }}</span>
          <span v-show="profileError.vission != ''" class="text-danger">{{ profileError.vission }}</span>
        </div>
      <button
        type="button"
        class="btn btn-success"
        @click="goBack()"
      >Go Back</button>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>

    <h2>
        Would would like to know your qualification
    </h2>
    <ul>
        <li v-for="(education,index) in channelProfileData.education" :key="education.id">

            <span>
                School name: {{education.school_name}}
                Degree : {{education.degree}}
                Field of study : {{education.field_of_study}}
                Start Date : {{education.start_date}}
                End Date : {{education.end_date}}
                Grade : {{education.grade}}
                Activity and Sociaty : {{education.activities_and_sociaties}}
                Description : {{education.description}}
            </span>
            <button class="btn-secondary" @click="editTheEducation(education,index)">edit</button>
        </li>
    </ul>

    <button class="btn-primary" @click="addEducation()">+</button>


    <!-- Modal -->

    <div class="modal fade" id="addEducation" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Add Education</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">

                <form @submit.prevent="getQualificationData()">

                    <div
                    class="form-group"
                    :class="{'has-error': errors.has('school_name') || qualificationError.school_name != '' }"
                    >
                    <label for="exampleInputEmail1">School name</label>
                    <input
                        v-model="qualificationData.school_name"
                        v-validate="'required'"
                        data-vv-delay="20"
                        name="school_name"
                        type="text"
                        :class="{'form-control': true, 'is-invalid': errors.has('school_name') }"
                        placeholder="Your school name"
                    />
                    <i v-show="errors.has('class')" class="is-invalid"></i>

                    <span v-show="errors.has('school_name')" class="text-danger">{{ errors.first('school_name') }}</span>
                    <span
                        v-show="qualificationError.school_name != ''"
                        class="text-danger"
                    >{{ qualificationError.school_name }}</span>
                    </div>

                        <div
                    class="form-group"
                    :class="{'has-error': errors.has('field_of_study') || qualificationError.field_of_study != '' }"
                    >
                    <label for="exampleInputEmail1">Field of study</label>
                    <input
                        v-model="qualificationData.field_of_study"
                        v-validate="'required'"
                        data-vv-delay="20"
                        name="field_of_study"
                        type="text"
                        :class="{'form-control': true, 'is-invalid': errors.has('field_of_study') }"
                        placeholder="Field of study"
                    />
                    <i v-show="errors.has('class')" class="is-invalid"></i>

                    <span v-show="errors.has('field_of_study')" class="text-danger">{{ errors.first('field_of_study') }}</span>
                    <span
                        v-show="qualificationError.field_of_study != ''"
                        class="text-danger"
                    >{{ qualificationError.field_of_study }}</span>
                    </div>

                        <div
                    class="form-group"
                    :class="{'has-error': errors.has('degree') || qualificationError.degree != '' }"
                    >
                    <label for="exampleInputEmail1">Degree</label>
                    <input
                        v-model="qualificationData.degree"
                        v-validate="'required'"
                        data-vv-delay="20"
                        name="degree"
                        type="text"
                        :class="{'form-control': true, 'is-invalid': errors.has('degree') }"
                        placeholder="Degree"
                    />
                    <i v-show="errors.has('class')" class="is-invalid"></i>

                    <span v-show="errors.has('degree')" class="text-danger">{{ errors.first('degree') }}</span>
                    <span
                        v-show="qualificationError.degree != ''"
                        class="text-danger"
                    >{{ qualificationError.degree }}</span>
                    </div>
                    <div
                    class="form-group"
                    :class="{'has-error': errors.has('start_date') || qualificationError.start_date != '' }"
                    >
                    <label for="exampleInputEmail1">Start date</label>
                    <input
                        v-model="qualificationData.start_date"
                        v-validate="'required'"
                        data-vv-delay="20"
                        name="start_date"
                        type="date"
                        :class="{'form-control': true, 'is-invalid': errors.has('start_date') }"
                        placeholder="Start Date"
                    />
                    <i v-show="errors.has('class')" class="is-invalid"></i>

                    <span v-show="errors.has('start_date')" class="text-danger">{{ errors.first('start_date') }}</span>
                    <span
                        v-show="qualificationError.start_date != ''"
                        class="text-danger"
                    >{{ qualificationError.start_date }}</span>
                    </div>
                    <div
                    class="form-group"
                    :class="{'has-error': errors.has('end_date') || qualificationError.end_date != '' }"
                    >
                    <label for="exampleInputEmail1">End date</label>
                    <input
                        v-model="qualificationData.end_date"
                        v-validate="'required'"
                        data-vv-delay="20"
                        name="end_date"
                        type="date"
                        :class="{'form-control': true, 'is-invalid': errors.has('end_date') }"
                        placeholder="End Date"
                    />
                    <i v-show="errors.has('class')" class="is-invalid"></i>

                    <span v-show="errors.has('end_date')" class="text-danger">{{ errors.first('end_date') }}</span>
                    <span
                        v-show="qualificationError.end_date != ''"
                        class="text-danger"
                    >{{ qualificationError.end_date }}</span>
                    </div>
                    <div
                    class="form-group"
                    :class="{'has-error': errors.has('grade') || qualificationError.grade != '' }"
                    >
                    <label for="exampleInputEmail1">Grade</label>
                    <input
                        v-model="qualificationData.grade"
                        v-validate="'required'"
                        data-vv-delay="20"
                        name="grade"
                        type="text"
                        :class="{'form-control': true, 'is-invalid': errors.has('grade') }"
                        placeholder="Grade"
                    />
                    <i v-show="errors.has('class')" class="is-invalid"></i>

                    <span v-show="errors.has('grade')" class="text-danger">{{ errors.first('grade') }}</span>
                    <span
                        v-show="qualificationError.grade != ''"
                        class="text-danger"
                    >{{ qualificationError.grade }}</span>
                    </div>
                    <div
                    class="form-group"
                    :class="{'has-error': errors.has('activities_and_sociaties') || qualificationError.activities_and_sociaties != '' }"
                    >
                    <label for="exampleInputEmail1">Activity and Sociaties</label>
                    <input
                        v-model="qualificationData.activities_and_sociaties"
                        v-validate="'required'"
                        data-vv-delay="20"
                        name="activities_and_sociaties"
                        type="text"
                        :class="{'form-control': true, 'is-invalid': errors.has('activities_and_sociaties') }"
                        placeholder="Activity and Sociaty"
                    />
                    <i v-show="errors.has('class')" class="is-invalid"></i>

                    <span v-show="errors.has('activities_and_sociaties')" class="text-danger">{{ errors.first('activities_and_sociaties') }}</span>
                    <span
                        v-show="qualificationError.activities_and_sociaties != ''"
                        class="text-danger"
                    >{{ qualificationError.activities_and_sociaties }}</span>
                    </div>
                    <div
                    class="form-group"
                    :class="{'has-error': errors.has('description') || qualificationError.description != '' }"
                    >
                    <label for="exampleInputEmail1">Description</label>
                    <input
                        v-model="qualificationData.description"
                        v-validate="'required'"
                        data-vv-delay="20"
                        name="description"
                        type="text"
                        :class="{'form-control': true, 'is-invalid': errors.has('description') }"
                        placeholder="Description"
                    />
                    <i v-show="errors.has('class')" class="is-invalid"></i>

                    <span v-show="errors.has('description')" class="text-danger">{{ errors.first('description') }}</span>
                    <span
                        v-show="qualificationError.description != ''"
                        class="text-danger"
                    >{{ qualificationError.description }}</span>
                    </div>
                <button type="submit" class="btn btn-primary">Submit</button>
                </form>

            </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            channelProfileData: [],
            genderVissionChecker: true,
            profileData: {
                'gender' :  '',
                'vission' : ''
            },
            qualificationData: {
                'school_name' : '',
                'degree' : '',
                'field_of_study' : '',
                'start_date' : '',
                'end_date' : '',
                'grade' : '',
                'activities_and_sociaties' : '',
                'description' : ''
            },
            profileError: {
                'gender' :  '',
                'vission' : ''
            },
            qualificationError: {
                'school_name' : '',
                'degree' : '',
                'field_of_study' : '',
                'start_date' : '',
                'end_date' : '',
                'grade' : '',
                'activities_and_sociaties' : '',
                'description' : ''
            },
            domainUrl: location.origin,
            educationPath: '',
            qualificationEditDataId: '',
            qualificationEditIndex: ''
        };
    },
    props: {
        user:{
            type : Object,
            default: null
        }
    },
    created(){
        this.channelProfileData = this.user;
        if(this.channelProfileData.gender == null) this.genderVissionChecker = false;
    },
    mounted(){

    },
    methods: {
        getFormData(){
            this.$validator.validate().then(result => {
                if (result) {
                    axios
                        .post(this.domainUrl+'/user/dashboard/api/gender/vission', this.profileData)
                        .then(response => {
                            if (response.data.message === true) {
                                Vue.toasted.success("Profile is updated", {
                                    position: "top-center",
                                    duration: 5000
                                });
                                this.channelProfileData.gender = this.profileData.gender;
                                this.channelProfileData.vission = this.profileData.vission;
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
        getQualificationData(){
             this.$validator.validate().then(result => {
                if (result) {
                    axios
                        .post(this.educationPath, this.qualificationData)
                        .then(response => {

                            if(response.data.message){
                                if(this.qualificationEditDataId == ''){
                                    this.channelProfileData.education.push(this.qualificationData);
                                }else{
                                    //this.channelProfileData.education.splice(this.qualificationEditIndex,1,response.data.user);
                                    this.channelProfileData.education.$set(this.qualificationEditIndex,response.data.user);

                                }
                            }
                            $('#addEducation').modal('hide');
                        })
                        .catch(errors => {
                            if (errors.response.data.errors.school_name) {
                                this.qualificationError.school_name =
                                errors.response.data.errors.school_name[0];
                            }
                            if (errors.response.data.errors.degree) {
                                this.qualificationError.degree =
                                errors.response.data.errors.degree[0];
                            }
                            if (errors.response.data.errors.field_of_study) {
                                this.qualificationError.field_of_study =
                                errors.response.data.errors.field_of_study[0];
                            }
                            if (errors.response.data.errors.start_date) {
                                this.qualificationError.start_date =
                                errors.response.data.errors.start_date[0];
                            }
                            if (errors.response.data.errors.end_date) {
                                this.qualificationError.end_date =
                                errors.response.data.errors.end_date[0];
                            }
                            if (errors.response.data.errors.grade) {
                                this.qualificationError.grade =
                                errors.response.data.errors.grade[0];
                            }
                            if (errors.response.data.errors.activities_and_sociaties) {
                                this.qualificationError.activities_and_sociaties =
                                errors.response.data.errors.activities_and_sociaties[0];
                            }
                            if (errors.response.data.errors.description) {
                                this.qualificationError.description =
                                errors.response.data.errors.description[0];
                            }
                        });
                }
            });
        },
        goBack(){
            this.genderVissionChecker = true;
        },
        editGenderAndVission(){
            this.profileData.gender = this.channelProfileData.gender;
            this.profileData.vission = this.channelProfileData.vission;
            this.genderVissionChecker = false;
        },
        addEducation(){
            this.educationPath = '';
            this.educationPath = this.domainUrl+'/user/dashboard/api/add/education';
            this.qualificationEditDataId = '';
            this.emptyEducationForm();
            $('#addEducation').modal('show');
        },
        editTheEducation(education,index){
            this.qualificationData.school_name = education.school_name;
            this.qualificationData.degree = education.degree;
            this.qualificationData.field_of_study = education.field_of_study;
            this.qualificationData.start_date = education.start_date;
            this.qualificationData.end_date = education.end_date;
            this.qualificationData.grade = education.grade;
            this.qualificationData.activities_and_sociaties = education.activities_and_sociaties;
            this.qualificationData.description = education.description;
            this.qualificationEditDataId = education.id;
            this.educationPath = '';
            this.educationPath = this.domainUrl+'/user/dashboard/api/add/education/edit/'+education.id;
            this.qualificationEditIndex = index;
            $('#addEducation').modal('show');

        },
        emptyEducationForm(){
            this.qualificationData.school_name = '';
            this.qualificationData.degree = '';
            this.qualificationData.field_of_study = '';
            this.qualificationData.start_date = '';
            this.qualificationData.end_date = '';
            this.qualificationData.grade = '';
            this.qualificationData.activities_and_sociaties = '';
            this.qualificationData.description = '';
        }
    }
}
</script>
