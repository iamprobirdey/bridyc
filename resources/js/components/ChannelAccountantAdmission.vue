<template>
  <div>
    <h1>Admission</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      channelId: "",
    };
  },
  props: {
    channelid: {
      type: Number,
      default: null,
    },
  },
  created() {
    this.channelId = this.channelid;
  },
  mounted() {},
  methods: {},
};
</script>
