<template>
  <div>
    <div class="row mb-5 mx-auto">
      <div class="col-sm-4">
        <icon></icon>
      </div>
      <div class="col-sm-8">
        <cover></cover>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-4 mb-5">
        <website></website>
      </div>
      <div class="col-sm-8">
        <description></description>
      </div>
    </div>
    <div class="container mt-5">
      <infrastructure></infrastructure>
    </div>
    <div class="row mt-5">
      <div class="col-sm-6">
        <standard></standard>
      </div>
      <div class="col-sm-6">
        <board></board>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-sm-6">
        <social></social>
      </div>
      <div class="col-sm-6">
        <college :channel="channelData"></college>
      </div>
    </div>
    <div class="container mt-5 ml-0 w-50">
      
        <phone :user="userData"></phone>
      
    </div>
  </div>
</template>

<script>
import website from "./channel/website.vue";
import description from "./channel/description.vue";
import cover from "./channel/cover.vue";
import icon from "./channel/icon.vue";
import infrastructure from "./channel/infrastructure.vue";
import standard from "./channel/standard.vue";
import board from "./channel/board.vue";
import social from "./channel/social.vue";
import college from "./channel/college.vue";
import phone from "./channel/phone.vue";
export default {
  data() {
    return {
      websiteLink: "",
      websiteLinkError: "",
      userData: {},
      channelData: [],
      userData: {},
    };
  },
  props: {
    channel: {
      type: Array,
      default: null,
    },
    user: {
      type: Object,
      default: null,
    },
  },
  created() {
    this.channelData = this.channel;
    this.userData = this.user;
  },
  mounted() {},
  methods: {},
  components: {
    website,
    description,
    cover,
    icon,
    infrastructure,
    standard,
    board,
    social,
    college,
    phone,
  },
};
</script>

<style>
</style>
