<template>
    <div>
        <h4>School Standard</h4>
        <div v-if="userData != null && standardDataStatus === true">
            <h5>Here, is your list of standard available in your school</h5>
            <button class="btn btn-success" v-for="(standard,index) in userData" :key="index">
                {{standard.standard.standard_name}}
            </button>
            <button class="btn" @click="editTheStandard()">
                <i class="fa fa-pencil" aria-hidden="true"></i>
            </button>
        </div>
        <div v-if="standardDataStatus === false">
            <multiselect
                v-model="value"
                :options="standardData"
                track-by="standard_name"
                :custom-label="standardNameOnly"
                :multiple="true"
                tag-placeholder="Select classes of your institute"
                :option-height="104"
                >
            </multiselect>
            <button
                type="submit"
                class="btn btnsubmit"
                @click="submitStandardData()">
                Submit
            </button>
        </div>
        <br>
        <br>
       
    </div>
</template>

<script>
 import Multiselect from 'vue-multiselect'
export default {
  data() {
    return {
      userData: [],
      userDataLength: 0,
      standardData: [],
      standardDataStatus: false,
      standardDataDecider: [],
      value: [],
    };
  },
  mounted() {
      this.getStandardData();
  },
  components:{
      Multiselect
  },
  methods: {
    getStandardData() {
      axios
        .get("api/standard")
        .then(response => {
          this.userData = response.data.channel;
          this.userDataLength = this.userData.length;
          this.standardData = response.data.standard;
          if(this.userData.length > 0) this.standardDataStatus = true;
            this.theStandardDecider();

        })
        .catch(errors => {
            console.log('i am error'+errors);
            Vue.toasted.error("Something went wrong", {
                    position: "top-center",
                    duration: 5000
                });
        });
    },
    editTheStandard(){
        this.standardDataStatus = false;
    },
    theStandardDecider(){
        this.value = [];
        if(this.userData != null){
            this.standardData.map(item => {
                this.userData.map(data =>{
                    if(data.standard.standard_name === item.standard_name){
                        this.value.push(item);
                    }
                });
            });
        }
    },
    submitStandardData(){
        if(this.userDataLength != this.value.length)
        axios
            .post('api/standard',this.value)
            .then(response => {
                this.userData = [];
                this.userData = response.data.data;
                this.standardDataStatus = true;
                this.theStandardDecider();
            })
            .catch(errors => {
                Vue.toasted.error("Something went wrong", {
                    position: "top-center",
                    duration: 5000
                });
            });

    this.standardDataStatus = true;

    },
    standardNameOnly(standard){
        return `${standard.standard_name}`
    }
  }
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>

</style>
