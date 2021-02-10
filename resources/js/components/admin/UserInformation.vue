<template>
  <div>
    <div class="row">
      <div class="col-sm-3">
        <select name="usertype" v-model="userType" @change="OnDataChange">
          <option value="all">All</option>
          <option value="institute">Institute</option>
          <option value="teacher">Teacher</option>
          <option value="student">Student</option>
        </select>
      </div>
      <div class="col-sm-3">
        <select name="gender" v-model="gender" @change="OnDataChange">
          <option value="all">All</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
      </div>
      <div class="col-sm-3">
        <select name="status" v-model="status" @change="OnDataChange">
          <option value="all">All</option>
          <option value="1">active</option>
          <option value="0">not-active</option>
        </select>
      </div>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Gender</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in usersData" :key="index">
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.phone }}</td>
          <td>{{ user.gender }}</td>
          <button v-if="user.status === 1" class="bagde badge-success">
            active
          </button>
          <button v-if="user.status === 0" class="bagde badge-danger">
            not-active
          </button>
        </tr>
        <button class="badge badge-success mr-5" @click="lastPaginatePage">
          Last
        </button>
        <button class="badge badge-primary" @click="nextPaginatePage">
          Next
        </button>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usersData: {},
      userType: "all",
      gender: "all",
      status: "all",
      currentPage: 0,
      lastPage: 0,
    };
  },
  mounted() {
    this.getAllUserData();
  },
  methods: {
    lastPaginatePage() {
      if (this.currentPage === 1) {
        Vue.toasted.success("You are in first page", {
          position: "top-center",
          duration: 5000,
        });
      }
      if (this.currentPage > 1) {
        this.currentPage = this.currentPage - 1;
        this.getAllUserData();
      }
    },
    nextPaginatePage() {
      if (this.currentPage < this.lastPage) {
        this.currentPage = this.currentPage + 1;
        this.getAllUserData();
      }
      if (this.currentPage === this.lastPage) {
        Vue.toasted.success("You are in Last page", {
          position: "top-center",
          duration: 5000,
        });
      }
    },
    OnDataChange() {
      this.getSelectedUser();
    },
    getAllUserData() {
      let url = "userinfo/get/all/user/information?page=" + this.currentPage;
      axios
        .get(url)
        .then((response) => {
          this.usersData = response.data.users.data;
          this.currentPage = response.data.users.current_page;
          this.lastPage = response.data.users.last_page;
        })
        .catch((errors) => {
          Vue.toasted.error("Something went wrong", {
            position: "top-center",
            duration: 5000,
          });
        });
    },
    getSelectedUser() {
      let url =
        "userinfo/get/selected/user/information?page=1&usertype=" +
        this.userType +
        "&gender=" +
        this.gender +
        "&status=" +
        this.status;
      axios
        .get(url)
        .then((response) => {
          this.usersData = response.data.users.data;
          this.currentPage = response.data.users.current_page;
          this.lastPage = response.data.users.last_page;
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

