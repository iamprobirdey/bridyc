<template>
  <div>
    <h4 class="text-center">INSTITUTE'S ACHIEVEMENTS</h4>
    <br />
    <h6 class="d-inline">Add your institute's achievements here</h6>
    <button class="btn btnadd p-1 ml-1 rounded-0" @click="addAchievement()">
      <i class="fa fa-plus" aria-hidden="true"></i>
    </button>
    <div v-for="(achievement, index) in achievementData" :key="index">
      <div class="card shadow mx-auto sidebar-facard">
        <img
          :src="
            baseUrl +
            'media/channel/' +
            userId +
            '/achievement/' +
            achievement.image_path
          "
        />
        <div class="card-body mt-n1">
          <h6 class="card-title my-n1">{{ achievement.title }}</h6>
          <p class="card-text">
            {{ achievement.description.substr(1, 20) }}
          </p>
          <p class="card-text">
            {{ achievement.date }}
          </p>
        </div>
      </div>
      <div class="text-center">
        <button
          class="btn mb-5 editachieve"
          data-toggle="tooltip"
          data-placement="right"
          title="Edit"
          @click="editTheForm(achievement, index)"
        >
          <i class="fa fa-pencil" aria-hidden="true"></i>
        </button>
      </div>
    </div>
    <br />
    <div class="mt-5" v-if="openAchievementForm">
      <form @submit.prevent="achievementSubmit()">
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
            drag: 'Drag a 😺 GIF or GTFO',
          }"
          @change="onChange"
        ></picture-input>
        <span v-show="serverErrors.image_path != ''" class="text-danger">{{
          serverErrors.image_path
        }}</span>

        <br />
        <div
          class="form-group row mx-lg-5"
          :class="{
            'has-error':
              errors.has('serverErrors.title') || serverErrors.title != '',
          }"
        >
          <label class="col-sm-3 col-form-label text-right"
            >Achievement Title :</label
          >
          <input
            class="col-sm-9"
            v-model="formData.title"
            v-validate="'required'"
            data-vv-delay="20"
            name="title"
            type="text"
            :class="{ 'form-control': true, 'is-invalid': errors.has('title') }"
            placeholder="Example: Student name, Institute's team achievement"
          />
          <span v-show="errors.has('title')" class="text-danger mx-auto">{{
            errors.first("title")
          }}</span>
          <span
            v-show="serverErrors.title != ''"
            class="help is-danger mx-auto"
            >{{ serverErrors.title }}</span
          >
        </div>

        <div
          class="form-group row mx-lg-5"
          :class="{
            'has-error':
              errors.has('serverErrors.descriptions') ||
              serverErrors.descriptions != '',
          }"
        >
          <label class="col-sm-3 col-form-label text-right">
            Achievement Description :</label
          >
          <input
            class="col-sm-9"
            v-model="formData.description"
            v-validate="'required'"
            data-vv-delay="20"
            name="descriptions"
            type="text"
            :class="{
              'form-control': true,
              'is-invalid': errors.has('descriptions'),
            }"
            placeholder="Describe achievement in seven words"
          />
          <span
            v-show="errors.has('descriptions')"
            class="text-danger mx-auto"
            >{{ errors.first("descriptions") }}</span
          >
          <span
            v-show="serverErrors.descriptions != ''"
            class="help is-danger mx-auto"
            >{{ serverErrors.descriptions }}</span
          >
        </div>
        <div
          class="form-group row mx-lg-5"
          :class="{
            'has-error': errors.has('date') || serverErrors.date != '',
          }"
        >
          <label class="col-sm-3 col-form-label text-right">
            Achievement Event Date :</label
          >
          <input
            class="col-sm-9"
            v-on:focus="serverErrors.date = ''"
            v-model="formData.date"
            v-validate="'required'"
            data-vv-delay="20"
            name="date"
            type="date"
            :max="todaysDate"
            :class="{ 'form-control': true, 'is-invalid': errors.has('date') }"
            placeholder="date"
          />
          <i v-show="errors.has('date')" class="is-invalid"></i>

          <span class="text-danger" v-show="errors.has('date')">{{
            errors.first("date")
          }}</span>
          <span v-show="serverErrors.date != ''" class="text-danger">{{
            serverErrors.date
          }}</span>
        </div>
        <div class="text-center">
          <button
            type="btn"
            class="btn btn-success rounded-0"
            @click="canCleSubmittion()"
          >
            Cancel
          </button>
          <button type="submit" class="btn btnsubmit mt-n2">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import PictureInput from "vue-picture-input";
export default {
  data() {
    return {
      achievementData: [],
      openAchievementForm: false,
      formData: {
        image_path: "",
        title: "",
        description: "",
        date: "",
      },
      serverErrors: {
        image_path: "",
        title: "",
        description: "",
        date: "",
      },
      channelId: "",
      additionUrl: "",
      url: location.origin + "/api/achievement/",
      baseUrl: location.origin + "/",
      editingUrlChecker: false,
      achievementId: "",
      achievementIndex: "",
      authValue: "",
      userId: "",
    };
  },
  props: {
    achievement: {
      type: Array,
      default: null,
    },
    userid: {
      type: Number,
      default: null,
    },
  },
  created() {
    this.userId = this.userid;
    this.achievementData = this.achievement[0].achievement;
    this.channelId = this.achievement[0].id;
    this.authValue = this.authId;
  },
  mounted() {},
  methods: {
    addAchievement() {
      this.openAchievementForm = true;
      this.formData.title = "";
      this.formData.description = "";
      this.formData.date = "";
    },
    achievementSubmit() {
      this.$validator.validate().then((result) => {
        if (result) {
          if (this.formData.image_path === "")
            this.serverErrors.image_path = "Image is required";
          let formUrl = "";
          if (this.editingUrlChecker) {
            this.additionUrl = "edit/";
            formUrl = this.url + this.additionUrl + this.achievementId;
          } else {
            this.additionUrl = "add/";
            formUrl = this.url + this.additionUrl;
          }
          axios
            .post(formUrl, this.formData)
            .then((response) => {
              if (response.data.message === true) {
                Vue.toasted.success("Achievement data is created", {
                  position: "top-center",
                  duration: 5000,
                });
                if (this.editingUrlChecker) {
                  this.achievementData.splice(this.achievementIndex, 1);
                }
                this.achievementData.push(response.data.data);
                this.openAchievementForm = false;
                this.editingUrlChecker = false;
              }
            })
            .catch((errors) => {
              Vue.toasted.error("Something went wrong", {
                position: "top-center",
                duration: 5000,
              });
            });
        }
      });
    },
    onChange(image) {
      if (this.$refs.pictureInput.image)
        this.formData.image_path = this.$refs.pictureInput.image;
    },
    editTheForm(data, index) {
      this.editingUrlChecker = true;
      this.formData.title = data.title;
      this.formData.description = data.description;
      this.formData.date = data.date;
      this.achievementId = data.id;
      this.openAchievementForm = true;
      this.achievementIndex = index;
    },
    canCleSubmittion() {
      this.editingUrlChecker = false;
      this.openAchievementForm = false;
    },
  },
  components: {
    PictureInput,
  },
};

$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
</script>

<style scoped></style>
