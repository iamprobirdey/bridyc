<template>
  <div class="mb-3">
    <div v-if="userImageStatus">
      <img
        height="150"
        width="152"
        :src="
          userImage === 'institute-logo-default.jpg'
            ? '/images/' + userImage
            : '/media/channel/' + userId + '/avatar/' + userImage
        "
        alt="icon image"
      />
      <!--
                        :srcset="domainUrl+'/media/channel/'+userId+'/m-'+userImage+','+domainUrl+'/media/channel/'+userId+'/s-'+userImage"
                     -->

      <button @click="addImageFile()" class="btn">
        <i class="fa fa-pencil" aria-hidden="true"></i> Change Logo
      </button>
    </div>

    <div v-if="userImageStatus === false">
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
          drag: 'Upload your logo',
        }"
        @change="onChange"
        name="image"
      ></picture-input>
      <div v-if="wait" class="text-center mt-2">
        <div class="spinner-border text-warning" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>

      <div class="btnsuca mt-2" v-if="!wait">
        <button
          v-if="imageData != ''"
          type="button"
          class="btn btnsubmiticon rounded-0"
          @click="onImageSubmit()"
        >
          Submit
        </button>
        <button
          v-if="userImage != null"
          @click="canTheEdit()"
          class="btn btn-success"
        >
          <i class="fa fa-times" aria-hidden="true"></i>Cancel
        </button>
      </div>
      <span v-show="imageError" class="text-danger">{{ imageError }}</span>
    </div>

    <div
      class="modal fade"
      id="addImageFile"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <button
            type="button"
            class="close ml-auto mr-2"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>

          <div class="modal-body">
            <div class="button-wrapper">
              <input
                type="file"
                ref="file"
                class="btn btn-primary"
                @change="loadCroppieImage($event)"
                accept="image/*"
              />
              <!-- <span class="btn btn-success" @click="$refs.file.click()">
                Load image
              </span> -->
              <p
                v-html="croppieImageValidation"
                v-if="croppieImageValidation != ''"
                class="text-danger"
              ></p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="addImageCroppie"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <button
            type="button"
            class="close ml-auto mr-2"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>

          <div class="modal-body">
            <cropper
              class="upload-example-cropper"
              ref="cropper"
              :src="coppieImageData"
            />
            <button class="btn btn-secondary mt-2" @click="uploadImage2">
              Submit
            </button>
            <button class="btn btn-dark" @click="addImageFile">
              change Image
            </button>
          </div>
        </div>
      </div>
    </div>

    <!--  -->
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
      url: "api/icon",
      imageError: "",
      userImage: "",
      userImageStatus: false,
      userId: null,
      url: "/api/icon/upload",
      domainUrl: location.origin,
      wait: false,

      coppieImageData: "",
      croppieImageValidation: "",
    };
  },
  mounted() {
    this.getImageData();
  },
  methods: {
    addImageFile() {
      $("#addImageFile").modal("show");
      $("#addImageCroppie").modal("hide");
    },

    loadCroppieImage(event) {
      var input = event.target;
      if (input.files && input.files[0]) {
        const validImageTypes = ["image/jpeg", "image/png", "image/jpg"];
        if (validImageTypes.includes(input.files[0]["type"])) {
          var reader = new FileReader();
          reader.onload = (e) => {
            this.coppieImageData = e.target.result;
          };
          reader.readAsDataURL(input.files[0]);
          $("#addImageFile").modal("hide");
          $("#addImageCroppie").modal("show");
        } else {
          this.croppieImageValidation = "This is not valid image file";
        }
      }
    },

    uploadImage2() {
      console.log("hit");
      const { canvas } = this.$refs.cropper.getResult();
      if (canvas) {
        const form = new FormData();
        canvas.toBlob((blob) => {
          form.append("image", blob);
          axios
            .post(this.url, form, { emulateJSON: true })
            .then((response) => {
              this.userImage = response.data.image;
              this.userImageStatus = true;
              this.wait = false;
              $("#addImageCroppie").modal("hide");
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

    b64toBlob(dataURI) {
      var byteString = atob(dataURI.split(",")[1]);
      var ab = new ArrayBuffer(byteString.length);
      var ia = new Uint8Array(ab);

      for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }
      return new Blob([ab], { type: "image/jpeg" });
    },
    getImageData() {
      axios
        .get("/api/icon")
        .then((response) => {
          this.userImage = response.data.image;
          this.userId = response.data.userId;
          this.userImageStatus = true;
        })
        .catch((errors) => {
          Vue.toasted.error("Something went wrong", {
            position: "top-center",
            duration: 5000,
          });
        });
    },
    onChange(image) {
      if (this.$refs.pictureInput.image)
        this.imageData = this.$refs.pictureInput.image;
    },

    onImageSubmit() {
      if (this.imageData != "") {
        this.wait = true;
        let vm = this;
        new Compressor(this.b64toBlob(this.imageData), {
          quality: 0.7,
          success(result) {
            const formData = new FormData();
            formData.append("image", result, result.name);
            axios
              .post(vm.url, formData, { emulateJSON: true })
              .then((response) => {
                vm.userImage = response.data.image;
                vm.userImageStatus = true;
                vm.wait = false;
              })
              .catch((errors) => {
                vm.wait = false;
                if (errors.response.data.errors.image) {
                  vm.imageError = errors.response.data.errors.image[0];
                }
              });
          },
          error(err) {
            Vue.toasted.error("Something went wrong!! Try again.", {
              position: "top-center",
              duration: 5000,
            });
          },
        });
      }
    },

    editTheIcon() {
      this.userImageStatus = false;
      this.imageData = this.userImage;
      this.wait = false;
    },
    canTheEdit() {
      this.wait = false;
      this.userImageStatus = true;
    },
  },
  components: {
    PictureInput,
    Compressor,
    Cropper,
  },
};
</script>

<style scoped>
.btnsubmiticon {
  background-color: #013737;
  color: white;
  padding-top: 2px;
  padding-bottom: 2px;
  border-radius: 0;
  z-index: 100;
}
.btnsuca {
  text-align: center;
}
.btn-success {
  padding-top: 0.1rem !important;
  padding-bottom: 0.1rem !important;
}
</style>
