<template>
  <div class="teacher-section">
    <div class="mb-5" v-if="teachersRequestData != ''">
      <h5>
        You have a
        <span class="text-danger">pending</span> request, please act!
      </h5>
      <div v-for="(teacher, index) in teachersRequestData" :key="index">
        <h3 class="text-capitalized">Faculty name: {{ teacher.user.name }}</h3>
        <button
          class="btn btn-success"
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
    <h3 class="text-uppercase">Faculty Members</h3>
    <p class="mb-n2 text-secondary">
      (If someone from the faculty left the institute, you may remove them from
      this section.)
    </p>
    <hr />
    <!--h3>Teacher has left your school for some reason?</h3>
    <span>Just remove them from the list</span-->
    <!--div class="row mx-0">
    <div class="mt-5" v-for="(teacher, index) in teachersData" :key="index">
      <img src="/images/teacher.jpg" alt="faculty member image">
      <h3>{{ teacher.user.name }}</h3>
      <h6>{{ teacher.user.email }}</h6>
      <button
        class="btn btn-danger"
        @click="deleteFromChannel(teacher.id, index)"
      >
        Delete
      </button>
    </div-->
    <div class="row mx-0 my-5">
      <div
        class="card shadow mx-auto sidebar-facard mb-4"
        v-for="(teacher, index) in teachersData"
        :key="index"
      >
        <img
          :src="
            teacher.user.avatar === 'default.webp'
              ? '/images/' + teacher.user.avatar
              : '/media/teacher/' +
                teacher.user.id +
                '/profile/s-' +
                teacher.user.avatar
          "
          alt="faculty member image"
        />
        <div class="card-body mt-n1">
          <h6 class="card-title my-n1 text-capitalized text-center">
            {{ teacher.user.name }}
          </h6>
          <p class="card-text mx-n3 text-center">
            {{ teacher.user.email }}
          </p>
        </div>
        <button
          class="btn btn-danger mt-5"
          @click="deleteFromChannel(teacher.id, index)"
        >
          Remove
        </button>
      </div>
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
      type: Object,
      default: null,
    },
  },
  created() {
    this.teachersData = this.teacher.teacher;
    this.teachersRequestData = this.teacher.userchannelrequest;
    this.channelId = this.teacher.id;
    console.log(this.teachersRequestData);
  },
  mounted() {},
  methods: {
    deleteFromChannel(id, index) {
      if (confirm("Are you sure?")) {
        axios
          .post("/api/delete/teacher/" + id)
          .then((response) => {
            if (response.data.message === true) {
              Vue.toasted.success(
                "Teacher account from your school is destroyed",
                {
                  position: "top-center",
                  duration: 5000,
                }
              );
              this.teachersData.splice(index, 1);
            }
            if (response.data.error === true) {
              Vue.toasted.error("Something went wrong", {
                position: "top-center",
                duration: 5000,
              });
            }
          })
          .catch((errors) => {
            Vue.toasted.error("Something went wrong", {
              position: "top-center",
              duration: 5000,
            });
          });
      }
    },
    acceptTheTeacher(teacher, index) {
      if (confirm("Are you sure? ")) {
        axios
          .post("/api/accept/request/of/teacher/" + teacher.id)
          .then((response) => {
            if (response.data.message === true) {
              Vue.toasted.success(
                "You have successfully accepted the request",
                {
                  position: "top-center",
                  duration: 5000,
                }
              );
              this.teachersRequestData.splice(index, 1);
              window.location.reload();
            }
            if (response.data.error === true) {
              Vue.toasted.error("Something went wrong", {
                position: "top-center",
                duration: 5000,
              });
            }
          })
          .catch((errors) => {
            Vue.toasted.error("Something went wrong", {
              position: "top-center",
              duration: 5000,
            });
          });
      }
    },
    deleteTheTeacher(teacher, index) {
      if (confirm("Are you sure you want to teacher ")) {
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
      }
    },
  },
};
</script>
