<template>
    <div>
        <div v-if="subjectsEntryChecker">
            You school sujects are:
             <button class="btn mt-n2 username-edit" @click="editTheSubject()"><i class="fa fa-pencil" aria-hidden="true"></i></button>
            <div class="card">
                 <div class="card-body mb-3" v-for="(subject,index) in studentssubjectData" :key="index">
                     {{subject.subject.name}}
                 </div>
            </div> 
            <!--button class="btn btn-primary m-1" v-for="(subject,index) in studentssubjectData" :key="index">
                {{subject.subject.name}}
            </button-->
        </div>
        <div v-if="!subjectsEntryChecker">
            <multiselect
                    v-model="value"
                    :options="subjectsData"
                    track-by="name"
                    :custom-label="standardNameOnly"
                    :multiple="true"
                    tag-placeholder="Select classes of your subjects"
                    :option-height="104"
                    >
                </multiselect>
                     <span
              v-show="serverError != ''"
              class="text-danger text-center"
            >{{ serverError }}</span>
            <br>
            <button
                class="btn btn-danger"
                @click="cancelTheForm()"
            >
                Cancel
            </button>
                <button
                    type="submit"
                    class="btn btnsubmit "
                    @click="submitSubjectsData()">
                    Submit
                </button>
        </div>
    </div>
</template>
<script>
import Multiselect from 'vue-multiselect'
export default {
    data(){
        return{
            value: [],
            subjectsData: [],
            studentssubjectData : [],
            subjectsEntryChecker : true,
            selectedSubjectValueStored: [],
            serverError: '',
            userId: ''
        };
    },
    props:{
        subjects: {
            type : Array,
            default : null
        },
        studentssubject:{
            type : Array,
            default : null
        },
        id : {
            type : Number,
            default : null
        }
    },
    created(){
        this.subjectsData = this.subjects;
        this.studentssubjectData = this.studentssubject;
        this.userId = this.id;
    },
    mounted(){
        if(this.studentssubjectData.length > 0){
            this.subjectsEntryChecker = true;
            this.theSubjectContainer();
        }
    },
    methods:{
        cancelTheForm(){
            this.subjectsEntryChecker = true;
        },
         standardNameOnly(subject){
            return `${subject.name}`
        },
        submitSubjectsData(){
            if(this.value.length){
                let subjectFormData = [];
                this.value.map(item=>{
                    subjectFormData.push(item.id);
                });
                if(this.isEqual(subjectFormData)){
                    axios
                        .post('/api/profile/edit/subject/'+this.userId,this.value)
                        .then(response => {
                            this.studentssubjectData = [];
                            this.studentssubjectData = response.data.data;
                            this.subjectsEntryChecker = true;
                            this.theSubjectContainer();
                        })
                        .catch(errors => {
                            Vue.toasted.error("Something went wrong", {
                                position: "top-center",
                                duration: 5000
                            });
                        });
                }else{
                    this.serverError = 'Already added this subjects';
                }

            }
        },
        isEqual(items){
            let counter = 0;
            items.map(item => {
                this.selectedSubjectValueStored.map(data => {
                    if(item === data){
                        counter++;
                    }
                });
            });
            if(
                items.length > this.selectedSubjectValueStored ||
                this.selectedSubjectValueStored.length === 0 ||
                this.selectedSubjectValueStored.length != counter
               )
                return true;
            return false;

        },
        theSubjectContainer(){
            this.value = [];
            if(this.studentssubjectData != null){
                this.subjectsData.map(item => {
                    this.studentssubjectData.map(data =>{
                        if(data.subject.name === item.name){
                            this.value.push(item);
                            this.selectedSubjectValueStored.push(data.subject.id);
                        }
                    });
                });
            }
        },
        editTheSubject(){
            this.subjectsEntryChecker = false;
        }
    },
    components:{
        Multiselect
    }

}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

