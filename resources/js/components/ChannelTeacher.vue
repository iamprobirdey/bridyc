<template>
    <div>
        <h1>Your school teachers</h1>
        <h3>Your your schools leave your school?</h3>
        <span>Just remove them from the list</span>
        <div v-for="(teacher,index) in teachersData" :key="index">
            <h3>Teacher name: {{teacher.user.name}} </h3>
            <h4>Teacher email id: {{teacher.user.email}}</h4>
            <button class="btn btn-danger" @click="deleteFromChannel(teacher.id,index)">Delete</button>
        </div>

        <button class="btn btn-primary" @click="addUser()">Add</button>

        <div class="modal fade" id="addingUserModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-body">
                <form @submit.prevent="userGenerationForm()">
                    <div
                        class="form-group"
                        :class="{'has-error':errors.has('serverErrors.name') || serverErrors.name != ''}"
                    >
                        <label>User name</label>
                            <input
                            v-model="formData.name"
                            v-validate="'required'"
                            data-vv-delay="20"
                            name="name"
                            type="text"
                            :class="{'form-control': true,'is-invalid': errors.has('name')}"
                            placeholder="Teacher name"
                            />
                        <span v-show="errors.has('name')" class="text-danger">{{errors.first("name")}}</span>
                        <span v-show="serverErrors.name != ''" class="text-danger">{{serverErrors.name}}</span>
                    </div>

                     <div
                        class="form-group"
                        :class="{'has-error':errors.has('serverErrors.email') || serverErrors.email != ''}"
                    >
                        <label>User Email</label>
                            <input
                            v-model="formData.email"
                            v-validate="'required|email'"
                            data-vv-delay="20"
                            name="email"
                            type="email"
                            :class="{'form-control': true,'is-invalid': errors.has('email')}"
                            placeholder="Teacher Email Id"
                            />
                        <span v-show="errors.has('email')" class="text-danger">{{errors.first("email")}}</span>
                        <span v-show="serverErrors.email != ''" class="text-danger">{{serverErrors.email}}</span>
                    </div>

                        <!-- <div
                            class="form-group"
                            :class="{'has-error': errors.has('gender') || serverErrors.gender != '' }"
                        >
                            <label for="exampleInputEmail1">User Gender</label>
                            <select
                            v-model="formData.gender"
                            class="form-control"
                            name="gender"
                            v-validate="'required'"
                            >
                            <option value>Select gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            </select>
                            <i v-show="errors.has('gender')" class="is-invalid"></i>

                            <span class="text-danger" v-show="errors.has('gender')">{{ errors.first('gender') }}</span>
                            <span v-show="serverErrors.gender != ''" class="text-danger">{{ serverErrors.gender }}</span>
                        </div> -->

                         <div
                        class="form-group"
                        :class="{'has-error':errors.has('serverErrors.password') || serverErrors.password != ''}"
                    >
                        <label>User Password</label>
                            <input
                            v-model="formData.password"
                            v-validate="'required'"
                            data-vv-delay="20"
                            name="password"
                            type="password"
                            :class="{'form-control': true,'is-invalid': errors.has('password')}"
                            placeholder="User passwords"
                            />
                        <span v-show="errors.has('password')" class="text-danger">{{errors.first("password")}}</span>
                        <span v-show="serverErrors.password != ''" class="text-danger">{{serverErrors.password}}</span>
                    </div>
                        <span class="text-primary">Remember password can be changed any time by Respsected Teacher</span>

                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data(){
        return{
            teachersData : [],
            channelId : '',
            formData: {
                'name' : '',
                'email' : '',
                'password' : ''
            },
            serverErrors : {
                'name' : '',
                'email' : '',
                'password' : ''
            },
            additionUrl: '',
            url: location.origin + '/user/dashboard/api/',
        };
    },
    props:{
        teacher:{
            type : Array,
            default : null
        }
    },
    created(){
        this.teachersData = this.teacher[0].teacher;
        this.channelId = this.teacher[0].id;
    },
    mounted(){},
    methods:{
        addUser(){
            $('#addingUserModal').modal('show');
        },
        userGenerationForm(){
            this.additionUrl = 'add/teacher/';
            this.$validator.validate().then(result => {
            if (result) {
            axios
                .post(this.url+this.additionUrl+this.channelId,this.formData)
                .then(response => {
                if (response.data.message === true) {
                    Vue.toasted.success("Teacher account is created", {
                        position: "top-center",
                        duration: 5000
                    });
                    this.teachersData = [];
                    this.teachersData = response.data.data;
                    console.log(response.data.data);
                    $('#addingUserModal').modal('hide');
                }
                })
                .catch(errors => {
                     Vue.toasted.error("Something went wrong", {
                        position: "top-center",
                        duration: 5000
                    });
                    if (errors.response.data.errors.name) {
                        this.serverErrors.name =
                        errors.response.data.errors.name[0];
                    }
                    if (errors.response.data.errors.email) {
                        this.serverErrors.email =
                        errors.response.data.errors.email[0];
                    }
                    if (errors.response.data.errors.gender) {
                        this.serverErrors.gender =
                        errors.response.data.errors.gender[0];
                    }
                    if (errors.response.data.errors.password) {
                        this.serverErrors.password =
                        errors.response.data.errors.password[0];
                    }
                });
            }
        });
        },
        deleteFromChannel(id,index){
            this.additionUrl = 'delete/teacher/';
            axios
                .post(this.url+this.additionUrl+id)
                .then(response => {
                if (response.data.message === true) {
                    Vue.toasted.success("Teacher account from your school is destroyed", {
                        position: "top-center",
                        duration: 5000
                        });
                    }
                    this.teachersData.splice(index,1);
                })
                .catch(errors => {
                     Vue.toasted.error("Something went wrong", {
                        position: "top-center",
                        duration: 5000
                    });
                });

        }
    }
}
</script>
