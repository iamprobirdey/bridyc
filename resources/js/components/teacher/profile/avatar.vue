<template>
  <div>
    <div class="text-center mt-5 pt-4">
      <img
        class="profile-picture rounded-circle shadow"
        :src="
          userImage === 'default.jpg'
            ? '/images/' + userImage
            : '/media/teacher/' + userId + '/profile/s-' + userImage
        "
        alt="teacher profile pictures"
      />
      <a
        class="profile-edit p-2 rounded teacher-edit"
        @click="addAvatarTeacherImageFile()"
        data-toggle="tooltip"
        title="Change Picture"
        ><i class="fa fa-camera" aria-hidden="true"></i
      ></a>
    </div>
    <div
      class="modal fade"
      id="addImageFileAvatarTeacher"
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
                v-html="croppieAvatarTeacherImageValidation"
                v-if="croppieAvatarTeacherImageValidation != ''"
                class="text-danger"
              ></p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="addImageCroppieAvatarTeacher"
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
              :src="coppieAvatarTeacherImageData"
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
              @click="addAvatarTeacherImageFile"
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
      url: "/api/profile/teacher/image/upload/",
      domainUrl: location.origin,
      imageData: "",
      wait: false,
      coppieAvatarTeacherImageData: "",
      croppieAvatarTeacherImageValidation: "",
      coordinateAvatarTeacherHeight: "",
      coordinateAvatarTeacherWidth: "",
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
    console.log("avatar");
    if (this.user.avatar) {
      this.userImage = this.user.avatar;
      this.userImageStatus = true;
    }
    this.userId = this.user.id;
  },
  mounted() {},
  methods: {
    addAvatarTeacherImageFile() {
      $("#addImageFileAvatarTeacher").modal("show");
      $("#addImageCroppieAvatarTeacher").modal("hide");
    },
    loadCroppieImageCroppie(event) {
      var input = event.target;
      if (input.files && input.files[0]) {
        const validImageTypes = ["image/jpeg", "image/png", "image/jpg"];
        if (validImageTypes.includes(input.files[0]["type"])) {
          var reader = new FileReader();
          reader.onload = (e) => {
            this.coppieAvatarTeacherImageData = e.target.result;
          };
          reader.readAsDataURL(input.files[0]);
          $("#addImageFileAvatarTeacher").modal("hide");
          $("#addImageCroppieAvatarTeacher").modal("show");
        } else {
          this.croppieAvatarTeacherImageValidation =
            "This is not valid image file";
        }
      }
    },
    onChangeCoverDimention({ coordinates, canvas }) {
      let width = coordinates.width;
      let height = coordinates.height;
      this.coordinateAvatarTeacherWidth = width;
      this.coordinateAvatarTeacherHeight = height;
    },
    uploadImage2() {
      const { canvas } = this.$refs.cropper.getResult();
      if (canvas) {
        const form = new FormData();
        canvas.toBlob((blob) => {
          form.append("image", blob);
          form.append("height", this.coordinateAvatarTeacherHeight);
          form.append("width", this.coordinateAvatarTeacherWidth);
          this.wait = true;
          axios
            .post(this.url + this.userId, form, { emulateJSON: true })
            .then((response) => {
              this.userImage = response.data.image;
              //this.userImageStatus = true;
              this.wait = false;
              this.coppieAvatarTeacherImageData = "";
              $("#addImageCroppieAvatarTeacher").modal("hide");
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

.cropper-modal{
  max-height: calc(100vh - 40px);
  overflow-y: auto;
}
</style>

