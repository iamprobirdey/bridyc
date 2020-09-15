<template>
  <div>
      Your achievement
      <div v-for="(achievement,index) in achievementData" :key="index">
          <img :src="baseUrl+achievement.image_path" class="rounded-circle" alt="" height="50" width="50">
          <h3>{{achievement.title}}</h3>
          <p>{{achievement.description}}</p>

          <button class="btn btn-success"  @click="editTheForm(achievement,index)">Edit</button>

      </div>

      <button class="btn btn-primary" @click="addAchievement()">Add</button>
            <div v-if="openAchievementForm">
                <form @submit.prevent="achievementSubmit()">
                        <picture-input
                            ref="pictureInput"
                            width="200"
                            height="200"
                            margin="16"
                            accept="image/jpeg, image/png"
                            size="10"
                            button-class="btn"
                            :custom-strings="{
                                    upload: '<h1>Bummer!</h1>',
                                    drag: 'Drag a 😺 GIF or GTFO'
                                }"
                            @change="onChange"
                    ></picture-input>
                        <span v-show="serverErrors.image_path != ''" class="text-danger">{{serverErrors.image_path}}</span>
                    <div
                        class="form-group"
                        :class="{'has-error':errors.has('serverErrors.title') || serverErrors.title != ''}"
                    >
                        <label>Achievement Title</label>
                            <input
                            v-model="formData.title"
                            v-validate="'required'"
                            data-vv-delay="20"
                            name="title"
                            type="text"
                            :class="{'form-control': true,'is-invalid': errors.has('title')}"
                            placeholder="title like: Student name, Institute Great achievement"
                            />
                        <span v-show="errors.has('title')" class="text-danger">{{errors.first("title")}}</span>
                        <span v-show="serverErrors.title != ''" class="help is-danger">{{serverErrors.title}}</span>
                    </div>

                     <div
                        class="form-group"
                        :class="{'has-error':errors.has('serverErrors.descriptions') || serverErrors.descriptions != ''}"
                    >
                        <label> Achievement Description</label>
                            <input
                            v-model="formData.description"
                            v-validate="'required'"
                            data-vv-delay="20"
                            name="descriptions"
                            type="text"
                            :class="{'form-control': true,'is-invalid': errors.has('descriptions')}"
                            placeholder="Write your short Description"
                            />
                        <span v-show="errors.has('descriptions')" class="text-danger">{{errors.first("descriptions")}}</span>
                        <span v-show="serverErrors.descriptions != ''" class="help is-danger">{{serverErrors.descriptions}}</span>
                    </div>
                        <button type="btn" class="btn btn-secondary" @click="canCleSubmittion()">Cancel</button>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>

  </div>
</template>

<script>
import PictureInput from "vue-picture-input";
export default {
  data() {
    return {
      achievementData: [],
      openAchievementForm : false,
      formData: {
          image_path : '',
          title : '',
          description : ''
      },
      serverErrors : {
          image_path : '',
          title : '',
          description : ''
      },
      channelId : '',
      additionUrl: '',
      url: location.origin + '/api/achievement/',
      baseUrl: location.origin+'/',
      editingUrlChecker: false,
      achievementId : '',
      achievementIndex : '',
      authValue: ''
    };
  },
  props: {
      achievement : {
          type : Array,
          default : null
      },
  },
  created(){
      this.achievementData = this.achievement[0].achievement;
      this.channelId = this.achievement[0].id;
      this.authValue = this.authId;
      console.log(this.authId);
  },
  mounted() {

  },
  methods: {
      addAchievement(){
          this.openAchievementForm = true;
          this.formData.title = '';
          this.formData.description = '';
      },
      achievementSubmit(){
        this.$validator.validate().then(result => {
            if (result) {
                if(this.formData.image_path === '') this.serverErrors.image_path = 'Image is required';
            let formUrl = '';
            if(this.editingUrlChecker)
            {
                this.additionUrl = 'edit/';
                formUrl = this.url+this.additionUrl+this.achievementId+'/';
            }else{
                this.additionUrl = 'add/';
                formUrl = this.url+this.additionUrl;
            }
            axios
                .post(formUrl+this.channelId,this.formData)
                .then(response => {
                if (response.data.message === true) {
                        Vue.toasted.success("Meta data is created", {
                        position: "top-center",
                        duration: 5000
                    });
                    if(this.editingUrlChecker) {
                        this.achievementData.splice(this.achievementIndex,1);
                    }
                    this.achievementData.push(response.data.data);
                    this.openAchievementForm = false;
                    this.editingUrlChecker = false;
                }
                })
                .catch(errors => {
                     Vue.toasted.error("Something went wrong", {
                        position: "top-center",
                        duration: 5000
                    });
                });
            }
        });
    },
    onChange(image) {
      if (this.$refs.pictureInput.image)
        this.formData.image_path = this.$refs.pictureInput.image;
    },
    editTheForm(data,index){
        this.editingUrlChecker = true;
        this.formData.title = data.title;
        this.formData.description = data.description;
        this.achievementId = data.id;
        this.openAchievementForm = true;
        this.achievementIndex = index;
    },
    canCleSubmittion(){
        this.editingUrlChecker = false;
        this.openAchievementForm = false;
    }
  },
  components: {
    PictureInput
  }
};
</script>

<style scoped></style>
