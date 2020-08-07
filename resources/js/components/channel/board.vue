<template>
  <div>
        <h2>School Board</h2>
        <div v-if="userData != null && boardDataStatus === true">
            <h3>Here, is your list of board available in your school</h3>
            <button class="btn btn-success" v-for="(board,index) in userData" :key="index">
                {{board.board.name}}
            </button>
            <button class="btn btn-primary" @click="editTheboard()">
                Edit
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
            <button
                type="submit"
                class="btn btn-primary"
                @click="submitStandardData()">
                Submit
            </button>
        </div>
        <br>
        <br>
        <br>
        <br>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect';
export default {
    data(){
        return{
            userData: [],
            boardData: [],
            boardDataStatus: false,
            value: [],
        };
    },
    mounted(){
        this.getBoardData();
    },
    methods:{
        getBoardData(){
                axios
            .get("api/board")
            .then(response => {
            this.userData = response.data.channel;
            this.boardData = response.data.board;
            if(this.userData.length > 0) this.boardDataStatus = true;
                this.theBoardDecider();
            })
            .catch(errors => {
                console.log('i am error'+errors);
                Vue.toasted.error("Something went wrong", {
                        position: "top-center",
                        duration: 5000
                    });
            });
        },
        theBoardDecider(){
            this.value = [];
            if(this.userData != null){
                this.boardData.map(board => {
                    this.userData.map(data =>{
                        if(data.board.name === board.name){
                            this.value.push(board);
                            }
                        });
                    });
                }
        },
        boardNameOnly(board){
            return `${board.name}`
        },
        editTheboard(){
            this.boardDataStatus = false;
        },
        submitStandardData(){
              if(this.userData.length != this.value.length)
            axios
                .post('api/board',this.value)
                .then(response => {
                    this.userData = [];
                    this.userData = response.data.data;
                    this.streamDataStatus = true;
                    this.theBoardDecider();
                })
                .catch(errors => {
                    Vue.toasted.error("Something went wrong", {
                        position: "top-center",
                        duration: 5000
                    });
                });

            this.boardDataStatus = true;
        }
    },
    components:{
      Multiselect
    },
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>

</style>
