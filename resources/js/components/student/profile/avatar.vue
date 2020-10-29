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
        @click="editTheIcon()"
        data-toggle="tooltip"
        title="Change Picture"
        ><i class="fa fa-camera" aria-hidden="true"></i
      ></a>
    </div>

    <div class="upload-profile-pic" v-if="!userImageStatus">
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
      <div v-if="wait" class="spinner-border text-primary" role="status">
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
  </div>
</template>


<script>
import PictureInput from "vue-picture-input";
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
    onImageSubmit() {
      if (this.imageData != "") {
        this.wait = true;
        const formData = new FormData();
        formData.append("image", this.imageData);
        axios
          .post(this.url + this.userId, formData)
          .then((response) => {
            onUploadProgress: (progressEvent) => {
              console.log(progressEvent.loaded / progressEvent.total);
            };
            this.userImage = response.data.image;
            this.userImageStatus = true;
            this.wait = false;
          })
          .catch((errors) => {
            this.wait = false;
            if (errors.response.data.errors.image) {
              this.imageError = errors.response.data.errors.image[0];
            }
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
