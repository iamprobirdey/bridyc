<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Block</th>
          <th scope="col">Status</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">State</th>
          <th scope="col">District</th>
          <th scope="col">City</th>
          <th scope="col">Medium</th>
          <th scope="col">Udise</th>
          <th scope="col">Title</th>
          <th scope="col">Founded</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(verification,index) in usersData" :key="verification.id">
          <td>
            <button
              class="btn btn-primary"
              @click="blockTheUser(verification.user_id ,verification.id,index)"
              v-if="verification.status === 0 ||
                 verification.status === 2 ||
                 verification.status === 1
                 "
            >Block</button>
            <button
              class="btn btn-primary"
              @click="offTheStatus(verification.user_id ,verification.id,index)"
              v-if="verification.status === 3"
            >unBlock</button>
          </td>
          <td>
            <button
              v-if="verification.status === 2"
              class="btn btn-success"
              @click="offTheStatus(verification.user_id , verification.id,index)"
            >ON</button>
            <button
              v-if="verification.status === 1"
              class="btn btn-danger"
              @click="onTheStatus(verification.user_id ,verification.id,index)"
            >OFF</button>
            <span class="text-danger" v-if="verification.status === 3">user is block</span>
          </td>
          <td>{{verification.user.name}}</td>
          <td>{{verification.user.email}}</td>
          <td>{{verification.state.name}}</td>
          <td>{{verification.district.name}}</td>
          <td>{{verification.village.name}}</td>
          <td>{{verification.language.name}}</td>
          <td>{{verification.udise}}</td>
          <td>{{verification.title}}</td>
          <td>{{verification.founded}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usersData: []
    };
  },
  props: {
    users: {
      type: Array,
      default: null
    }
  },
  mounted() {
      if(this.users != null) this.usersData = this.users;
  },
  methods: {
    offTheStatus(userId, Id, index) {
      axios
        .get("verification/api/updatingforoff/" + userId + "/" + Id)
        .then(response => {
          if (response.status === 200 && response.data.msg === true) {
            this.usersData[index].status = 1;
          }
        })
        .catch(errors => {
          Vue.toasted.error("Something went wrong", {
            position: "top-center",
            duration: 5000
          });
        });
    },
    onTheStatus(userId, Id, index) {
      axios
        .get("verification/api/updatingforon/" + userId + "/" + Id)
        .then(response => {
          if (response.status === 200 && response.data.msg === true) {
            this.usersData[index].status = 2;
          }
        })
        .catch(errors => {
          Vue.toasted.error("Something went wrong", {
            position: "top-center",
            duration: 5000
          });
        });
    },
    blockTheUser(userId, Id, index) {
      axios
        .get("verification/api/updatingforblock/" + userId + "/" + Id)
        .then(response => {
          if (response.status === 200 && response.data.msg === true) {
            this.usersData[index].status = 3;
          }
        })
        .catch(errors => {
          Vue.toasted.error("Something went wrong", {
            position: "top-center",
            duration: 5000
          });
        });
    }
  }
};
</script>

<style>
</style>
