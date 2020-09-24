<template>
    <div>

        <div class="container-fluid profileheader text-center" v-if="userImageStatus">
            <img class="profile-picture rounded-circle shadow"
            :src="domainUrl+'/media/teacher/'+userId+'/profile/'+userImage"
            alt="student profile pictures">
        </div>
        <a class="profile-edit p-2 rounded" @click="editTheIcon()"><i class="fa fa-camera" aria-hidden="true"></i></a>

        <div  v-if="!userImageStatus">
            <picture-input
                ref="pictureInput"
                width="152"
                height="150"
                margin="16"
                accept="image/jpeg, image/png"
                size="10"
                button-class="btn"
                :custom-strings="{
                        upload: '<h1>Bummer!</h1>',
                        drag: 'Upload your logo'
                    }"
                @change="onChange"
                name="image"
            ></picture-input>
        <div class="btnsuca">
            <button
                v-if="imageData != ''"
                type="button"
                class="btn btnsubmiticon rounded-0"
                @click="onImageSubmit()"
            >Submit</button>
            <button
                v-if="userImage != ''"
                @click="canTheEdit()"
                class="btn btn-success">
                <i class="fa fa-times" aria-hidden="true"></i>Cancel
            </button>
       </div>
            <span v-show="imageError " class="text-danger">{{ imageError }}</span>
        </div>


    </div>
</template>


<script>
import PictureInput from "vue-picture-input";
export default {
    data(){
        return{
            imageError : "",
            userImage : '',
            userImageStatus : false,
            userId: '',
            url : '/api/profile/teacher/image/upload/',
            domainUrl: location.origin,
            imageData: ''
        };
    },
    props:{
        user:{
            type: Object,
            default : null
        }
    },
    components:{
        PictureInput
    },
    created(){
        console.log('avatar');
        if(this.user.avatar){
            this.userImage = this.user.avatar;
            this.userImageStatus = true;
        }
        this.userId = this.user.id;
    },
    mounted(){},
    methods:{
    onChange(image) {
      if (this.$refs.pictureInput.image)
        this.imageData = this.$refs.pictureInput.image;
    },
    onImageSubmit() {
        if(this.imageData != ''){
            const formData = new FormData();
            formData.append("image", this.imageData);
            axios
            .post(this.url+this.userId, formData)
            .then(response => {
                onUploadProgress: progressEvent => {
                console.log(progressEvent.loaded / progressEvent.total);
                };
                this.userImage = response.data.image;
                this.userImageStatus = true;
            })
            .catch(errors => {
                if (errors.response.data.errors.image) {
                this.imageError = errors.response.data.errors.image[0];
                }
            });
        }
    },
    editTheIcon(){
        this.userImageStatus = false;
        },
    canTheEdit(){
        this.userImageStatus = true;
        }
    }
}
</script>
