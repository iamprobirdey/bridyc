<template>
  <div class="mb-3">
    <div class="container text-center ml-3">
      <img
        class="princi-profile-picture rounded-circle"
        height="150"
        width="152"
        :src="
          userImage === 'default.jpg'
            ? '/images/default.jpg'
            : domainUrl + '/media/channel/' + userId + '/profile/' + userImage
        "
        alt="principal profile picture"
      />
      <!--
                        :srcset="domainUrl+'/media/channel/'+userId+'/m-'+userImage+','+domainUrl+'/media/channel/'+userId+'/s-'+userImage"
                     -->

      <button @click="addAvatarImageFile()" class="btn princi-profile-edit p-2">
        <i class="fa fa-camera" aria-hidden="true"></i>
      </button>
    </div>

    <div
      class="modal fade"
      id="addImageFileAvatar"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body my-n3">
            <div>
              <input
                id="file-button1-cover"
                hidden
                type="file"
                @change="loadCroppieImageCroppie($event)"
                accept="image/*"
              />
              <label for="file-button1-cover" class="label-btn py-2 px-3 mt-2"
                >Select file</label
              >
              <span id="file-chosen-cover">No file chosen</span>
              <p
                v-html="croppieAvatarImageValidation"
                v-if="croppieAvatarImageValidation != ''"
                class="text-danger"
              ></p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="addImageCroppieAvatar"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
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
    </div>
  </div>
</template>

<script>
import { Cropper } from "vue-advanced-cropper";
import "vue-advanced-cropper/dist/style.css";
export default {
  data() {
    return {
      imageError: "",
      userImage: "",
      userId: "",
      url: "/api/profile/avatar",
      domainUrl: location.origin,
      imageData: "",
      wait: false,
      coppieAvatarImageData: "",
      croppieAvatarImageValidation: "",
      coordinateAvatarHeight: "",
      coordinateAvatarWidth: "",
    };
  },
  props: {
    user: {
      type: Object,
      default: null,
    },
  },
  components: {
    Cropper,
  },
  created() {
    if (this.user.avatar != null) {
      this.userImage = this.user.avatar;
    }
    this.userId = this.user.id;
  },
  mounted() {},
  methods: {
    addAvatarImageFile() {
      $("#addImageFileAvatar").modal("show");
      $("#addImageCroppieAvatar").modal("hide");
    },
    loadCroppieImageCroppie(event) {
      var input = event.target;
      if (input.files && input.files[0]) {
        const validImageTypes = ["image/jpeg", "image/png", "image/jpg"];
        if (validImageTypes.includes(input.files[0]["type"])) {
          var reader = new FileReader();
          reader.onload = (e) => {
            this.coppieAvatarImageData = e.target.result;
          };
          reader.readAsDataURL(input.files[0]);
          $("#addImageFileAvatar").modal("hide");
          $("#addImageCroppieAvatar").modal("show");
        } else {
          this.croppieAvatarImageValidation = "This is not valid image file";
        }
      }
    },
    onChangeCoverDimention({ coordinates, canvas }) {
      let width = coordinates.width;
      let height = coordinates.height;
      this.coordinateAvatarWidth = width;
      this.coordinateAvatarHeight = height;
    },
    uploadImage2() {
      const { canvas } = this.$refs.cropper.getResult();
      if (canvas) {
        const form = new FormData();
        canvas.toBlob((blob) => {
          form.append("image", blob);
          form.append("height", this.coordinateAvatarHeight);
          form.append("width", this.coordinateAvatarWidth);
          this.wait = true;
          axios
            .post("/api/profile/avatar", form, { emulateJSON: true })
            .then((response) => {
              this.userImage = response.data.image;
              this.wait = false;
              this.coppieAvatarImageData = "";
              $("#addImageCroppieAvatar").modal("hide");
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
    //           .post("/api/profile/avatar", formData, { emulateJSON: true })
    //           .then((response) => {
    //             vm.wait = false;
    //             vm.userImage = response.data.image;
    //             vm.userImageStatus = true;
    //           })
    //           .catch((errors) => {
    //             vm.wait = false;
    //             if (errors.response.data.errors.image) {
    //               vm.imageError = errors.response.data.errors.image[0];
    //             }
    //             Vue.toasted.error("Something went wrong!! Try again.", {
    //               position: "top-center",
    //               duration: 5000,
    //             });
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
    //   this.wait = false;
    // },
    // canTheEdit() {
    //   this.userImageStatus = true;
    //   this.wait = false;
    // },
  },
};
</script>

<style scoped>
.picture-preview {
  position: static;
}
.label-btn {
  background-color: #003585;
  color: white;
  font-family: sans-serif;
  border-radius: 0.3rem;
  cursor: pointer;
}

.cropper-modal{
  max-height: calc(100vh - 40px);
  overflow-y: auto;
}
</style>
