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
              <!-- <button type="submit" class="btn btnvisit">Visit College</button> -->
            
          </div>

          

          <!-- <div class="card institutecard shadow">
             <div class="card-body">
            <img src="/images/college logo.jpg" alt="college logo" class="inslogo">
             <h4 class="card-title">Avnsdjnk nsadcn jr. college</h4>
             <p class="card-text">
               Dist: Karbi Anglong
             </p>
             <p class="card-text destext">
               Bridyc helps students get admission in the college of their
           choice, we provide information to students and parents regarding the best
           courses
              </p>
             <a href="#" class="visitins">Visit College</a>
             <button type="submit" class="btn btnvisit">Visit College</button>
           </div>
         </div> -->

         <!-- <div class="space2"></div> -->
<!--
         <div class="card institutecard shadow">
            <div class="card-body">
            <img src="/images/college logo.jpg" alt="college logo" class="inslogo">
             <h4 class="card-title">Avnsdjnk nsadcn jr. college</h4>
             <p class="card-text">
               Dist: Karbi Anglong
             </p>
             <p class="card-text destext">
               Bridyc helps students get admission in the college of their
           choice, we provide information to students and parents regarding the best
           courses
              </p>
             <a href="#" class="visitins">Visit College</a>
             <button type="submit" class="btn btnvisit">Visit College</button>
           </div>
         </div> -->

         <!-- <div class="space1"></div> -->
<!--
         <div class="card institutecard shadow">
           <div class="card-body">
           <img src="/images/college logo.jpg" alt="college logo" class="inslogo">
            <h4 class="card-title">Avnsdjnk nsadcn jr. college</h4>
            <p class="card-text">
              Dist: Karbi Anglong
            </p>
            <p class="card-text destext">
             Bridyc helps students get admission in the college of their
         choice, we provide information to students and parents regarding the best
         courses
            </p>
            <a href="#" class="visitins">Visit College</a>
            <button type="submit" class="btn btnvisit">Visit College</button>
          </div>
        </div> -->

        <!-- <div class="space2"></div> -->
<!--
        <div class="card institutecard shadow hidedesc">
         <div class="card-body">
         <img src="/images/college logo.jpg" alt="college logo" class="inslogo">
          <h4 class="card-title">Avnsdjnk nsadcn jr. college</h4>
          <p class="card-text">
            Dist: Karbi Anglong
          </p>
          <a href="#" class="visitins">Visit College</a>
        </div>
      </div> -->
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
