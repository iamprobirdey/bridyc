<template>
  <div>
    <div class="row">
      <div class="col-sm-6">
        <website></website>
      </div>
      <div class="col-sm-6">
        <description></description>
      </div>
      <div class="col-sm-6">
        <cover></cover>
      </div>
      <div class="col-sm-6">
        <icon></icon>
      </div>
      <div class="col-sm-12">
        <infrastructure></infrastructure>
      </div>
      <div class="col-sm-6">
          <standard></standard>
      </div>
      <div class="col-sm-6">
          <board></board>
      </div>
      <div class="col-sm-6">
          <social></social>
      </div>
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

<style></style>
