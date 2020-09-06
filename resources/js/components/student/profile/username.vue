<template>
    <div>
        <div v-if="!userNameEditing">
            <p>
                {{usernameData}}
            </p>
            <a class="btn btn-primary text-white" @click="editTheUserName()">Edit</a>
        </div>

        <div v-if="userNameEditing">
            <form @submit.prevent="userNameForm()">
            <div
                class="form-group"
                :class="{'has-error':errors.has('userNameError.username') || userNameError.username != ''}"
            >
                <label>Username</label>
                    <input
                    id="username"
                    v-model="userName.username"
                    v-validate="'required'"
                    data-vv-delay="20"
                    name="username"
                    type="text"
                    :class="{'form-control': true,'is-invalid': errors.has('username')}"
                    placeholder="Enter your favorite user-name"
                    />
                <span v-show="errors.has('username')" class="text-danger">{{errors.first("username")}}</span>
                <span v-show="userNameError.username != ''" class="help is-danger">{{userNameError.username}}</span>
            </div>
                <button type="submit" class="btn btn-primary">Submit</button>
                <button type="btn" class="btn btn-warning" @click="cancelEditing()">Cancel</button>
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
            }
        };
    },
    props:{
        username: {
            type : String,
            default : null
        }
    },
    created(){
        this.usernameData = this.username;
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
                .post('/api/edit/username',this.userName)
                .then(response => {
                if (response.data.message === true) {
                    Vue.toasted.success("User name is succefully created", {
                    position: "top-center",
                    duration: 5000
                    });
                    this.usernameData = this.userName.username;
                    this.userNameEditing = false;
                    this.urlChanger(this.usernameData);

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
            changeUrl[3] = username;
            window.history.pushState('username','on-profile',url+changeUrl.join('/'));
        }
    }
}
</script>
