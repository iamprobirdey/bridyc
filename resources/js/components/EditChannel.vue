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
      <div class="mt-5">
          <social></social>
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
export default {
  data() {
    return {
      websiteLink: "",
      websiteLinkError: "",
      userData: {}
    };
  },
  created() {},
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
    social
  }
};
</script>

<style>
</style>
