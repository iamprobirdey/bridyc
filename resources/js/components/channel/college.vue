<template>
  <div>
    <div>
      <h4>Your Gallery (First five photos will be displayed)</h4>
      <ul class="nav">
        <li
          v-for="(image, index) in channelData.college_image"
          :key="index"
          class="m-2"
        >
          <img
            :src="
              domainUrl +
              '/media/channel/' +
              userId +
              '/college/' +
              image.image_path
            "
            height="120"
            width="120"
            alt="college infrastructure"
            class="border border-light m-1"
          />
          <button class="btn btn-danger" @click="deleteCollege(image, index)">
            Delete
          </button>
        </li>
      </ul>
    </div>
    <br />

    <button
      v-if="!collegeImageEntry"
      class="btn btnsubmit rounded-0"
      @click="addCollegeImageFile()"
    >
      Insert images
    </button>

    <div
      class="modal fade"
      id="addImageFileCollege"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Upload Photo</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body my-n3">
            <div>
              <input
                id="file-button1-college"
                hidden
                type="file"
                @change="loadCroppieImageCroppie($event)"
                accept="image/*"
                @click="onFileClicked"
              />
              <label for="file-button1-college" class="label-btn py-2 px-3 mt-2"
                >Select file</label
              >
              <span id="file-chosen-cover">No file chosen</span>
              <p
                v-html="croppieCollegeImageValidation"
                v-if="croppieCollegeImageValidation != ''"
                class="text-danger"
              ></p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="addImageCroppieCollege"
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
            <h5 class="modal-title">Upload College Photo</h5>
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
              :src="coppieCollegeImageData"
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
            <button class="btn btn-dark mt-2" @click="addCollegeImageFile">
              Change Image
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- <div v-if="collegeImageEntry">
      <picture-input
        ref="pictureInput"
        width="152"
        height="150"
        margin="16"
        accept="image/jpeg, image/png"
        size="7"
        button-class="btn"
        :custom-strings="{
          upload: '<h1>Bummer!</h1>',
          drag: 'Upload Infrastructure images',
        }"
        @change="onChange"
        name="image"
      ></picture-input>
      <div v-if="wait" class="text-center mt-2">
        <div class="spinner-border text-warning" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>

      <div class="btnsuca mt-2 text-center" v-if="!wait">
        <button
          v-if="imageData != ''"
          type="button"
          class="btn btnsubmit mt-n2"
          @click="onImageSubmit()"
          :disabled="imageButtonDisable"
        >
          Submit
        </button>
        <button
          v-if="collegeImageEntry"
          @click="canTheEdit()"
          class="btn btn-success"
        >
          <i class="fa fa-times" aria-hidden="true"></i> Cancel
        </button>
      </div>
      <span v-show="imageError" class="text-danger text-center">{{
        imageError
      }}</span>
    </div> -->
  </div>
</template>

<script>
import PictureInput from "vue-picture-input";
import Compressor from "compressorjs";

import { Cropper } from "vue-advanced-cropper";
import "vue-advanced-cropper/dist/style.css";
export default {
  data() {
    return {
      imageData: "",
      imageError: "",
      collegeImageData: {},
      collegeImageEntry: false,
      channelData: [],
      userId: "",
      domainUrl: location.origin,
      imageButtonDisable: false,
      wait: false,
      coppieCollegeImageData: "",
      croppieCollegeImageValidation: "",
      coordinateCollegeHeight: "",
      coordinateCollegeWidth: "",
    };
  },
  props: {
    channel: {
      type: Array,
      default: null,
    },
  },
  created() {
    this.channelData = this.channel[0];
    console.log(this.channelData);
    this.userId = this.channel[0].user_id;
  },
  mounted() {},
  components: {
    PictureInput,
    Compressor,
    Cropper,
  },
  methods: {
    onFileClicked(event) {
      this.$refs.uploadFile.value = null;
    },
    addCollegeImageFile() {
      $("#addImageFileCollege").modal("show");
      $("#addImageCroppieCollege").modal("hide");
    },
    loadCroppieImageCroppie(event) {
      var input = event.target;
      if (input.files && input.files[0]) {
        const validImageTypes = ["image/jpeg", "image/png", "image/jpg"];
        if (validImageTypes.includes(input.files[0]["type"])) {
          var reader = new FileReader();
          reader.onload = (e) => {
            this.coppieCollegeImageData = e.target.result;
          };
          reader.readAsDataURL(input.files[0]);
          $("#addImageFileCollege").modal("hide");
          $("#addImageCroppieCollege").modal("show");
        } else {
          this.croppieCollegeImageValidation = "This is not valid image file";
        }
      }
    },
    onChangeCoverDimention({ coordinates, canvas }) {
      let width = coordinates.width;
      let height = coordinates.height;
      this.coordinateCollegeWidth = width;
      this.coordinateCollegeHeight = height;
    },
    uploadImage2() {
      const { canvas } = this.$refs.cropper.getResult();
      if (canvas) {
        const form = new FormData();
        canvas.toBlob((blob) => {
          form.append("image", blob);
          form.append("height", this.coordinateCollegeHeight);
          form.append("width", this.coordinateCollegeWidth);
          this.wait = true;
          axios
            .post("/api/college/image/upload/" + this.channelData.id, form, {
              emulateJSON: true,
            })
            .then((response) => {
              this.channelData.college_image = response.data.image;
              //this.userImageStatus = true;
              this.wait = false;
              this.coppieCollegeImageData = "";
              $("#addImageCroppieCollege").modal("hide");
            })
            .catch((errors) => {
              this.wait = false;
              if (errors.response.data.errors.image) {
                this.imageError = errors.response.data.errors.image[0];
              }
            });
        }, "image/jpeg");
      }
    },
    // onChange(image) {
    //   if (this.$refs.pictureInput.image)
    //     this.imageData = this.$refs.pictureInput.image;
    // },
    // b64toBlob(dataURI) {
    //   var byteString = atob(dataURI.split(",")[1]);
    //   var ab = new ArrayBuffer(byteString.length);
    //   var ia = new Uint8Array(ab);

    //   for (var i = 0; i < byteString.length; i++) {
    //     ia[i] = byteString.charCodeAt(i);
    //   }
    //   return new Blob([ab], { type: "image/jpeg" });
    // },
    // onImageSubmit: _.debounce(function () {
    //   if (this.imageData != "") {
    //     this.wait = true;
    //     this.imageButtonDisable = true;
    //     let vm = this;
    //     new Compressor(this.b64toBlob(this.imageData), {
    //       quality: 0.7,
    //       success(result) {
    //         const formData = new FormData();
    //         formData.append("image", result, result.name);
    //         axios
    //           .post(
    //             "/api/college/image/upload/" + vm.channelData.id,
    //             formData,
    //             { emulateJSON: true }
    //           )
    //           .then((response) => {
    //             vm.channelData.college_image = response.data.image;
    //             vm.collegeImageEntry = false;
    //             vm.imageData = "";
    //             vm.imageButtonDisable = false;
    //             vm.wait = false;
    //           })
    //           .catch((errors) => {
    //             vm.imageButtonDisable = false;
    //             vm.wait = false;
    //             if (errors.response.data.errors.image) {
    //               vm.imageError = errors.response.data.errors.image[0];
    //             }
    //           });
    //       },
    //       error(err) {
    //         Vue.toasted.error("Something went wrong!! Try again.", {
    //           position: "top-center",
    //           duration: 5000,
    //         });
    //       },
    //     });
    //   }
    // }, 500),
    deleteCollege(image, index) {
      axios
        .post("/api/delete/college/image/" + image.id)
        .then((response) => {
          if (response.data.message) {
            this.channelData.college_image.splice(index, 1);
            Vue.toasted.success("Image successfully deleted", {
              position: "top-center",
              duration: 5000,
            });
          }
        })
        .catch((errors) => {
          Vue.toasted.error("Image successfully deleted", {
            position: "top-center",
            duration: 5000,
          });
        });
    },
    // insertImage() {
    //   this.collegeImageEntry = true;
    //   this.wait = false;
    // },
    // canTheEdit() {
    //   this.collegeImageEntry = false;
    //   this.wait = false;
    // },
  },
};
</script>


<style scoped>
.label-btn {
  background-color: #003585;
  color: white;
  font-family: sans-serif;
  border-radius: 0.3rem;
  cursor: pointer;
}

.cropper-modal {
  max-height: calc(100vh - 40px);
  overflow-y: auto;
}
</style>
