<template>
  <section>
    <!-- college section starts here-->
    <div class="institute container-fluid pt-5">
      <br />
      <div class="row">
        <div
          class="card institutecard shadow mx-auto"
          v-for="(channel, index) in channelData"
          :key="index"
        >
          <div class="card-body w-100">
            <img
              :src="
                channel.icon_avatar === 'institute-logo-default.jpg'
                  ? '/images/institute-logo-default.jpg'
                  : domainUrl +
                    '/media/channel/' +
                    channel.user_id +
                    '/avatar/' +
                    channel.icon_avatar
              "
              alt="college logo"
              class="inslogo"
            />
            <h4 class="card-title mt-n5 text-center text-capitalize">
              {{ channel.title }}
            </h4>
            <p class="card-text mt-n2 district-name text-capitalize">
              Dist: {{ channel.district.name }}
            </p>
            <p
              class="card-text destext d-none d-md-block mt-3 mx-1"
              v-if="channel.description != null"
            >
              {{ channel.description.substr(0, 100) }}...
            </p>
          </div>
          <a
            :href="domainUrl + '/channel/' + channel.slug"
            class="btn btnvisit mt-n3"
            >Visit Institute
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i
          ></a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      channelData: [],
      domainUrl: location.origin,
    };
  },
  created() {
    if (sessionStorage.getItem("all-channels") === null) {
      this.getChannelsData();
    } else {
      this.getChannelsDataFromSession();
    }
  },
  mounted() {},
  methods: {
    getChannelsData() {
      axios
        .get("get/all/channel/data")
        .then((response) => {
          if (response.data.channel_data) {
            this.channelData = response.data.channel_data;
            window.sessionStorage.setItem(
              "all-channels",
              JSON.stringify(this.channelData)
            );
          }
        })
        .catch((errors) => {
          Vue.toasted.error("Something went wrong", {
            position: "top-center",
            duration: 5000,
          });
        });
    },
    getChannelsDataFromSession() {
      this.channelData = JSON.parse(
        window.sessionStorage.getItem("all-channels")
      );
    },
  },
};
</script>

<style>
</style>
