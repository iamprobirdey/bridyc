<template>
  <div class="mb-3">
    <div v-if="userImageStatus">
      <img
        height="150"
        width="152"
        :src="domainUrl + '/media/channel/' + userId + '/avatar/' + userImage"
        alt="icon image"
      />
      <!--
                        :srcset="domainUrl+'/media/channel/'+userId+'/m-'+userImage+','+domainUrl+'/media/channel/'+userId+'/s-'+userImage"
                     -->

      <button @click="editTheIcon()" class="btn">
        <i class="fa fa-pencil" aria-hidden="true"></i> Change Logo
      </button>
    </div>

    <div v-if="userImageStatus === false">
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
          drag: 'Upload your logo',
        }"
        @change="onChange"
        name="image"
      ></picture-input>
      <div class="btnsuca">
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
    </div>
  </div>
</template>

<script>
import PictureInput from "vue-picture-input";
export default {
  data() {
    return {
      imageData: "",
      url: "api/icon",
      imageError: "",
      userImage: "",
      userImageStatus: false,
      userId: null,
      url: "/api/icon/upload",
      domainUrl: location.origin,
    };
  },
  mounted() {
    this.getImageData();
  },
  methods: {
    getImageData() {
      axios
        .get("/api/icon")
        .then((response) => {
          this.userImage = response.data.image;
          this.userId = response.data.userId;
          if (this.userImage != null) this.userImageStatus = true;
        })
        .catch((errors) => {
          Vue.toasted.error("Something went wrong", {
            position: "top-center",
            duration: 5000,
          });
        });
    },
    onChange(image) {
      if (this.$refs.pictureInput.image)
        this.imageData = this.$refs.pictureInput.image;
    },
    onImageSubmit() {
      if (this.imageData != "") {
        const formData = new FormData();
        formData.append("image", this.imageData);
        axios
          .post(this.url, formData)
          .then((response) => {
            onUploadProgress: (progressEvent) => {
              console.log(progressEvent.loaded / progressEvent.total);
            };
            this.userImage = response.data.image;
            this.userImageStatus = true;
          })
          .catch((errors) => {
            if (errors.response.data.errors.image) {
              this.imageError = errors.response.data.errors.image[0];
            }
          });
      }
    },
    editTheIcon() {
      this.userImageStatus = false;
      this.imageData = this.userImage;
    },
    canTheEdit() {
      this.userImageStatus = true;
    },
  },
  components: {
    PictureInput,
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
</style>
