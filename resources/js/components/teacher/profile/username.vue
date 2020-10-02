<template>
    <div class="username">
        <div v-if="!userNameEditing" class="text-center">
                User Name: <strong>{{usernameData}}</strong>

            <button class="btn mt-n2 edit-btn" @click="editTheUserName()" data-toggle="tooltip" title="Edit"><i class="fa fa-pencil" aria-hidden="true"></i></button>
        </div>

        <div v-if="userNameEditing" class="container mx-auto">
            <form @submit.prevent="userNameForm()">
            <div
                class="form-group row mx-5"
                :class="{'has-error':errors.has('userNameError.username') || userNameError.username != ''}"
            >
                <label col="col-sm-3 col-form-label">Username: </label>
                    <input
                    class="col-sm-9 ml-4"
                    id="username"
                    v-model="userName.username"
                    v-validate="'required'"
                    data-vv-delay="20"
                    name="username"
                    type="text"
                    :class="{'form-control': true,'is-invalid': errors.has('username')}"
                    placeholder="Enter your favorite user-name"
                    />
                <span v-show="errors.has('username')" class="text-danger text-center">{{errors.first("username")}}</span>
                <span v-show="userNameError.username != ''" class="help is-danger text-center">{{userNameError.username}}</span>
            </div>
            <div class="ml-5">
                <button type="btn" class="btn btn-warning" @click="cancelEditing()">Cancel</button>
                <button type="submit" class="btn btnsubmit mt-n2">Submit</button>
            </div>
            </form>
        </div>

    </div>
</template>

<script>
export default {
    data(){
        return{
            usernameData: '',
            userNameEditing: false,
            userName: {
                username: ''
            },
            userNameError: {
                username: ''
            },
            userId: ''
        };
    },
    props:{
        username: {
            type : String,
            default : null
        },
        id: {
            type : Number,
            default : null
        }
    },
    created(){
        this.usernameData = this.username;
        this.userId = this.id;
    },
    mounted(){
    },
    methods:{
        editTheUserName(){
            this.userNameEditing = true;
        },
        userNameForm(){
                  this.$validator.validate().then(result => {
            if (result) {

            axios
                .post('/api/profile/teacher/edit/username/'+this.userId,this.userName)
                .then(response => {
                if (response.data.message === true) {
                    Vue.toasted.success("User name is succefully created", {
                    position: "top-center",
                    duration: 5000
                    });
                    this.usernameData = this.userName.username;
                    this.userNameEditing = false;
                    this.urlChanger(this.usernameData);
                    window.location.reload();

                }
                })
                .catch(errors => {
                     Vue.toasted.error("Something went wrong", {
                        position: "top-center",
                        duration: 5000
                    });
                    if (errors.response.data.errors.username) {
                        this.userNameError.username =
                        errors.response.data.errors.username[0];
                    }
                });
            }
        });
        },
        cancelEditing(){
            this.userNameEditing = false;
        },
        urlChanger(username){
            let url = window.location.origin;
            let changeUrl = window.location.pathname.split('/');
            changeUrl[4] = username;
            window.history.pushState('username','on-profile',url+changeUrl.join('/'));
        }
    }
}
</script>
