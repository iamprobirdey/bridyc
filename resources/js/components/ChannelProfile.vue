<template>
    <div>

        <h2 class="mx-sm-4 px-sm-2">Principal's Profile</h2>
        <br>
        <!-- <div v-if="genderVissionChecker" class="mx-sm-4 px-sm-2">
            <div class="row mx-sm-0">
                <div class="col-sm-3 d-flex">
                    Gender:
                     <div class="card gendercard ml-1">
                          <div class="card-body">{{channelProfileData.gender}}</div>
                     </div>
                </div>
            <br>
            <br>
               <div class="col-sm-9 d-flex">
                   Vision:
                    <div class="card visioncard shadow ml-2">
                         <div class="card-body">{{channelProfileData.vission}}</div>
                    </div>
               </div>
            </div>
            <br>
             <button class="btn btnadd" @click="editGenderAndVission()"><i class="fa fa-pencil" aria-hidden="true"></i> Edit</button>
        </div> -->
        <profile-gender :user="channelProfileData"></profile-gender>
    <form @submit.prevent="getFormData()" v-if="!genderVissionChecker">
      <div class="row">
      <div
        class="form-group col-sm-5 px-sm-5"
        :class="{'has-error':errors.has('profileError') || profileError != ''}"
      >
        <label for="exampleInputEmail1">Gender</label>

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
          class="form-group col-sm-7"
          :class="{'has-error': errors.has('vission') || profileError.vission != '' }"
        >
          <label>Vission</label>
          <textarea
            rows="2"
            v-model="profileData.vission"
            v-validate="'required'"
            class=""
            data-vv-delay="20"
            name="vission"
            type="text"
            :class="{'form-control': true, 'is-invalid': errors.has('vission') }"
            placeholder="What's your vission for the institute?"
          />
          <i v-show="errors.has('vission')" class="is-invalid"></i>

          <span v-show="errors.has('vission')" class="text-danger">{{ errors.first('vission') }}</span>
          <span v-show="profileError.vission != ''" class="text-danger">{{ profileError.vission }}</span>
        </div>
       </div>
       <div class="mx-sm-4 px-sm-2">
      <button
        type="button"
        class="btn btn-success"
        @click="goBack()"
      >Go Back</button>
      <button type="submit" class="btn btnsubmit px-3 mt-n2">Submit</button>
      </div>
    </form>
    <br>
   <div class="mx-sm-4 px-sm-2">
    <h4>
        Add more details(Recomended)
    </h4>

        <div class="mt-5" v-for="(education,index) in channelProfileData.education" :key="education.id">
            <div class="row mx-auto">
            <ul class="nav flex-column col-sm-6">
               <li>
                   <div class="card mx-sm-3 shadow profiledetails">
                       <div class="card-body mt-n2"><i class="fa fa-university" style="color:#003585;"  aria-hidden="true"></i> School : <strong>{{education.school_name}}</strong></div>
                    </div>
                   </li>
               <li>
                   <br>
                   <div class="card mx-sm-3 shadow profiledetails">
                       <div class="card-body mt-n2"><i class="fa fa-graduation-cap" style="color:#003585;"  aria-hidden="true"></i> Degree : {{education.degree}}</div>
                    </div>
                   </li>
               <li>
                   <br>
                   <div class="card mx-sm-3 shadow profiledetails">
                       <div class="card-body mt-n2"><i class="fa fa-book" style="color:#003585;" aria-hidden="true"></i> Field of study : {{education.field_of_study}}</div>
                    </div>
                   </li>
                   <br>
               <li>
                   <div class="card mx-sm-3 shadow profiledetails">
                       <div class="card-body mt-n2"><i class="fa fa-calendar-o" style="color:#003585;" aria-hidden="true"></i> Start Date : {{education.start_date}}</div>
                    </div>
                   </li>
                   <br>
               <li>
                   <div class="card mx-sm-3 shadow profiledetails">
                       <div class="card-body mt-n2"><i class="fa fa-calendar" style="color:#003585;" aria-hidden="true"></i> End Date : {{education.end_date}}</div>
                    </div>
                   </li>
                   <br>
               <li>
                   <div class="card mx-sm-3 shadow profiledetails">
                       <div class="card-body mt-n2"><i class="fa fa-percent" style="color:#003585;"  aria-hidden="true"></i> Grade : {{education.grade}}</div>
                    </div>
                   </li>
            </ul>

            <ul class="nav flex-column col-sm-6 mt-5 mt-sm-0">
               <li>
                   <div class="card mx-sm-3 shadow profiledetails" style="height:auto;">
                       <div class="card-body mt-n2">Activity and Sociaty : {{education.activities_and_sociaties}}</div>
                    </div>
                   </li>
                   <br>
               <li>
                   <div class="card mx-sm-3 shadow profiledetails">
                       <div class="card-body mt-n2">Description : {{education.description}}</div>
                    </div>
                    </li>
            </ul>
            </div>
            <button class="btn btnadd p-1" @click="editTheEducation(education,index)"><i class="fa fa-pencil" aria-hidden="true"></i></button>
        </div>


    <button class="btn btnadd p-1" @click="addEducation()">+</button>
   </div>

    <!-- Modal -->

    <div class="modal fade" id="addEducation" tabindex="-1" role="dialog" aria-labelledby="principalprofilemodal" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="principalprofilemodal" >Please fill in these details</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">

                <form @submit.prevent="getQualificationData()">
                    <h6 class="mb-3 mt-n2">Highest Education:</h6>

                    <div
                    class="form-group"
                    :class="{'has-error': errors.has('school_name') || qualificationError.school_name != '' }"
                    >
                    <label for="exampleInputEmail1">University</label>
                    <input
                        v-model="qualificationData.school_name"
                        v-validate="'required'"
                        data-vv-delay="20"
                        name="school_name"
                        type="text"
                        :class="{'form-control': true, 'is-invalid': errors.has('school_name') }"
                        placeholder="Your university name"
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
                        placeholder="Field of study(specialization)"
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
                        placeholder="Name of your degree"
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

                    <h6 class="mb-3 mt-5">Other Activities:</h6>

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
                <button type="submit" class="btn btnadd ml-0">Submit</button>
                </form>

            </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>

import PictureInput from "vue-picture-input";
import profileGender from './channel/profileGender.vue';



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
            qualificationEditIndex: '',
            //Image profile stuff
            imageData : '',
            imageError : '',
            imageChecker : false,
        };
    },
    props: {
        user:{
            type : Object,
            default: null
        }
    },
    components: {
        PictureInput,
        'profile-gender' : profileGender
    },
    created(){
        this.channelProfileData = this.user;
        if(this.channelProfileData.gender == null) this.genderVissionChecker = false;
        if(this.channelProfileData.avatar == null) this.imageChecker = true;
        console.log(this.channelProfileData);
    },
    mounted(){

    },
    methods: {

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
                                    this.channelProfileData.education.splice(this.qualificationEditIndex,1,response.data.user);
                                }
                                $('#addEducation').modal('hide');
                            }
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

        addEducation(){
            this.educationPath = '';
            this.educationPath = this.domainUrl+'/api/add/education';
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
            this.educationPath = this.domainUrl+'/api/add/education/edit/'+education.id;
            console.log(this.educationPath);
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
        },
         onChange(image) {
            if (this.$refs.pictureInput.image)
                this.imageData = this.$refs.pictureInput.image;
        },
        onImageSubmit(){
            if(this.imageData != ''){
                const formData = new FormData();
                formData.append("image", this.imageData);
                axios
                .post(this.domainUrl+'/api/profile/avatar', formData)
                .then(response => {
                    onUploadProgress: progressEvent => {
                    console.log(progressEvent.loaded / progressEvent.total);
                    };
                    this.channelProfileData.avatar = response.data.image;
                    this.imageChecker = false;
                })
                .catch(errors => {
                    if (errors.response.data.errors.image) {
                        this.imageError = errors.response.data.errors.image[0];
                    }
                });
            }
            else{
                this.imageError = 'Image is empty';
            }
        },
        onCancleImageEdit(){
            this.imageChecker = false;
        },
        editTheImage(){
            this.imageChecker = true;
        }
    },

}
</script>
