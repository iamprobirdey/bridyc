<template>
  <div>
    Hi Cropper Test
    <cropper
      class="upload-example-cropper"
      ref="cropper"
      :src="image"
      @change="change"
    />
    <div class="button-wrapper">
      <span class="button" @click="$refs.file.click()">
        <input
          type="file"
          ref="file"
          @change="loadImage($event)"
          accept="image/*"
        />
        Load image
      </span>
    </div>
    <button class="btn btn-secondary" @click="uploadImage">Submit</button>
  </div>
</template>

<script>
import { Cropper } from "vue-advanced-cropper";
import "vue-advanced-cropper/dist/style.css";
export default {
  data() {
    return {
      image:
        "https://images.unsplash.com/photo-1591273531346-ba9262aa2da6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80",
      canvas: {},
      //image: 'https://images.unsplash.com/photo-1591273531346-ba9262aa2da6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80',
    };
  },
  components: {
    Cropper,
  },
  methods: {
    change({ coordinates, canvas }) {
      console.log(coordinates);
      console.log(canvas);
    },
    uploadImage() {
      const { canvas } = this.$refs.cropper.getResult();
      if (canvas) {
        const form = new FormData();
        canvas.toBlob((blob) => {
          form.append("file", blob);
          // You can use axios, superagent and other libraries instead here
          fetch("http://example.com/upload/", {
            method: "POST",
            body: form,
          });
          // Perhaps you should add the setting appropriate file format here
        }, "image/jpeg");
      }
    },
    loadImage(event) {
      // Reference to the DOM input element
      var input = event.target;
      // Ensure that you have a file before attempting to read it
      if (input.files && input.files[0]) {
        // create a new FileReader to read this image and convert to base64 format
        var reader = new FileReader();
        // Define a callback function to run, when FileReader finishes its job
        reader.onload = (e) => {
          // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
          // Read image as base64 and set to imageData

          this.image = e.target.result;
        };
        // Start the reader job - read file as a data url (base64 format)
        reader.readAsDataURL(input.files[0]);
      }
    },
  },
};
</script>

<style scoped>
.upload-example-cropper {
  border: solid 1px #eee;
  height: 300px;
  width: 80%;
}

.button-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 17px;
}

.button {
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  background: #3fb37f;
  cursor: pointer;
  transition: background 0.5s;
}

.button:hover {
  background: #38d890;
}

.button input {
  display: none;
}
</style>
