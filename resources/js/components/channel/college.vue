<template>
  <div>
    <div>
      <h4>Your Gallery (First five photos will be displayed)</h4>
      <ul class="nav">
        <li
          v-for="(image, index) in channelData.college_image"
          :key="index"
          class="m-2"
        >
          <img
            :src="
              domainUrl +
              '/media/channel/' +
              userId +
              '/college/' +
              image.image_path
            "
            height="120"
            width="120"
            alt="college infrastructure"
            class="border border-light m-1"
          />
          <button class="btn btn-danger" @click="deleteCollege(image, index)">
            Delete
          </button>
        </li>
      </ul>
    </div>
    <br />

    <button
      v-if="!collegeImageEntry"
      class="btn btnsubmit rounded-0"
      @click="insertImage()"
    >
      Insert images
    </button>

    <div v-if="collegeImageEntry">
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
          drag: 'Upload Infrastructure images',
        }"
        @change="onChange"
        name="image"
      ></picture-input>
      <div
        v-if="wait"
        class="spinner-border text-warning spin-icon spin-multiple"
        role="status"
      >
        <span class="sr-only">Loading...</span>
      </div>
      <div class="btnsuca mt-2 text-center" v-if="!wait">
        <button
          v-if="imageData != ''"
          type="button"
          class="btn btnsubmit mt-n2"
          @click="onImageSubmit()"
          :disabled="imageButtonDisable"
        >
          Submit
        </button>
        <button
          v-if="collegeImageEntry"
          @click="canTheEdit()"
          class="btn btn-success"
        >
          <i class="fa fa-times" aria-hidden="true"></i> Cancel
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
      imageData: "",
      imageError: "",
      collegeImageData: {},
      collegeImageEntry: false,
      channelData: [],
      userId: "",
      domainUrl: location.origin,
      imageButtonDisable: false,
      wait: false,
    };
  },
  props: {
    channel: {
      type: Array,
      default: null,
    },
  },
  created() {
    this.channelData = this.channel[0];
    console.log(this.channelData);
    this.userId = this.channel[0].user_id;
  },
  mounted() {},
  components: {
    PictureInput,
    Compressor,
  },
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
    onImageSubmit: _.debounce(function () {
      if (this.imageData != "") {
        this.wait = true;
        this.imageButtonDisable = true;
        let vm = this;
        new Compressor(this.b64toBlob(this.imageData), {
          quality: 0.7,
          success(result) {
            const formData = new FormData();
            formData.append("image", result, result.name);
            axios
              .post("/api/college/image/upload/" + vm.channelData.id, formData)
              .then((response) => {
                vm.channelData.college_image = response.data.image;
                vm.collegeImageEntry = false;
                vm.imageData = "";
                vm.imageButtonDisable = false;
                vm.wait = false;
              })
              .catch((errors) => {
                vm.imageButtonDisable = false;
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
    }, 500),
    deleteCollege(image, index) {
      axios
        .post("/api/delete/college/image/" + image.id)
        .then((response) => {
          if (response.data.message) {
            this.channelData.college_image.splice(index, 1);
            Vue.toasted.success("Image successfully deleted", {
              position: "top-center",
              duration: 5000,
            });
          }
        })
        .catch((errors) => {
          Vue.toasted.error("Image successfully deleted", {
            position: "top-center",
            duration: 5000,
          });
        });
    },
    insertImage() {
      this.collegeImageEntry = true;
      this.wait = false;
    },
    canTheEdit() {
      this.collegeImageEntry = false;
      this.wait = false;
    },
  },
};
</script>
