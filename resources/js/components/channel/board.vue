<template>
  <div>
    <h4>School Board</h4>
    <div v-if="userData != null && boardDataStatus === true">
      <h5>Here, is your list of board available in your school</h5>
      <button
        class="btn btn-success"
        v-for="(board, index) in userData"
        :key="index"
      >
        {{ board.name }}
      </button>
      <button class="btn" @click="editTheboard()">
        <i class="fa fa-pencil" aria-hidden="true"></i>
      </button>
    </div>
    <div v-if="boardDataStatus === false">
      <multiselect
        v-model="value"
        :options="boardData"
        track-by="name"
        :custom-label="boardNameOnly"
        :multiple="true"
        tag-placeholder="Select classes of your institute"
        :option-height="104"
      >
      </multiselect>
      <button type="submit" class="btn btnsubmit" @click="submitStandardData()">
        Submit
      </button>
    </div>
    <br />
    <br />
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
export default {
  data() {
    return {
      userData: [],
      boardData: [],
      boardDataStatus: false,
      value: [],
    };
  },
  mounted() {
    this.getBoardData();
  },
  methods: {
    getBoardData() {
      axios
        .get("/api/board")
        .then((response) => {
          this.userData = response.data.channel[0].board;
          this.boardData = response.data.board;
          if (this.userData.length > 0) this.boardDataStatus = true;
          this.theBoardDecider();
        })
        .catch((errors) => {
          console.log("i am error" + errors);
          Vue.toasted.error("Something went wrong", {
            position: "top-center",
            duration: 5000,
          });
        });
    },
    theBoardDecider() {
      this.value = [];
      if (this.userData != null) {
        this.boardData.map((board) => {
          this.userData.map((data) => {
            if (data.name === board.name) {
              this.value.push(board);
            }
          });
        });
      }
    },
    boardNameOnly(board) {
      return `${board.name}`;
    },
    editTheboard() {
      this.boardDataStatus = false;
    },
    submitStandardData() {
      if (this.value.length) {
        let formData = {
          board: [],
        };
        this.value.map((item) => {
          formData.board.push(item.id);
        });
        axios
          .post("/api/board", formData)
          .then((response) => {
            this.userData = [];
            this.userData = response.data.data;
            console.log(this.userData);
            this.streamDataStatus = true;
            this.theBoardDecider();
          })
          .catch((errors) => {
            Vue.toasted.error("Something went wrong", {
              position: "top-center",
              duration: 5000,
            });
          });
      } else {
        Vue.toasted.error("Field is empty", {
          position: "top-center",
          duration: 5000,
        });
      }

      this.boardDataStatus = true;
    },
  },
  components: {
    Multiselect,
  },
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
.btn-success {
  border-radius: 0;
  padding: 5px;
}
</style>
