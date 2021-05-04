<template>
  <div>
    <h4 class="text-center">INSTITUTE'S ACHIEVEMENTS</h4>
    <br />
    <h6 class="d-inline">Add your institute's achievements here</h6>
    <button class="btn btnadd p-1 ml-1 rounded-0" @click="addAchievement()">
      <i
        :class="[
          this.openAchievementForm === false ? 'fa fa-plus' : 'fa fa-minus',
        ]"
        aria-hidden="true"
      ></i>
    </button>
    <div class="row my-5" v-if="showAchievement">
      <div
        class="card shadow mx-auto sidebar-facard mb-4"
        v-for="(achievement, index) in achievementData"
        :key="index"
      >
        <img
          :src="
            baseUrl +
            'media/channel/' +
            userId +
            '/achievement/' +
            achievement.image_path
          "
        />
        <div class="card-body mt-n1">
          <h6 class="card-title my-n1">{{ achievement.title }}</h6>
          <p class="card-text">
            {{ achievement.description.substr(0, 20) }}
          </p>
          <p class="card-text">
            {{ achievement.date }}
          </p>
        </div>
        <div class="text-center">
          <button
            class="btn mb-5 editachieve"
            data-toggle="tooltip"
            data-placement="right"
            title="Edit"
            @click="editTheForm(achievement, index)"
          >
            <i class="fa fa-pencil" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
    <br />
    <!--
    <div
      class="modal fade"
      id="addImageCroppieAvatar"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      data-backdrop="static"
      data-keyboard="false"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Upload Profile Photo</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body cropper-modal">
            <cropper
              class="upload-example-cropper"
              ref="cropper"
              :src="coppieAvatarImageData"
              @change="onChangeCoverDimention"
            />
            <div v-if="wait" class="text-center mt-2">
              <div class="spinner-border text-warning" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
            <button class="btn btn-info mt-2" @click="uploadImage2">
              Submit
            </button>
            <button class="btn btn-dark mt-2" @click="addAvatarImageFile">
              Change Image
            </button>
          </div>
        </div>
      </div>
    </div> -->

    <div class="mt-5" v-if="openAchievementForm">
      <form @submit.prevent="achievementSubmit()">
        <picture-input
          ref="pictureInput"
          :prefill="prefill"
          width="200"
          height="200"
          margin="16"
          accept="image/jpeg, image/png"
          size="7"
          button-class="btn"
          :custom-strings="{
            upload: '<h1>Bummer!</h1>',
            drag: 'Drag a 😺 GIF or GTFO',
          }"
          @change="onChange"
        ></picture-input>
        <span v-show="serverErrors.image_path != ''" class="text-danger">{{
          serverErrors.image_path
        }}</span>

        <br />
        <div
          class="form-group row mx-lg-5"
          :class="{
            'has-error':
              errors.has('serverErrors.title') || serverErrors.title != '',
          }"
        >
          <label class="col-sm-3 col-form-label text-md-right"
            >Achievement Title :</label
          >
          <input
            class="col-sm-9 mx-1 mx-md-auto"
            v-model="formData.title"
            v-validate="'required'"
            data-vv-delay="20"
            name="title"
            type="text"
            :class="{ 'form-control': true, 'is-invalid': errors.has('title') }"
            placeholder="Example: Student name, Institute's team achievement"
          />
          <span v-show="errors.has('title')" class="text-danger mx-auto">{{
            errors.first("title")
          }}</span>
          <span
            v-show="serverErrors.title != ''"
            class="help is-danger mx-auto"
            >{{ serverErrors.title }}</span
          >
        </div>

        <div
          class="form-group row mx-lg-5"
          :class="{
            'has-error':
              errors.has('serverErrors.descriptions') ||
              serverErrors.descriptions != '',
          }"
        >
          <label class="col-sm-3 col-form-label text-md-right">
            Achievement Description :</label
          >
          <input
            class="col-sm-9 mx-1 mx-md-auto"
            v-model="formData.description"
            v-validate="'required'"
            data-vv-delay="20"
            name="descriptions"
            type="text"
            :class="{
              'form-control': true,
              'is-invalid': errors.has('descriptions'),
            }"
            placeholder="Describe achievement in seven words"
          />
          <span
            v-show="errors.has('descriptions')"
            class="text-danger mx-auto"
            >{{ errors.first("descriptions") }}</span
          >
          <span
            v-show="serverErrors.descriptions != ''"
            class="help is-danger mx-auto"
            >{{ serverErrors.descriptions }}</span
          >
        </div>
        <div
          class="form-group row mx-lg-5"
          :class="{
            'has-error': errors.has('date') || serverErrors.date != '',
          }"
        >
          <label class="col-sm-3 col-form-label text-md-right">
            Achievement Event Date :</label
          >
          <input
            class="col-sm-9 mx-1 mx-md-auto"
            v-on:focus="serverErrors.date = ''"
            v-model="formData.date"
            v-validate="'required'"
            data-vv-delay="20"
            name="date"
            type="date"
            :class="{ 'form-control': true, 'is-invalid': errors.has('date') }"
            placeholder="date"
          />
          <i v-show="errors.has('date')" class="is-invalid"></i>

          <span class="text-danger" v-show="errors.has('date')">{{
            errors.first("date")
          }}</span>
          <span v-show="serverErrors.date != ''" class="text-danger">{{
            serverErrors.date
          }}</span>
        </div>
        <div v-if="wait" class="text-center mt-2">
          <div class="spinner-border text-warning" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
        <div class="text-center" v-if="!wait">
          <button
            type="btn"
            class="btn btn-success rounded-0"
            @click="canCleSubmittion()"
          >
            Cancel
          </button>
          <button type="submit" :disabled="disable" class="btn btnsubmit mt-n2">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import PictureInput from "vue-picture-input";
import Compressor from "compressorjs";
export default {
  data() {
    return {
      achievementData: [],
      disable: false,
      showAchievement: true,
      openAchievementForm: false,
      formData: {
        image_path: "",
        title: "",
        description: "",
        date: "",
      },
      serverErrors: {
        image_path: "",
        title: "",
        description: "",
        date: "",
      },
      channelId: "",
      additionUrl: "",
      url: location.origin + "/api/achievement/",
      baseUrl: location.origin + "/",
      editingUrlChecker: false,
      achievementId: "",
      achievementIndex: "",
      authValue: "",
      userId: "",
      wait: false,
      blobData: {},
      step: 1,
      prefill: "",
    };
  },
  props: {
    achievement: {
      type: Array,
      default: null,
    },
    userid: {
      type: Number,
      default: null,
    },
  },
  created() {
    console.log("probir dey");
    this.userId = this.userid;
    this.achievementData = this.achievement[0].achievement;
    this.channelId = this.achievement[0].id;
    this.authValue = this.authId;
  },
  mounted() {},
  methods: {
    addAchievement() {
      this.openAchievementForm = !this.openAchievementForm;
      this.formData.image_path = "";
      this.formData.title = "";
      this.formData.description = "";
      this.formData.date = "";
      this.showAchievement = !this.showAchievement;
      this.wait = false;
    },
    achievementSubmit: _.debounce(function () {
      this.$validator.validate().then((result) => {
        if (result) {
          if (this.formData.image_path === "")
            this.serverErrors.image_path = "Image is required";
          let formUrl = "";
          if (this.editingUrlChecker) {
            this.additionUrl = "edit/";
            formUrl = this.url + this.additionUrl + this.achievementId;
          } else {
            this.additionUrl = "add/";
            formUrl = this.url + this.additionUrl;
          }
          if (this.formData.image_path != "") {
            this.disable = true;
            this.wait = true;
            let vm = this;
            new Compressor(this.b64toBlob(this.formData.image_path), {
              quality: 0.7,
              success(result) {
                let blob = new FormData();
                blob.append("title", vm.formData.title);
                blob.append("description", vm.formData.description);
                blob.append("date", vm.formData.date);
                blob.append("image_path", result, result.name);
                axios
                  .post(formUrl, blob, { emulateJSON: true })
                  .then((response) => {
                    if (response.data.message === true) {
                      vm.disable = false;
                      vm.showAchievement = true;
                      Vue.toasted.success("Achievement data is created", {
                        position: "top-center",
                        duration: 5000,
                      });
                      if (vm.editingUrlChecker) {
                        vm.achievementData.splice(vm.achievementIndex, 1);
                      }
                      vm.achievementData.push(response.data.data);
                      vm.openAchievementForm = false;
                      vm.editingUrlChecker = false;
                      vm.wait = false;
                    }
                  })
                  .catch((errors) => {
                    if (errors.response.data.errors.image_path) {
                      this.serverErrors.image_path =
                        errors.response.data.errors.image_path[0];
                    }
                    if (errors.response.data.errors.title) {
                      this.serverErrors.title =
                        errors.response.data.errors.title[0];
                    }
                    if (errors.response.data.errors.description) {
                      this.serverErrors.description =
                        errors.response.data.errors.description[0];
                    }
                    if (errors.response.data.errors.date) {
                      this.serverErrors.date =
                        errors.response.data.errors.date[0];
                    }
                    vm.disable = false;
                    vm.wait = false;
                    Vue.toasted.error("Something went wrong", {
                      position: "top-center",
                      duration: 5000,
                    });
                  });
              },
              error(err) {
                vm.addAchievement();
                vm.disable = false;
                vm.wait = false;
                Vue.toasted.error("Something went wrong!! Try again.", {
                  position: "top-center",
                  duration: 5000,
                });
              },
            });
            // axios({
            //   method: "post",
            //   url: formUrl,
            //   data: blob,
            //   headers: {
            //     "Content-Type": "multipart/form-data",
            //   },
            // })
            //   .then((response) => {
            //     if (response.data.message === true) {
            //       this.disable = false;
            //       this.showAchievement = true;
            //       Vue.toasted.success("Achievement data is created", {
            //         position: "top-center",
            //         duration: 5000,
            //       });
            //       if (this.editingUrlChecker) {
            //         this.achievementData.splice(this.achievementIndex, 1);
            //       }
            //       this.achievementData.push(response.data.data);
            //       this.openAchievementForm = false;
            //       this.editingUrlChecker = false;
            //       this.wait = false;
            //     }
            //   })
            //   .catch((error) => {
            //     this.disable = false;
            //     this.wait = false;
            //     Vue.toasted.error("Something went wrong", {
            //       position: "top-center",
            //       duration: 5000,
            //     });
            //   });
          }
        }
      });
    }, 500),
    onChange(image) {
      if (this.$refs.pictureInput.image) {
        this.formData.image_path = this.$refs.pictureInput.image;
      }
    },
    b64toBlob(dataURI) {
      var byteString = atob(dataURI.split(",")[1]);
      var ab = new ArrayBuffer(byteString.length);
      var ia = new Uint8Array(ab);
      for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }
      return new Blob([ab], { type: "image/jpeg" });
    },
    editTheForm(data, index) {
      this.editingUrlChecker = true;
      this.prefill =
        this.baseUrl +
        "media/channel/" +
        this.userId +
        "/achievement/" +
        data.image_path;
      this.formData.title = data.title;
      this.formData.description = data.description;
      this.formData.date = data.date;
      this.achievementId = data.id;
      this.openAchievementForm = true;
      this.achievementIndex = index;
      this.showAchievement = false;
      this.wait = false;
    },
    canCleSubmittion() {
      this.editingUrlChecker = false;
      this.openAchievementForm = false;
      this.showAchievement = true;
      this.wait = false;
    },
  },
  components: {
    PictureInput,
    Compressor,
  },
};

$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
</script>

<style scoped></style>
