<template>
  <div>
    <div v-if="teachersRequestData != null">
      <h1>
        You have a
        <span class="text-danger">pending</span> request
      </h1>
      <div v-for="(teacher, index) in teachersRequestData" :key="index">
        <div v-if="teacher.request === 'in-progress'">
          <h3>Teacher name: {{ teacher.user.name }}</h3>
          <button
            class="btn btn-primary"
            @click="acceptTheTeacher(teacher, index)"
          >
            Accept
          </button>
          <button
            class="btn btn-danger"
            @click="deleteTheTeacher(teacher, index)"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
    <h1>Your school teachers</h1>
    <h3>Teacher has left your school for some reason?</h3>
    <span>Just remove them from the list</span>
    <div v-for="(teacher, index) in teachersData" :key="index">
      <h3>Teacher name: {{ teacher.user.name }}</h3>
      <h4>Teacher email id: {{ teacher.user.email }}</h4>
      <button
        class="btn btn-danger"
        @click="deleteFromChannel(teacher.id, index)"
      >
        Delete
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teachersData: {},
      teachersRequestData: {},
      channelId: "",
      formData: {
        name: "",
        email: "",
        password: "",
      },
      serverErrors: {
        name: "",
        email: "",
        password: "",
      },
      additionUrl: "",
      url: location.origin + "/api/",
    };
  },
  props: {
    teacher: {
      type: Array,
      default: null,
    },
  },
  created() {
    this.teachersData = this.teacher[0].teacher;
    this.teachersRequestData = this.teacher[0].userchannelrequest;
    this.channelId = this.teacher[0].id;
    console.log(this.teachersData);
  },
  mounted() {
    console.log(this.teachersData);
  },
  methods: {
    deleteFromChannel(id, index) {
      this.additionUrl = "/delete/teacher/";
      axios
        .post(this.url + this.additionUrl + id)
        .then((response) => {
          if (response.data.message === true) {
            Vue.toasted.success(
              "Teacher account from your school is destroyed",
              {
                position: "top-center",
                duration: 5000,
              }
            );
          }
          this.teachersData.splice(index, 1);
        })
        .catch((errors) => {
          Vue.toasted.error("Something went wrong", {
            position: "top-center",
            duration: 5000,
          });
        });
    },
    acceptTheTeacher(teacher, index) {
      axios
        .post("/api/accept/request/of/teacher/" + teacher.id)
        .then((response) => {
          if (response.data.message === true) {
            Vue.toasted.success("You have successfully accepted the request", {
              position: "top-center",
              duration: 5000,
            });
            this.teachersRequestData.splice(index, 1);
            window.location.reload();
          }
        })
        .catch((errors) => {
          Vue.toasted.error("Something went wrong", {
            position: "top-center",
            duration: 5000,
          });
        });
    },
    deleteTheTeacher(teacher, index) {
      axios
        .post("/api/delete/request/of/teacher/" + teacher.id)
        .then((response) => {
          if (response.data.message === true) {
            Vue.toasted.success("You have successfully deleted the request", {
              position: "top-center",
              duration: 5000,
            });
            this.teachersRequestData.splice(index, 1);
          }
        })
        .catch((errors) => {
          Vue.toasted.error("Something went wrong", {
            position: "top-center",
            duration: 5000,
          });
        });
    },
  },
};
</script>
