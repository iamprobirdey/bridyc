<template>
  <div>
    <div>
      <ul class="nav">
        <li v-for="(image, index) in channelData.college_image" :key="index">
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
            Delete college image
          </button>
        </li>
      </ul>
    </div>
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
        size="10"
        button-class="btn"
        :custom-strings="{
          upload: '<h1>Bummer!</h1>',
          drag: 'Upload Infrastructure images',
        }"
        @change="onChange"
        name="image"
      ></picture-input>
      <div class="btnsuca mt-2 text-center">
        <button
          v-if="imageData != ''"
          type="button"
          class="btn btnsubmit mt-n2"
          @click="onImageSubmit()"
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
      <span v-show="imageError" class="text-danger text-center">{{ imageError }}</span>
    </div>
  </div>
</template>

<script>
import PictureInput from "vue-picture-input";
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
  },
  methods: {
    onChange(image) {
      if (this.$refs.pictureInput.image)
        this.imageData = this.$refs.pictureInput.image;
    },
    onImageSubmit() {
      if (this.imageData != "") {
        const formData = new FormData();
        formData.append("image", this.imageData);
        axios
          .post("/api/college/image/upload/" + this.channelData.id, formData)
          .then((response) => {
            this.channelData.college_image = response.data.image;
            this.collegeImageEntry = false;
            this.imageData = "";
          })
          .catch((errors) => {
            if (errors.response.data.errors.image) {
              this.imageError = errors.response.data.errors.image[0];
            }
          });
      }
    },
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
    },
    canTheEdit() {
      this.collegeImageEntry = false;
    },
  },
};
</script>
