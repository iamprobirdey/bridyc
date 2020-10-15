<template>
  <div>
    <div v-if="descriptionStatus" class="desctext shadow">
      <h4 class="pl-2">Institute Description:</h4>
      <p class="pl-2">{{ descriptionFromServer }}</p>
      <button
        type="button"
        class="btn btnwebdes rounded-0"
        @click="editDescription()"
      >
        <i class="fa fa-pencil" aria-hidden="true"></i> Edit Description
      </button>
    </div>
    <form @submit.prevent="getFormData()" v-if="descriptionStatus === false">
      <div
        class="form-group"
        :class="{
          'has-error': errors.has('descriptionError') || descriptionError != '',
        }"
      >
        <label for="exampleInputEmail1">Describe Your Institute</label>

        <textarea
          rows="5"
          id="description"
          v-model="formData.description"
          v-validate="'required'"
          data-vv-delay="20"
          name="description"
          type="text"
          :class="{
            'form-control': true,
            'is-invalid': errors.has('description'),
          }"
          placeholder="Briefly describe your institute"
        ></textarea>
        <span v-show="errors.has('description')" class="text-danger">
          {{ errors.first("description") }}
        </span>
        <span v-show="descriptionError != ''" class="help is-danger">
          {{ descriptionError }}
        </span>
      </div>
      <button
        type="button"
        class="btn btn-success"
        v-if="descriptionFromServer != ''"
        @click="goBack()"
      >
        <i class="fa fa-long-arrow-left mt-n2 p-1" aria-hidden="true"></i>Back
      </button>
      <button type="submit" class="btn btnsubmit mt-n3">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      descriptionFromServer: "",
      descriptionStatus: false,
      formData: {
        description: "",
      },
      url: "/api/description",
      descriptionError: "",
    };
  },
  mounted() {
    this.getDescriptionDataFromServer();
  },
  methods: {
    getDescriptionDataFromServer() {
      axios
        .get(this.url)
        .then((response) => {
          if (response.data.data.description != null) {
            this.descriptionFromServer = response.data.data.description;
            this.descriptionStatus = true;
          }
        })
        .catch((errors) => {
          console.log(errors);
        });
    },
    getFormData() {
      this.$validator.validate().then((result) => {
        if (result) {
          if (this.descriptionFromServer != "")
            this.url = "/api/description/edit";
          axios
            .post(this.url, this.formData)
            .then((response) => {
              if (response.data.message === true) {
                Vue.toasted.success("Description is updated", {
                  position: "top-center",
                  duration: 5000,
                });
                this.descriptionFromServer = response.data.data.description;
                this.descriptionStatus = true;
              }
            })
            .catch((errors) => {
              this.descriptionError = errors.response.data.description[0];
            });
        }
      });
    },
    editDescription() {
      this.formData.description = this.descriptionFromServer;
      this.descriptionStatus = false;
    },
    goBack() {
      this.descriptionStatus = true;
    },
  },
};
</script>

<style scoped>
.desctext {
  background-color: white;
  color: black;
}
</style>
