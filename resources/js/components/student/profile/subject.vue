<template>
  <div>
    <div v-if="subjectsEntryChecker">
      My Subjects:
      <button
        class="btn mt-n2 edit-btn"
        @click="editTheSubject()"
        data-toggle="tooltip"
        title="Edit"
      >
        <i class="fa fa-pencil" aria-hidden="true"></i>
      </button>
      <!--div class="card bg-info mb-2" v-for="(subject,index) in studentssubjectData"
          :key="index">
        <div class="card-body my-n3">
          {{subject.subject.name}}
        </div>
      </div-->
      <div>
        <button
          class="btn btn-sm btnsubjects m-1"
          v-for="(subject, index) in studentssubjectData"
          :key="index"
        >
          {{ subject.subject.name }}
        </button>
      </div>
    </div>
    <div v-if="!subjectsEntryChecker">
      <multiselect
        v-model="value"
        :options="subjectsData"
        track-by="name"
        :custom-label="standardNameOnly"
        :multiple="true"
        tag-placeholder="Select classes of your subjects"
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
      subjectsData: [],
      studentssubjectData: [],
      subjectsEntryChecker: true,
      selectedSubjectValueStored: [],
      serverError: "",
      userId: "",
    };
  },
  props: {
    subjects: {
      type: Array,
      default: null,
    },
    studentssubject: {
      type: Array,
      default: null,
    },
    id: {
      type: Number,
      default: null,
    },
  },
  created() {
    this.subjectsData = this.subjects;
    this.studentssubjectData = this.studentssubject;
    this.userId = this.id;
  },
  mounted() {
    if (this.studentssubjectData.length > 0) {
      this.subjectsEntryChecker = true;
      this.theSubjectContainer();
    }
  },
  methods: {
    cancelTheForm() {
      this.subjectsEntryChecker = true;
    },
    standardNameOnly(subject) {
      return `${subject.name}`;
    },
    submitSubjectsData() {
      if (this.value.length) {
        let subjectFormData = {
          subject_id: [],
        };
        this.value.map((item) => {
          subjectFormData.subject_id.push(item.id);
        });
        axios
          .post("/api/profile/edit/subject/" + this.userId, subjectFormData)
          .then((response) => {
            this.studentssubjectData = [];
            this.studentssubjectData = response.data.data;
            this.subjectsEntryChecker = true;
            this.theSubjectContainer();
          })
          .catch((errors) => {
            Vue.toasted.error("Something went wrong", {
              position: "top-center",
              duration: 5000,
            });
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
        this.selectedSubjectValueStored.map((data) => {
          if (item === data) {
            counter++;
          }
        });
      });
      if (
        items.length > this.selectedSubjectValueStored ||
        this.selectedSubjectValueStored.length === 0 ||
        this.selectedSubjectValueStored.length != counter
      )
        return true;
      return false;
    },
    theSubjectContainer() {
      this.value = [];
      if (this.studentssubjectData != null) {
        this.subjectsData.map((item) => {
          this.studentssubjectData.map((data) => {
            if (data.subject.name === item.name) {
              this.value.push(item);
              //this.selectedSubjectValueStored.push(data.subject.id);
            }
          });
        });
      }
    },
    editTheSubject() {
      this.subjectsEntryChecker = false;
    },
  },
  components: {
    Multiselect,
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

