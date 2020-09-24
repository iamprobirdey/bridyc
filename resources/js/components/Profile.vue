<template>
  <div class="profile mx-auto">
    <avatar :user="userData"></avatar>
    <div>
      <username :username="userData.username" :id="userData.id"></username>
    </div>
    <br />
    <br />
    <br />
    <div class="shadow py-4">
      <div class="container">
        <address-for-student
          :channels="channelsData"
          :states="statesData"
          :districts="districtsData"
          :villages="villagesData"
          :standards="standardsData"
          :userinformation="userInformationData"
          :id="userData.id"
        ></address-for-student>
      </div>
      <div class="row mt-5 mx-auto">
        <div class="col-sm-6">
          <subject
            :subjects="subjectsData"
            :studentssubject="studentsubjectsData"
            :id="userData.id"
          ></subject>
        </div>

        <div class="col-sm-6 text-right">
          <hobby
            :hobbies="hobbiesData"
            :studentshobbies="studentHobbies"
            :username="userData.username"
          ></hobby>
        </div>
      </div>
      <div class="row mt-5 mx-auto">
        <div class="col-sm-6 text-right">
          <channel :userinstitute="userinstituteData" :user="userData" :channel="channelsData"></channel>
        </div>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
import username from "./student/profile/username.vue";
import address from "./student/profile/address.vue";
import subject from "./student/profile/subject.vue";
import hobby from "./student/profile/hobbies.vue";
import avatar from "./student/profile/avatar.vue";
import channel from "./student/profile/channel.vue";

export default {
  data() {
    return {
      userData: {},
      channelsData: [],
      statesData: [],
      districtsData: [],
      villagesData: [],
      standardsData: [],
      subjectsData: [],
      studentsubjectsData: [],
      hobbiesData: [],
      studentHobbies: [],
      userInformationData: {},
      userinstituteData: {},
    };
  },
  props: {
    user: {
      type: Object,
      default: null,
    },
    channels: {
      type: Array,
      default: null,
    },
    states: {
      type: Array,
      default: null,
    },
    districts: {
      type: Array,
      default: null,
    },
    villages: {
      type: Array,
      default: null,
    },
    standards: {
      type: Array,
      default: null,
    },
    subjects: {
      type: Array,
      default: null,
    },
    studentsubjects: {
      type: Array,
      default: null,
    },
    hobbies: {
      type: Array,
      default: null,
    },
    studenthobbies: {
      type: Array,
      default: null,
    },
    userinformation: {
      type: Object,
      default: null,
    },
    userinstitute: {
      type: Object,
      default: null,
    },
  },
  created() {
    this.userData = this.user;
    this.channelsData = this.channels;
    this.statesData = this.states;
    this.districtsData = this.districts;
    this.villagesData = this.villages;
    this.standardsData = this.standards;
    this.subjectsData = this.subjects;
    this.studentsubjectsData = this.studentsubjects;
    this.userInformationData = this.userinformation;
    this.hobbiesData = this.hobbies;
    this.studentHobbies = this.studenthobbies;
    this.userinstituteData = this.userinstitute;
  },
  methods: {},
  components: {
    username,
    "address-for-student": address,
    subject,
    hobby,
    avatar,
    channel,
  },
};
</script>

<style scoped>
.profile {
  margin-top: 70px;
  width: 700px;
}
</style>
