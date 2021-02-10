<template>
  <div>
    <div class="text-center" v-if="userImageStatus">
      <img
        class="profile-picture rounded-circle shadow"
        :src="
          userImage === 'default.jpg'
            ? '/images/' + userImage
            : domainUrl + '/media/student/' + userId + '/profile/s-' + userImage
        "
        alt="student profile pictures"
      />
      <a
        class="profile-edit p-2 rounded"
        @click="addAvatarStudentImageFile()"
        data-toggle="tooltip"
        title="Change Picture"
        ><i class="fa fa-camera" aria-hidden="true"></i
      ></a>
    </div>

    <div
      class="modal fade"
      id="addImageFileAvatarStudent"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
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
          <div class="modal-body my-n3">
            <div>
              <input
                id="file-button1-cover"
                hidden
                type="file"
                @change="loadCroppieImageCroppie($event)"
                accept="image/*"
                @click="onFileClicked"
              />
              <label for="file-button1-cover" class="label-btn py-2 px-3 mt-2"
                >Select file</label
              >
              <span id="file-chosen-cover">No file chosen</span>
              <p
                v-html="croppieAvatarStudentImageValidation"
                v-if="croppieAvatarStudentImageValidation != ''"
                class="text-danger"
              ></p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="addImageCroppieAvatarStudent"
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
              :src="coppieAvatarStudentImageData"
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
            <button
              class="btn btn-dark mt-2"
              @click="addAvatarStudentImageFile"
            >
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
      userImageStatus: false,
      userId: "",
      url: "/api/profile/image/upload/",
      domainUrl: location.origin,
      imageData: "",
      wait: false,
      coppieAvatarStudentImageData: "",
      croppieAvatarStudentImageValidation: "",
      coordinateAvatarStudentHeight: "",
      coordinateAvatarStudentWidth: "",
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
    if (this.user.avatar) {
      this.userImage = this.user.avatar;
      this.userImageStatus = true;
    }
    this.userId = this.user.id;
  },
  mounted() {},
  methods: {
    onFileClicked(event) {
      this.$refs.uploadFile.value = null;
    },
    addAvatarStudentImageFile() {
      $("#addImageFileAvatarStudent").modal("show");
      $("#addImageCroppieAvatarStudent").modal("hide");
    },
    loadCroppieImageCroppie(event) {
      var input = event.target;
      if (input.files && input.files[0]) {
        const validImageTypes = ["image/jpeg", "image/png", "image/jpg"];
        if (validImageTypes.includes(input.files[0]["type"])) {
          var reader = new FileReader();
          reader.onload = (e) => {
            this.coppieAvatarStudentImageData = e.target.result;
          };
          reader.readAsDataURL(input.files[0]);
          $("#addImageFileAvatarStudent").modal("hide");
          $("#addImageCroppieAvatarStudent").modal("show");
        } else {
          this.croppieAvatarStudentImageValidation =
            "This is not valid image file";
        }
      }
    },
    onChangeCoverDimention({ coordinates, canvas }) {
      let width = coordinates.width;
      let height = coordinates.height;
      this.coordinateAvatarStudentWidth = width;
      this.coordinateAvatarStudentHeight = height;
    },
    uploadImage2() {
      const { canvas } = this.$refs.cropper.getResult();
      if (canvas) {
        const form = new FormData();
        canvas.toBlob((blob) => {
          form.append("image", blob);
          form.append("height", this.coordinateAvatarStudentHeight);
          form.append("width", this.coordinateAvatarStudentWidth);
          this.wait = true;
          axios
            .post(this.url + this.userId, form, { emulateJSON: true })
            .then((response) => {
              this.userImage = response.data.image;
              //this.userImageStatus = true;
              this.wait = false;
              this.coppieAvatarStudentImageData = "";
              $("#addImageCroppieAvatarStudent").modal("hide");
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
