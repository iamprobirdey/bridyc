<template>
  <div>
    <div v-if="userImageStatus">
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
      <button @click="editTheIcon()" class="btn">
        <i class="fa fa-pencil" aria-hidden="true"></i> Change Cover Photo
      </button>
    </div>

    <div v-if="!userImageStatus">
      <!-- <picture-input
        ref="pictureInput"
        width="250"
        height="150"
        margin="16"
        accept="image/jpeg, image/png"
        size="7"
        button-class="btn"
        :custom-strings="{
          upload: '<h1>Bummer!</h1>',
          drag: 'Upload a cover picture',
        }"
        @change="onChange"
        :crop="true"
      ></picture-input> -->
      <croppa
        v-model="croppa"
        placeholder="Choose an image"
        :placeholder-font-size="20"
        :width="250"
        :height="250"
        :quality="4"
        :zoom-speed="3"
        :accept="'image/*'"
        :file-size-limit="13865103"
        @file-type-mismatch="onFileTypeMismatch"
        @file-size-exceed="onFileSizeExceed"
        :initial-image="initialImage"
        :placeholder="'Choose an avatar'"
      >
      </croppa>

      <button class="btn btn-default" @click="croppa.rotate()">
        <i class="icons8-rotate-right"></i> 90deg
      </button>
      <button class="btn btn-default" @click="croppa.rotate(2)">
        <i class="icons8-3d-rotate-3"></i> 180deg
      </button>
      <button class="btn btn-default" @click="croppa.rotate(-1)">
        <i class="icons8-rotate-left-2"></i> -90deg
      </button>
      <button class="btn btn-default" @click="croppa.flipX()">
        <i class="icons8-flip-vertical"></i> flip-X
      </button>
      <button class="btn btn-default" @click="croppa.flipY()">
        <i class="icons8-flip-horizontal"></i> flip-Y
      </button>

      <div v-if="wait" class="text-center mt-2">
        <div class="spinner-border text-warning" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>

      <div class="btnsuca mt-2" v-if="!wait">
        <!-- <button
          v-if="imageData != ''"
          type="button"
          class="btn btnsubmitcover rounded-0"
          @click="onImageSubmit()"
        >
          Submit
        </button> -->
        <button
          type="button"
          class="btn btnsubmitcover rounded-0"
          @click="onCroppaSubmit()"
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
  </div>
</template>

<script>
import PictureInput from "vue-picture-input";
import Compressor from "compressorjs";
import Croppa from "vue-croppa";
import "vue-croppa/dist/vue-croppa.css";
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
      initialImage: null,
      croppa: {},
    };
  },
  components: {
    PictureInput,
    Compressor,
    croppa: Croppa.component,
  },
  mounted() {
    this.getCoverData();
  },
  methods: {
    onFileTypeMismatch(file) {
      Vue.toasted.error(
        "Invalid file type. Please choose a jpeg or png file.",
        {
          position: "top-center",
          duration: 3000,
        }
      );
    },
    onFileSizeExceed(file) {
      console.log(file);
      Vue.toasted.error(
        "File size exceeds. Please choose a file smaller than 10mb. " + file,
        {
          position: "top-center",
          duration: 3000,
        }
      );
    },
    getCoverData() {
      axios
        .get("/api/cover")
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
      //if (this.imageData != "") {
      this.wait = true;
      let vm = this;
      new Compressor(this.b64toBlob(this.imageData), {
        quality: 0.7,
        success(result) {
          const formData = new FormData();
          formData.append("image", result, result.name);
          axios
            .post(vm.url, formData)
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
      //}
    },

    onCroppaSubmit() {
      this.imageData = this.croppa.generateDataUrl();
      this.onImageSubmit();
    },

    onChange(image) {
      if (this.$refs.pictureInput.image)
        this.imageData = this.$refs.pictureInput.image;
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
</style>
