<template>
  <div class="profile mx-auto px-lg-5">
    <avatar :user="userData"></avatar>
    <div class="mt-5">
      <username :username="userData.username" :id="userData.id"></username>
    </div>
    <br />
    <br />
    <br />
    <div class="shadow py-5 mt-n4 mx-lg-5">
      <div class="container mx-lg-5 px-md-5">
        <address-for-teacher
          :states="statesData"
          :districts="districtsData"
          :villages="villagesData"
          :userinformation="userInformationData"
          :id="userData.id"
        ></address-for-teacher>
      </div>
      <div class="mt-5 pt-3 mb-5 mx-lg-5 text-center">
        <subject
          :subjects="subjectsData"
          :studentssubject="studentsubjectsData"
          :id="userData.id"
        ></subject>
      </div>
      <hr />
      <div class="row mt-5 mx-0">
        <div>
          <channel
            :userinstitute="userinstituteData"
            :user="userData"
            :channel="channelsData"
          ></channel>
        </div>
        <!--div class="col-sm-6">
          <phone :user="userData"></phone>
        </div-->
      </div>
    </div>
  </div>
</template>

<script>
import username from "./teacher/profile/username.vue";
import address from "./teacher/profile/address.vue";
import subject from "./teacher/profile/subject.vue";
import avatar from "./teacher/profile/avatar.vue";
import channel from "./teacher/profile/channel.vue";
import phone from "./teacher/profile/phone.vue";
export default {
  data() {
    return {
      userData: {},
      channelsData: [],
      statesData: [],
      districtsData: [],
      villagesData: [],
      subjectsData: [],
      studentsubjectsData: [],
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
    subjects: {
      type: Array,
      default: null,
    },
    studentsubjects: {
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
    //this.standardsData = this.standards;
    this.subjectsData = this.subjects;
    this.studentsubjectsData = this.studentsubjects;
    this.userInformationData = this.userinformation;
    this.userinstituteData = this.userinstitute;
  },
  mounted() {
    console.log(this.userData);
  },
  components: {
    username,
    "address-for-teacher": address,
    subject,
    avatar,
    channel,
    phone,
  },
};
</script>
