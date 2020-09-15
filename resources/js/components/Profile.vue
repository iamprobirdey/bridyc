<template>
    <div class="profile row">
        <div class="col-sm-6">
            <username :username="userData.username" :id="userData.id"></username>
        </div>

        <div class="col-sm-6">
            <address-for-student
                :channels="channelsData"
                :states="statesData"
                :districts="districtsData"
                :villages="villagesData"
                :standards="standardsData"
                :userinformation="userInformationData"
                :id="userData.id"
                >
            </address-for-student>
        </div>
        <div class="col-sm-6">
            <subject
                :subjects="subjectsData"
                :studentssubject="studentsubjectsData"
                :id="userData.id"
             >
             </subject>
        </div>

        <div class="col-sm-6">
            <hobby
                :hobbies="hobbiesData"
                :studentshobbies="studentHobbies"
                :username="userData.username"
            >
            </hobby>
        </div>
    </div>

</template>

<script>
import username from "./student/profile/username.vue";
import address from "./student/profile/address.vue";
import subject from "./student/profile/subject.vue";
import hobby from "./student/profile/hobbies.vue";

export default {
    data(){
        return{
            userData: {},
            channelsData: [],
            statesData: [],
            districtsData : [],
            villagesData : [],
            standardsData: [],
            subjectsData: [],
            studentsubjectsData: [],
            hobbiesData: [],
            studentHobbies: [],
            userInformationData: {}
        };
    },
    props:{
        user: {
            type : Object,
            default : null
        },
        channels: {
            type : Array,
            default : null
        },
        states: {
            type : Array,
            default : null
        },
        districts: {
            type : Array,
            default : null
        },
        villages: {
            type : Array,
            default : null
        },
        standards: {
            type : Array,
            default : null
        },
        subjects: {
            type : Array,
            default : null
        },
        studentsubjects:{
            type : Array,
            default : null
        },
        hobbies: {
            type : Array,
            default : null
        },
        studenthobbies:{
            type : Array,
            default : null
        },
        userinformation: {
            type : Object,
            default : null
        }
    },
    created(){
        this.userData = this.user;
        this.channelsData = this.channels;
        this.statesData = this.states;
        this.districtsData = this.districts;
        this.villagesData = this.villages;
        this.standardsData = this.standards;
        this.subjectsData = this.subjects;
        this.studentsubjectsData = this.studentsubjects;
        this.userInformationData = this.userinformation;
        this.hobbiesData = this.hobbies;
        this.studentHobbies = this.studenthobbies;
    },
    methods:{

    },
    components:{
        username,
        'address-for-student' : address,
        subject,
        hobby
    }
}
</script>

<style scoped>
    .profile{
        margin-top: 100px;
    }
</style>
