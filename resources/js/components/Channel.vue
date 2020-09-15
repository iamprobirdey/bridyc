<template>

   <section>
     <!-- college section starts here-->
     <div class="institute container-fluid">
        <div class="insclass">
        <h6>Institutes</h6>
        <img class="gradcap" src="/images/school.svg">
        </div>

   <br>
        <div class="row mb-5">
          <div class="card institutecard shadow mx-auto" v-for="(channel,index) in channelData" :key="index">
            <div class="card-body">
             <img :src="channel.icon_avatar === null ? '/images/college logo.jpg': domainUrl+'/media/channel/'+channel.user_id+'/'+channel.icon_avatar" alt="college logo" class="inslogo">
              <h4 class="card-title">{{channel.title}}</h4>
              <p class="card-text">
                    {{channel.district.name}}
              </p>
              <p class="card-text destext" v-if="channel.description != null">
                  {{channel.description}}
              </p>
            </div>
              <a :href="domainUrl+'/channel/'+channel.slug" class="visitins">Visit Institute</a>
              <a :href="domainUrl+'/channel/'+channel.slug" class="btn btnvisit ml-auto">Visit Institute</a>
          </div>
        </div>
      </div>
   </section>
</template>

<script>
export default {
    data(){
        return{
            channelData: [],
            domainUrl: location.origin
        };
    },
    props: {
        channel:{
            type : Array,
            default: null
        }
    },
    mounted(){
        if(this.channel.length > 0) this.channelData = this.channel;
    },
    methods: {

    }
}
</script>

<style>

</style>
