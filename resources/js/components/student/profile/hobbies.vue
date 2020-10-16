<template>
  <div>
    <div v-if="hobbiesEntryChecker">
      Field of Interest:
      <button
        class="btn mt-n2 edit-btn"
        @click="editThehobbie()"
        data-toggle="tooltip"
        title="Edit"
      >
        <i class="fa fa-pencil" aria-hidden="true"></i>
      </button>
      <div>
        <button
          class="btn btn-sm btnsubjects m-1"
          v-for="(hobbie, index) in studentshobbiesData"
          :key="index"
        >
          {{ hobbie.name }}
        </button>
      </div>
    </div>
    <div v-if="!hobbiesEntryChecker">
      <multiselect
        v-model="value"
        :options="hobbiesData"
        track-by="name"
        :custom-label="standardNameOnly"
        :multiple="true"
        tag-placeholder="Select classes of your hobbies"
        :option-height="104"
      ></multiselect>
      <span v-show="serverError != ''" class="text-danger text-center">{{
        serverError
      }}</span>
      <br />
      <button class="btn btn-warning" @click="cancelTheForm()">Cancel</button>
      <button
        type="submit"
        class="btn btnsubmit mt-n2"
        @click="submitSubjectsData()"
      >
        Submit
      </button>
    </div>
  </div>
</template>
<script>
import Multiselect from "vue-multiselect";
export default {
  data() {
    return {
      value: [],
      hobbiesData: [],
      studentshobbiesData: [],
      hobbiesEntryChecker: true,
      selectedHobbiesValueStored: [],
      serverError: "",
      userName: "",
    };
  },
  props: {
    hobbies: {
      type: Array,
      default: null,
    },
    studentshobbies: {
      type: Array,
      default: null,
    },
    username: {
      type: String,
      default: null,
    },
  },
  created() {
    this.hobbiesData = this.hobbies;
    this.studentshobbiesData = this.studentshobbies;
    this.userName = this.username;
  },
  mounted() {
    if (this.studentshobbiesData.length > 0) {
      this.hobbiesEntryChecker = true;
      this.theSubjectContainer();
    }
  },
  methods: {
    cancelTheForm() {
      this.hobbiesEntryChecker = true;
    },
    standardNameOnly(hobby) {
      return `${hobby.name}`;
    },
    submitSubjectsData() {
      if (this.value.length) {
        let formData = {
          hobby_id: [],
        };
        this.value.map((item) => {
          formData.hobby_id.push(item.id);
        });
        axios
          .post("/api/profile/edit/hobbies/" + this.userName, formData)
          .then((response) => {
            this.studentshobbiesData = [];
            this.studentshobbiesData = response.data.data;
            console.log(response.data.data);
            this.hobbiesEntryChecker = true;
            this.theSubjectContainer();
          })
          .catch((errors) => {
            Vue.toasted.error("Something went wrong", {
              position: "top-center",
              duration: 5000,
            });
            if (errors.response.data.errors.id) {
              this.serverError = errors.response.data.errors.id[0];
            }
          });
      } else {
        Vue.toasted.error("Field is empty", {
          position: "top-center",
          duration: 5000,
        });
      }
    },
    isEqual(items) {
      let counter = 0;
      items.map((item) => {
        this.selectedHobbiesValueStored.map((data) => {
          if (item === data) {
            counter++;
          }
        });
      });

      if (
        items.length > this.selectedHobbiesValueStored ||
        this.selectedHobbiesValueStored.length === 0 ||
        this.selectedHobbiesValueStored.length != counter
      )
        return true;
      return false;
    },
    theSubjectContainer() {
      this.value = [];
      if (this.studentshobbiesData != null) {
        this.hobbiesData.map((item) => {
          this.studentshobbiesData.map((data) => {
            if (data.name === item.name) {
              this.value.push(item);
              this.selectedHobbiesValueStored.push(data.id);
            }
          });
        });
      }
    },
    editThehobbie() {
      this.hobbiesEntryChecker = false;
    },
  },
  components: {
    Multiselect,
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

