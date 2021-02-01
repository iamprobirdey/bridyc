<template>
  <div>
    <div>
      <img
        height="150"
        width="250"
        :src="
          userImage === 'institute-cover-default.jpg'
            ? '/images/' + userImage
            : '/media/channel/' + userId + '/cover/' + userImage
        "
        alt="icon image"
      />
      <!--
                        :srcset="domainUrl+'/media/channel/'+userId+'/m-'+userImage+','+domainUrl+'/media/channel/'+userId+'/s-'+userImage"
                     -->
      <button @click="addCoverImageFile()" class="btn">
        <i class="fa fa-pencil" aria-hidden="true"></i> Change Cover Photo
      </button>
    </div>

    <!-- <div v-if="!userImageStatus">
      <picture-input
        ref="pictureInput"
        width="300"
        height="200"
        accept="image/jpeg, image/png"
        margin="17"
        size="7"
        button-class="btn"
        :custom-strings="{
          upload: '<h1>Bummer!</h1>',
          drag: 'Upload a cover picture',
        }"
        @change="onChange"
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
          class="btn btnsubmitcover rounded-0"
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
      id="addImageFileCover"
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
                v-html="croppieCoverImageValidation"
                v-if="croppieCoverImageValidation != ''"
                class="text-danger"
              ></p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="addImageCroppieCover"
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
              :src="coppieCoverImageData"
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
            <button class="btn btn-dark mt-2" @click="addCoverImageFile">
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
      userImage: "",
      userImageStatus: false,
      userId: null,
      imageData: "",
      selectedImagefile: null,
      imageError: "",
      url: "/api/cover/upload",
      domainUrl: location.origin,
      wait: false,
      coppieCoverImageData: "",
      croppieCoverImageValidation: "",
      coordinateCoverHeight: "",
      coordinateCoverWidth: "",
    };
  },
  components: {
    Cropper,
  },
  mounted() {
    this.getCoverData();
  },
  methods: {
    addCoverImageFile() {
      $("#addImageFileCover").modal("show");
      $("#addImageCroppieCover").modal("hide");
    },
    loadCroppieImageCroppie(event) {
      var input = event.target;
      if (input.files && input.files[0]) {
        const validImageTypes = ["image/jpeg", "image/png", "image/jpg"];
        if (validImageTypes.includes(input.files[0]["type"])) {
          var reader = new FileReader();
          reader.onload = (e) => {
            this.coppieCoverImageData = e.target.result;
          };
          reader.readAsDataURL(input.files[0]);
          $("#addImageFileCover").modal("hide");
          $("#addImageCroppieCover").modal("show");
        } else {
          this.croppieCoverImageValidation = "This is not valid image file";
        }
      }
    },
    onChangeCoverDimention({ coordinates, canvas }) {
      let width = coordinates.width;
      let height = coordinates.height;
      this.coordinateCoverWidth = width;
      this.coordinateCoverHeight = height;
    },
    uploadImage2() {
      const { canvas } = this.$refs.cropper.getResult();
      if (canvas) {
        const form = new FormData();
        canvas.toBlob((blob) => {
          form.append("image", blob);
          form.append("height", this.coordinateCoverHeight);
          form.append("width", this.coordinateCoverWidth);
          this.wait = true;
          axios
            .post(this.url, form, { emulateJSON: true })
            .then((response) => {
              this.userImage = response.data.image;
              //this.userImageStatus = true;
              this.wait = false;
              this.coppieCoverImageData = "";
              $("#addImageCroppieCover").modal("hide");
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

    getCoverData() {
      axios
        .get("/api/cover")
        .then((response) => {
          this.userImage = response.data.image;
          this.userId = response.data.userId;
        })
        .catch((errors) => {
          Vue.toasted.error("Something went wrong", {
            position: "top-center",
            duration: 5000,
          });
        });
    },
  },
};
</script>

<style scoped>
.btnsubmitcover {
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

.cropper-modal{
  max-height: calc(100vh - 40px);
  overflow-y: auto;
}
</style>
