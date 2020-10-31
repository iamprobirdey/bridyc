<template>
  <div>
    <div class="text-center mt-5 pt-4" v-if="userImageStatus">
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
        @click="editTheIcon()"
        data-toggle="tooltip"
        title="Change Picture"
        ><i class="fa fa-camera" aria-hidden="true"></i
      ></a>
    </div>

    <div class="upload-profile-pic mt-5 pt-4" v-if="!userImageStatus">
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
          drag: 'Upload your profile picture',
        }"
        @change="onChange"
        name="image"
      ></picture-input>

      <div
        v-if="wait"
        class="spinner-border text-warning spin-align"
        role="status"
      >
        <span class="sr-only">Loading...</span>
      </div>

      <div class="text-center mt-2" v-if="!wait">
        <button
          v-if="imageData != ''"
          type="button"
          class="btn btnsubmit mt-n2"
          @click="onImageSubmit()"
        >
          Submit
        </button>
        <button
          v-if="userImage != ''"
          @click="canTheEdit()"
          class="btn btn-warning"
        >
          Cancel
        </button>
      </div>
      <span v-show="imageError" class="text-danger text-center">{{
        imageError
      }}</span>
    </div>

    <!-- <div class="upload-profile-pic" v-if="!userImageStatus">
      <picture-input
        ref="pictureInput"
        width="152"
        height="150"
        margin="16"
        accept="image/jpeg, image/png"
        size="10"
        button-class="btn"
        :custom-strings="{
          upload: '<h1>Bummer!</h1>',
          drag: 'Upload your profile picture',
        }"
        @change="onChange"
        name="image"
      ></picture-input>

      <div class="text-center mt-2">
        <button
          v-if="imageData != ''"
          type="button"
          class="btn btnsubmit mt-n2"
          @click="onImageSubmit()"
        >
          Submit
        </button>
        <button
          v-if="userImage != ''"
          @click="canTheEdit()"
          class="btn btn-warning"
        >
          Cancel
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
    Compressor,
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
    onChange(image) {
      if (this.$refs.pictureInput.image)
        this.imageData = this.$refs.pictureInput.image;
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
              .post(vm.url + vm.userId, formData)
              .then((response) => {
                onUploadProgress: (progressEvent) => {
                  console.log(progressEvent.loaded / progressEvent.total);
                };
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
      this.wait = false;
    },
    canTheEdit() {
      this.userImageStatus = true;
      this.wait = false;
    },
  },
};
</script>
