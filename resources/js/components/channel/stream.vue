<template>
  <div>
        <h2>School Stream</h2>
        <div v-if="userData != null && streamDataStatus === true">
            <h3>Here, is your list of stream available in your school</h3>
            <button class="btn btn-success" v-for="(stream,index) in userData" :key="index">
                {{stream.stream.stream}}
            </button>
            <button class="btn btn-primary" @click="editTheStream()">
                Edit
            </button>
        </div>
                <div v-if="streamDataStatus === false">
            <multiselect
                v-model="value"
                :options="streamData"
                track-by="stream"
                :custom-label="streamNameOnly"
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
            streamData: [],
            streamDataStatus: false,
            value: [],

        };
    },
    mounted(){
        this.getStreamData();
    },
    methods:{
        getStreamData(){
               axios
            .get("api/stream")
            .then(response => {
            this.userData = response.data.channel;
            this.streamData = response.data.stream;
            if(this.userData.length > 0) this.streamDataStatus = true;
                this.theStreamDecider();

            })
            .catch(errors => {
                console.log('i am error'+errors);
                Vue.toasted.error("Something went wrong", {
                        position: "top-center",
                        duration: 5000
                    });
            });
        },
        editTheStream(){
            this.streamDataStatus = false;
        },
        theStreamDecider(){
                this.value = [];
        if(this.userData != null){
            this.streamData.map(stream => {
                this.userData.map(data =>{
                    if(data.stream.stream === stream.stream){
                        this.value.push(stream);
                        }
                    });
                });
            }
        },
        streamNameOnly(stream){
            return `${stream.stream}`
        },
        submitStandardData(){
               if(this.userData.length != this.value.length)
            axios
                .post('api/stream',this.value)
                .then(response => {
                    this.userData = [];
                    this.userData = response.data.data;
                    this.streamDataStatus = true;
                    this.theStreamDecider();
                })
                .catch(errors => {
                    Vue.toasted.error("Something went wrong", {
                        position: "top-center",
                        duration: 5000
                    });
                });

            this.streamDataStatus = true;
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
