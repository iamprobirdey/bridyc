<template>
  <div>
    <h2 class="mx-sm-4 px-sm-2">Principal's Profile</h2>
    <br />
    <h2>Principle name {{ channelProfileData.name }}</h2>
    <profile-gender :user="channelProfileData.activities"></profile-gender>

    <br />
    <div class="mx-sm-4 px-sm-2">
      <h4>Add more details(Recomended)</h4>

      <div
        class="mt-5"
        v-for="(education, index) in channelProfileData.education"
        :key="education.id"
      >
        <div class="row mx-auto">
          <ul class="nav flex-column col-sm-6">
            <li>
              <div class="card mx-sm-3 shadow profiledetails">
                <div class="card-body mt-n2">
                  <i
                    class="fa fa-university"
                    style="color: #003585"
                    aria-hidden="true"
                  ></i>
                  School : <strong>{{ education.school_name }}</strong>
                </div>
              </div>
            </li>
            <li>
              <br />
              <div class="card mx-sm-3 shadow profiledetails">
                <div class="card-body mt-n2">
                  <i
                    class="fa fa-graduation-cap"
                    style="color: #003585"
                    aria-hidden="true"
                  ></i>
                  Degree : {{ education.degree }}
                </div>
              </div>
            </li>
            <li>
              <br />
              <div class="card mx-sm-3 shadow profiledetails">
                <div class="card-body mt-n2">
                  <i
                    class="fa fa-book"
                    style="color: #003585"
                    aria-hidden="true"
                  ></i>
                  Field of study : {{ education.field_of_study }}
                </div>
              </div>
            </li>
          </ul>
        </div>
        <button
          class="btn btnadd p-1"
          @click="editTheEducation(education, index)"
        >
          <i class="fa fa-pencil" aria-hidden="true"></i>
        </button>
      </div>

      <button class="btn btnadd p-1" @click="addEducation()">+</button>
    </div>

    <activities :profiledata="channelProfileData"></activities>

    <div class="ms-sm-4 px-sm-2">
      <profile-avatar :user="channelProfileData"></profile-avatar>
    </div>

    <!-- Modal -->

    <div
      class="modal fade"
      id="addEducation"
      tabindex="-1"
      role="dialog"
      aria-labelledby="principalprofilemodal"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="principalprofilemodal">
              Please fill in these details
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="getQualificationData()">
              <h6 class="mb-3 mt-n2">Highest Education:</h6>

              <div
                class="form-group"
                :class="{
                  'has-error':
                    errors.has('school_name') ||
                    qualificationError.school_name != '',
                }"
              >
                <label for="exampleInputEmail1">University</label>
                <input
                  v-model="qualificationData.school_name"
                  v-validate="'required'"
                  data-vv-delay="20"
                  name="school_name"
                  type="text"
                  :class="{
                    'form-control': true,
                    'is-invalid': errors.has('school_name'),
                  }"
                  placeholder="Your university name"
                />
                <i v-show="errors.has('class')" class="is-invalid"></i>

                <span v-show="errors.has('school_name')" class="text-danger">{{
                  errors.first("school_name")
                }}</span>
                <span
                  v-show="qualificationError.school_name != ''"
                  class="text-danger"
                  >{{ qualificationError.school_name }}</span
                >
              </div>

              <div
                class="form-group"
                :class="{
                  'has-error':
                    errors.has('field_of_study') ||
                    qualificationError.field_of_study != '',
                }"
              >
                <label for="exampleInputEmail1">Field of study</label>
                <input
                  v-model="qualificationData.field_of_study"
                  v-validate="'required'"
                  data-vv-delay="20"
                  name="field_of_study"
                  type="text"
                  :class="{
                    'form-control': true,
                    'is-invalid': errors.has('field_of_study'),
                  }"
                  placeholder="Field of study(specialization)"
                />
                <i v-show="errors.has('class')" class="is-invalid"></i>

                <span
                  v-show="errors.has('field_of_study')"
                  class="text-danger"
                  >{{ errors.first("field_of_study") }}</span
                >
                <span
                  v-show="qualificationError.field_of_study != ''"
                  class="text-danger"
                  >{{ qualificationError.field_of_study }}</span
                >
              </div>

              <div
                class="form-group"
                :class="{
                  'has-error':
                    errors.has('degree') || qualificationError.degree != '',
                }"
              >
                <label for="exampleInputEmail1">Degree</label>
                <input
                  v-model="qualificationData.degree"
                  v-validate="'required'"
                  data-vv-delay="20"
                  name="degree"
                  type="text"
                  :class="{
                    'form-control': true,
                    'is-invalid': errors.has('degree'),
                  }"
                  placeholder="Name of your degree"
                />
                <i v-show="errors.has('class')" class="is-invalid"></i>

                <span v-show="errors.has('degree')" class="text-danger">{{
                  errors.first("degree")
                }}</span>
                <span
                  v-show="qualificationError.degree != ''"
                  class="text-danger"
                  >{{ qualificationError.degree }}</span
                >
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
import profileGender from "./channel/profileGender.vue";
import ProfileAvatar from "./channel/profile/avatar.vue";
import activities from "./channel/profile/activities.vue";

export default {
  data() {
    return {
      channelProfileData: [],
      genderVissionChecker: true,
      profileData: {
        gender: "",
        vission: "",
      },
      qualificationData: {
        school_name: "",
        degree: "",
        field_of_study: "",
      },
      profileError: {
        gender: "",
        vission: "",
      },
      qualificationError: {
        school_name: "",
        degree: "",
        field_of_study: "",
      },
      domainUrl: location.origin,
      educationPath: "",
      qualificationEditDataId: "",
      qualificationEditIndex: "",
      //Image profile stuff
      imageData: "",
      imageError: "",
      imageChecker: false,
    };
  },
  props: {
    user: {
      type: Object,
      default: null,
    },
  },
  components: {
    PictureInput,
    "profile-gender": profileGender,
    "profile-avatar": ProfileAvatar,
    activities,
  },
  created() {
    this.channelProfileData = this.user;
    if (this.channelProfileData.gender == null)
      this.genderVissionChecker = false;
    if (this.channelProfileData.avatar == null) this.imageChecker = true;
  },
  mounted() {},
  methods: {
    getQualificationData() {
      this.$validator.validate().then((result) => {
        if (result) {
          axios
            .post(this.educationPath, this.qualificationData)
            .then((response) => {
              if (response.data.message) {
                if (this.qualificationEditDataId == "") {
                  this.channelProfileData.education = response.data.data;
                } else {
                  this.channelProfileData.education.splice(
                    this.qualificationEditIndex,
                    1,
                    response.data.user
                  );
                }
                $("#addEducation").modal("hide");
              }
            })
            .catch((errors) => {
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
            });
        }
      });
    },
    goBack() {
      this.genderVissionChecker = true;
    },

    addEducation() {
      this.educationPath = "";
      this.educationPath = this.domainUrl + "/api/add/education";
      this.qualificationEditDataId = "";
      this.emptyEducationForm();
      $("#addEducation").modal("show");
    },
    editTheEducation(education, index) {
      console.log(education);
      this.qualificationData.school_name = education.school_name;
      this.qualificationData.degree = education.degree;
      this.qualificationData.field_of_study = education.field_of_study;
      this.qualificationEditDataId = education.id;
      this.educationPath = "";
      this.educationPath =
        this.domainUrl + "/api/add/education/edit/" + education.id;
      this.qualificationEditIndex = index;
      $("#addEducation").modal("show");
    },
    emptyEducationForm() {
      this.qualificationData.school_name = "";
      this.qualificationData.degree = "";
      this.qualificationData.field_of_study = "";
    },
    onChange(image) {
      if (this.$refs.pictureInput.image)
        this.imageData = this.$refs.pictureInput.image;
    },
    onImageSubmit() {
      if (this.imageData != "") {
        const formData = new FormData();
        formData.append("image", this.imageData);
        axios
          .post(this.domainUrl + "/api/profile/avatar", formData)
          .then((response) => {
            onUploadProgress: (progressEvent) => {
              console.log(progressEvent.loaded / progressEvent.total);
            };
            this.channelProfileData.avatar = response.data.image;
            this.imageChecker = false;
          })
          .catch((errors) => {
            if (errors.response.data.errors.image) {
              this.imageError = errors.response.data.errors.image[0];
            }
          });
      } else {
        this.imageError = "Image is empty";
      }
    },
    onCancleImageEdit() {
      this.imageChecker = false;
    },
    editTheImage() {
      this.imageChecker = true;
    },
  },
};
</script>
