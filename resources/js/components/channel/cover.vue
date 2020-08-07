<template>
  <div>
        <div v-if="userImageStatus">
            <img height="200" width="200" :src="domainUrl+'/media/channel/'+userId+'/'+userImage"
                    alt="icon image"
                    >
                    <!--
                        :srcset="domainUrl+'/media/channel/'+userId+'/m-'+userImage+','+domainUrl+'/media/channel/'+userId+'/s-'+userImage"
                     -->
            <button @click="editTheIcon()" class="btn btn-primary">Edit</button>
        </div>

        <div  v-if="userImageStatus === false">
            <picture-input
                ref="pictureInput"
                width="200"
                height="200"
                margin="16"
                accept="image/jpeg, image/png"
                size="10"
                button-class="btn"
                :custom-strings="{
                        upload: '<h1>Bummer!</h1>',
                        drag: 'Drag a 😺 GIF or GTFO'
                    }"
                @change="onChange"
            ></picture-input>
            <button
                v-if="imageData != ''"
                type="button"
                class="btn btn-primary"
                @click="onImageSubmit()"
            >Submit</button>
            <button
                v-if="userImage != null"
                @click="canTheEdit()"
                class="btn btn-success">
                Cancel
            </button>
            <span v-show="imageError " class="text-danger">{{ imageError }}</span>
        </div>
  </div>
</template>

<script>
import PictureInput from "vue-picture-input";
export default {
  data() {
    return {
        userImage : '',
        userImageStatus : false,
        userId: null,
        imageData : "",
        selectedImagefile : null,
        imageError : "",
        url : 'api/cover/upload',
        domainUrl: location.origin
    };
  },
   components: {
     PictureInput
  },
  mounted() {
    this.getCoverData();
  },
  methods: {
    getCoverData() {
      axios
        .get('api/cover')
        .then(response => {
            this.userImage = response.data.image;
            this.userId = response.data.userId;
            if(this.userImage != null)this.userImageStatus = true;
        })
        .catch(errors => {
            Vue.toasted.error("Something went wrong", {
                position: "top-center",
                duration: 5000
            });
        });
    },
    onImageSubmit() {
        if(this.imageData != ''){
            const formData = new FormData();
            formData.append("image", this.imageData);
            axios
              .post(this.url, formData)
              .then(response => {
                onUploadProgress: progressEvent => {
                  console.log(progressEvent.loaded / progressEvent.total);
                };
                this.userImage = response.data.image;
                this.userImageStatus = true;
              })
              .catch(errors => {
                if (errors.response.data.errors.image) {
                  this.imageError = errors.response.data.errors.image[0];
                }
              });
        }
    },
    onChange(image) {
      if (this.$refs.pictureInput.image) this.imageData = this.$refs.pictureInput.image;
    },
    editTheIcon(){
        this.userImageStatus = false;
    },
     canTheEdit(){
        this.userImageStatus = true;
    }
  }
};
</script>

<style>
</style>
