<template>
  <div>
    <transition name="slide-fade">
      <div v-if="descriptionStatus">
        <button type="button" class="btn btn-primary" @click="editDescription()">Edit Description</button>
        <h1>Your Description</h1>
        <p>{{descriptionFromServer}}</p>
      </div>
    </transition>
    <form @submit.prevent="getFormData()" v-if="descriptionStatus === false">
      <div
        class="form-group"
        :class="{
                        'has-error':
                            errors.has('descriptionError') || descriptionError != ''
                    }"
      >
        <label for="exampleInputEmail1">Describe Your College</label>

        <input
          id="description"
          v-model="formData.description"
          v-validate="'required'"
          data-vv-delay="20"
          name="description"
          type="text"
          :class="{
                            'form-control': true,
                            'is-invalid': errors.has('description')
                        }"
          placeholder="Describe your school/college"
        />
        <span v-show="errors.has('description')" class="text-danger">
          {{
          errors.first("description")
          }}
        </span>
        <span v-show="descriptionError != ''" class="help is-danger">
          {{
          descriptionError
          }}
        </span>
      </div>
      <button
        type="button"
        class="btn btn-success"
        v-if="descriptionFromServer != ''"
        @click="goBack()"
      >Go Back</button>
      <button type="submit" class="btn btn-primary">Submit</button>
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
        description: ""
      },
      url: "api/description",
      descriptionError: ""
    };
  },
  mounted() {
    this.getDescriptionDataFromServer();
  },
  methods: {
    getDescriptionDataFromServer() {
      axios
        .get(this.url)
        .then(response => {
          if (response.data.data[0]["description"] != null) {
            this.descriptionFromServer = response.data.data[0]["description"];
            this.descriptionStatus = true;
          }
        })
        .catch(errors => {
          console.log(errors);
        });
    },
    getFormData() {
      this.$validator.validate().then(result => {
        if (result) {
          if (this.websiteLinkFromServer != "")
            this.url = "api/description/edit";
          console.log(this.url);
          axios
            .post(this.url, this.formData)
            .then(response => {
              if (response.data.message === true) {
                Vue.toasted.success("Website is updated", {
                  position: "top-center",
                  duration: 5000
                });
                this.descriptionFromServer =
                  response.data.data[0]["description"];
                this.descriptionStatus = true;
              }
            })
            .catch(errors => {
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
    }
  }
};
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>