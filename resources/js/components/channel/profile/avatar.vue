<template>
  <div class="mb-3">
    <div class="container text-center ml-3" v-if="userImageStatus">
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

      <button @click="editTheIcon()" class="btn princi-profile-edit p-2">
        <i class="fa fa-camera" aria-hidden="true"></i>
      </button>
    </div>

    <div class="princi-upload-profile-pic" v-if="!userImageStatus">
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
      <div v-if="wait" class="text-center mt-2">
      <div class="spinner-border text-warning" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      </div>
      
      <div class="btnsuca text-center mt-2" v-if="!wait">
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
          class="btn btn-success"
        >
          <i class="fa fa-times" aria-hidden="true"></i>Cancel
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
import Compressor from "compressorjs";
export default {
  data() {
    return {
      imageError: "",
      userImage: "",
      userImageStatus: false,
      userId: "",
      url: "/api/profile/avatar",
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
    if (this.user.avatar != null) {
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
              .post("/api/profile/avatar", formData)
              .then((response) => {
                vm.wait = false;
                vm.userImage = response.data.image;
                vm.userImageStatus = true;
              })
              .catch((errors) => {
                vm.wait = false;
                if (errors.response.data.errors.image) {
                  vm.imageError = errors.response.data.errors.image[0];
                }
                Vue.toasted.error("Something went wrong!! Try again.", {
                  position: "top-center",
                  duration: 5000,
                });
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

<style scoped>
.picture-preview {
  position: static;
}
</style>
