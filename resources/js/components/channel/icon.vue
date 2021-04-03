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

    <!-- <div v-if="userImageStatus === false">
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
    </div> -->

    <div
      class="modal fade"
      id="addImageFile"
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
                id="file-button"
                hidden
                type="file"
                ref="file"
                @change="loadCroppieImage($event)"
                accept="image/*"
                @click="onFileClicked"
              />
              <label for="file-button" class="label-btn py-2 px-3 mt-2"
                >Select file</label
              >
              <span id="file-chosen">No file chosen</span>
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
      data-backdrop="static"
      data-keyboard="false"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Upload Institute Icon</h5>
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
              :src="coppieImageData"
              @change="onChangeIconDimention"
            />
            <div v-if="wait" class="text-center mt-2">
              <div class="spinner-border text-warning" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
            <button class="btn btn-info mt-2" @click="uploadImage2">
              Submit
            </button>
            <button class="btn btn-dark mt-2" @click="addImageFile">
              Change Image
            </button>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
  </div>
</template>

<script>
import { Cropper } from "vue-advanced-cropper";
import "vue-advanced-cropper/dist/style.css";

export default {
  data() {
    return {
      imageData: "",
      imageError: "",
      userImage: "",
      userImageStatus: false,
      userId: null,
      url: "/api/icon/upload",
      domainUrl: location.origin,
      wait: false,

      coppieImageData: "",
      croppieImageValidation: "",
      coordinateHeight: "",
      coordinateWidth: "",
    };
  },
  mounted() {
    this.getImageData();
    const vueIns = this;
  },
  methods: {
    onFileClicked(event) {
      this.$refs.uploadFile.value = null;
    },
    addImageFile() {
      $("#addImageFile").modal("show");
      $("#addImageCroppie").modal("hide");
    },

    loadCroppieImage(event) {
      console.log("from icon");
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

    onChangeIconDimention({ coordinates, canvas }) {
      let width = coordinates.width;
      let height = coordinates.height;
      this.coordinateWidth = width;
      this.coordinateHeight = height;
    },

    uploadImage2() {
      const { canvas } = this.$refs.cropper.getResult();
      if (canvas) {
        const form = new FormData();
        const vm = this;
        canvas.toBlob((blob) => {
          form.append("image", blob);
          form.append("height", this.coordinateHeight);
          form.append("width", this.coordinateWidth);
          this.wait = true;
          axios
            .post(this.url, form, { emulateJSON: true })
            .then((response) => {
              this.userImage = response.data.image;
              this.userImageStatus = true;
              this.wait = false;

              this.coppieImageData = "";
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

    // b64toBlob(dataURI) {
    //   var byteString = atob(dataURI.split(",")[1]);
    //   var ab = new ArrayBuffer(byteString.length);
    //   var ia = new Uint8Array(ab);

    //   for (var i = 0; i < byteString.length; i++) {
    //     ia[i] = byteString.charCodeAt(i);
    //   }
    //   return new Blob([ab], { type: "image/jpeg" });
    // },
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
    // onChange(image) {
    //   if (this.$refs.pictureInput.image)
    //     this.imageData = this.$refs.pictureInput.image;
    // },

    // onImageSubmit() {
    //   if (this.imageData != "") {
    //     this.wait = true;
    //     let vm = this;
    //     new Compressor(this.b64toBlob(this.imageData), {
    //       quality: 0.7,
    //       success(result) {
    //         const formData = new FormData();
    //         formData.append("image", result, result.name);
    //         axios
    //           .post(vm.url, formData, { emulateJSON: true })
    //           .then((response) => {
    //             vm.userImage = response.data.image;
    //             vm.userImageStatus = true;
    //             vm.wait = false;
    //           })
    //           .catch((errors) => {
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
    // },

    // editTheIcon() {
    //   this.userImageStatus = false;
    //   this.imageData = this.userImage;
    //   this.wait = false;
    // },
    // canTheEdit() {
    //   this.wait = false;
    //   this.userImageStatus = true;
    // },
  },
  components: {
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
