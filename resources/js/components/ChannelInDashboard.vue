<template>
    <div class="mx-lg-5 mt-lg-4">
        <main role="main" class="col-lg-10 ml-lg-auto">
            <img :src="channelData.cover_avatar != null ? domainUrl+'/media/channel/'+channel.user_id+'/'+channelData.cover_avatar : '/images/banner2.png'" class="inscover">

            <div class="blankdiv">
              <div class="d-flex">
                <div class="d-flex flex-column">
                  <p class="m-1">A unit of abc society askjfhjkkhh bdb fbdfbdfb fdfb dfbfdb cbdfb</p>
                  <a class="m-1 insweb" :target="channelData.website_link === null ? '_self' : '_blank'" :href="channelData.website_link === null ? 'javascript:void(0)' : channelData.website_link">Visit Website <i class="fa fa-external-link-square" aria-hidden="true"></i></a>
                </div>


              <div class="ml-auto phemdiv">
                <p class="m-1 mr-2"><i class="fa fa-phone mr-1 d-none d-sm-inline" aria-hidden="true"></i> Call us at {{phoneNo}}</p>
                <p class="m-1 mr-2"><i class="fa fa-envelope mr-1 d-none d-sm-inline" aria-hidden="true"></i> {{userData.email}}</p>
              </div>
             </div>
            </div>

            <!--demotable-->
          <div class="container">
            <div class="d-flex mt-5 logo-title">
                     <img :src="channelData.icon_avatar != null ? domainUrl+'/media/channel/'+channel.user_id+'/'+channelData.icon_avatar : '/images/college logo.jpg'" alt="Institute logo" class="img-fluid logoinstitute">
                     <h1 class="ml-1 ml-sm-4 institle">{{channelData.title}}</h1>
            </div>
          </div>

              <div class="inssocial">
                <div class="d-flex" v-if="socialCount === 0">
                    <a class="mr-1" v-if="channelData.extra_attributes.social.facebook != null"
                        :href="channelData.extra_attributes.social.facebook != null ? channelData.extra_attributes.social.facebook : 'javascript:void(0)'">
                            <img src="/images/facebook.svg" alt="fb icon">
                    </a>
                    <a class="mr-1" v-if="channelData.extra_attributes.social.linkedin != null"
                        :href="channelData.extra_attributes.social.linkedin != null ? channelData.extra_attributes.social.linkedin : 'javascript:void(0)'">
                         <img src="/images/linkedin.svg"  alt="li icon">
                    </a>
                    <a class="mr-1" v-if="channelData.extra_attributes.social.instagram != null"
                        :href="channelData.extra_attributes.social.instagram != null ? channelData.extra_attributes.social.instagram : 'javascript:void(0)'">
                         <img src="/images/instagram.svg"  alt="ig icon">
                    </a>
                    <a class="mr-1" v-if="channelData.extra_attributes.social.youtube != null"
                        :href="channelData.extra_attributes.social.youtube != null ? channelData.extra_attributes.social.youtube : 'javascript:void(0)'">
                         <img src="/images/youtube.svg"  alt="yt icon">
                    </a>
                </div>   
                <div v-if="socialCount === 1" class="d-none">
                    Socials: NA
                </div>
              </div>


<!-- new addition for nav starts-->
<div class="inspills">
  <!-- Nav pills -->
  <ul class="nav nav-pills" role="tablist">
    <li class="nav-item">
      <a class="nav-link active" data-toggle="pill" href="#home">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" data-toggle="pill" href="#about">About</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" data-toggle="pill" href="#faculty">Faculty</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" data-toggle="pill" href="#facility">Facility</a>
    </li>
  </ul>

  <!-- Tab panes -->
  <div class="tab-content">
    <div id="home" class="container-fluid tab-pane active"><br>
      <!-- home content from  below STARTS-->
      <div class="row mb-5">
           <div class="card notice shadow-sm mx-0 col-sm-4">
                  <div class="card-body">
                    <div class="card-title my-n2"><h5>News and Notifications</h5></div>
                    <hr class="mx-n3">
                    <ul class="nav">
                      <li>aaaaaaaaaaa</li>
                      <li>bbbbbbbbbbbbbbbb</li>
                      <li>cccccccccccc</li>
                      <li>aaaaaaaaaaa</li>
                      <li>bbbbbbbbbbbbbbbb</li>
                      <li>cccccccccccc</li>
                      <li>aaaaaaaaaaa</li>
                      <li>bbbbbbbbbbbbbbbb</li>
                      <li>cccccccccccc</li>
                      <li>bbbbbbbbbbbbbbbb</li>
                      <li>cccccccccccc</li>
                      <li>aaaaaaaaaaa</li>
                      <li>bbbbbbbbbbbbbbbb</li>
                      <li>cccccccccccc</li>
                      <li>aaaaaaaaaaa</li>
                      <li>bbbbbbbbbbbbbbbb</li>
                      <li>cccccccccccc</li>
                    </ul>
                  </div>
                </div>

              <div id="carouid" class="carousel slide inscarou col-sm-8" data-ride="carousel">
                         <ul class="carousel-indicators">
                           <li data-target="#carouid" data-slide-to="0" class="active"></li>
                           <li data-target="#carouid" data-slide-to="1"></li>
                           <li data-target="#carouid" data-slide-to="2"></li>
                           <li data-target="#carouid" data-slide-to="3"></li>
                           <li data-target="#carouid" data-slide-to="4"></li>
                         </ul>
                         <div class="carousel-inner">
                           <div class="carousel-item active">
                            <img src="/images/testcollege.jpg">
                           </div>
                           <div class="carousel-item">
                            <img src="/images/testcollege2.jpg">
                           </div>
                           <div class="carousel-item">
                            <img src="/images/testcollege3.jpg">
                           </div>
                           <div class="carousel-item">
                            <img src="/images/testcollege4.jpg">
                           </div>
                           <div class="carousel-item">
                            <img src="/images/testcollege5.jpg">
                           </div>
                         </div>
               </div>
      </div>


      <div class="container-fluid facultyachieve mt-n5 mt-sm-0">
         <h3 class="mx-auto">Achievements</h3>
        <div class="row mb-5 mt-4">
          <div class="card shadow mx-auto facultyachievecard">
            <img src="/images/guest.jpg">
            <div class="card-body mt-n1">
              <h6 class="card-title my-n1">Name of the individual</h6>
              <p class="card-text">
                Type of achievement
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- home content from below ends-->
    </div>

    <div id="about" class="container-fluid tab-pane fade"><br>
            <div class="description shadow-sm mb-5">
                  <h4 class="mb-4">Welcome to {{channelData.title}}</h4>
                <p>
                    {{
                        channelData.description != null ?
                        channelData.description : ''
                    }}
                </p>
            </div>

           <div class="princidiv mb-5">
                            <div class="d-flex">
                            <img src="/images/checkmark.svg">
                            <h3 class="mt-2">Message From The Principal</h3>
                            </div>
                <div class="row mt-3">
                     <div class="col-md-6">                  
                            <p>Lorem ipsum dolor sit amet, consectetur 
                              adipiscing elit. Quisque iaculis risus quis tortor eleifend, 
                              non facilisis ante vulputate. Donec iaculis, ex in euismod 
                              sagittis, turpis felis malesuada nisi, a facilisis ex 
                              enim ut nunc. Vestibulum ut tincidunt justo, sit amet faucibus 
                              elit. Aliquam ac nibh eros. Nulla id risus dolor. Ut nulla turpis, 
                              laoreet et libero a, faucibus accumsan risus. Morbi euismod mauris
                              mi, sit amet tempus ligula pretium vel. Nunc sem ligula, aliquam id 
                              purus et, egestas sagittis lorem. Duis at justo magna. Donec in 
                              egestas turpis. Aliquam maximus nulla sapien, sagittis dictum sem 
                              laoreet sit amet. Donec elit tortor, tincidunt non aliquet id, 
                              rhoncus in felis. Vestibulum ultrices ante id risus vehicula 
                              venenatis.Aenean id pulvinar sem. Cras elementum eu orci nec mollis.
                              Donec molestie iaculis pharetra. Duis ullamcorper erat ut aliquet tristique.
                              Etiam venenatis mauris id massa interdum viverra. 
                              </p>
                     </div>
                     <div class="col-md-6">
                           <div class="card principalcard">
                                <img src="/images/PrincipalPhoto.jpg">
                                <div class="card-body mt-n1">
                                   <h4 class="card-title my-n1">Principal name</h4>
                                   <p class="card-text">
                                       Principal, BCDSER
                                   </p>
                               </div>
                            </div>
                     </div>
                </div>
           </div>


          <div class="container-fluid additionalinfo">
               <h3 class="text-uppercase">Additional Information</h3>
               <hr>
             <div class="insadditionalinfo row">
                  <ul class="col">
                      <li>Address: {{channelData.district.name}},
                                   {{channelData.state.name}}
                      </li>
                      <li>Pin Code:  {{userData.verification.pin}}</li>
                      <li>Founded: {{userData.verification.founded}}</li>
                  </ul>
                  <ul class="col">
                      <li>Medium: {{channelData.village.name}}</li>
                      <li>Board: xxxx</li>
                      <li>Ownership: {{userData.verification.ownership}}</li>
                  </ul>
                  
                      
                      
                      
             </div>
          </div>

            <!--div class="row mx-auto">
            <div class="col-lg-5 insaddress">
              <h4 class="shadow">Contact Us</h4>
              <div class="addbody">
                <ul class="nav flex-column">
                  <li>
                        {{channelData.title}},
                        {{channelData.district.name}},
                        {{channelData.state.name}}
                        {{userData.verification.pin}}
                        ,India
                    </li>
                  <li>Email: {{userData.email}}</li>
                  <li>Phone No: {{phoneNo}}</li>
                  <li v-if="socialCount === 0">
                    <a  v-if="channelData.extra_attributes.social.facebook != null"
                        :href="channelData.extra_attributes.social.facebook != null ? channelData.extra_attributes.social.facebook : 'javascript:void(0)'">
                            <i :class="'fa fa-facebook-official'" aria-hidden="true"></i>
                    </a>
                    <a v-if="channelData.extra_attributes.social.linkedin != null"
                        :href="channelData.extra_attributes.social.linkedin != null ? channelData.extra_attributes.social.linkedin : 'javascript:void(0)'">
                        <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                    </a>
                    <a  v-if="channelData.extra_attributes.social.youtube != null"
                        :href="channelData.extra_attributes.social.youtube != null ? channelData.extra_attributes.social.youtube : 'javascript:void(0)'">
                        <i class="fa fa-youtube-square" aria-hidden="true"></i>
                    </a>
                </li>
                <li v-if="socialCount === 1">
                    Socials: NA
                </li>
                </ul>
              </div>
            </div>
            
          </div-->
    </div>
    <div id="faculty" class="container-fluid tab-pane fade"><br>
       <div class="container-fluid facultyachieve">
         <h3 class="mx-auto">Our Faculties</h3>
        <div class="row mb-5 mt-4">
          <div class="card shadow mx-auto facultyachievecard">
            <img src="/images/teacher.jpg">
            <div class="card-body mt-n1">
              <h6 class="card-title my-n1">Faculty Name</h6>
              <p class="card-text">
                Qualification
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
     <div id="facility" class="container-fluid tab-pane fade"><br>
          <h3>Our Facilities</h3>
          <hr>
          <br>
           <div class="row facilitydiv shadow py-3">
             <div class="col-sm-4 mb-n4">
                  <div class="d-flex justify-content-center my-4"><img class="mr-2" src="/images/electricity.svg" alt="Electricity Image"> Electricity:<strong class="ml-1">Yes</strong></div>
                  <div class="d-flex justify-content-center my-4"><img class="mr-2" src="/images/computer.svg" alt="computer Image"> Computer:<strong class="ml-1">Yes</strong></div>
                  <div class="d-flex justify-content-center my-4"><img class="mr-2" src="/images/fence.svg" alt="fence Image"> Boundary:<strong class="ml-1">Yes</strong></div>
             </div>
             <div class="col-sm-4 mb-n4">
                  <div class="d-flex justify-content-center my-4"><img class="mr-2" src="/images/playground.svg" alt="playground Image"> Playground:<strong class="ml-1">Yes</strong></div>
                  <div class="d-flex justify-content-center my-4"><img class="mr-2" src="/images/library.svg" alt="Library Image"> Library:<strong class="ml-1">Yes</strong></div>
                  <div class="d-flex justify-content-center my-4"><img class="mr-2" src="/images/book.svg" alt="Books Image"> No of Books:<strong class="ml-1">300</strong></div>
             </div>
             <div class="col-sm-4">
                  <div class="d-flex justify-content-center my-4"><img class="mr-2" src="/images/hostel.svg" alt="Hostel Image"> Hostel:<strong class="ml-1">Yes</strong></div>
                  <div class="d-flex justify-content-center my-4"><img class="mr-2" src="/images/bus.svg" alt="Bus Image"> Bus Services:<strong class="ml-1">Yes</strong></div>
             </div>
           </div>
    </div>
  </div>
</div>
<!-- new addition for nav ends-->

        
          </main>
    </div>
</template>

<script>
export default {
    data(){
        return{
            userData: {},
            channelData : {},
            domainUrl: location.origin,
        };
    },
    props: {
        user: {
            type : Object,
            default : null
        },
        channel: {
            type : Object,
            default : null
        }
    },
    created(){
        this.userData = this.user;
        this.channelData = this.channel;
        this.phoneNo = this.userData.phone ? this.userData.phone : 'Not provided';
        if(
            this.channelData.extra_attributes.social.facebook === null &&
            this.channelData.extra_attributes.social.linkedin === null &&
            this.channelData.extra_attributes.social.youtube === null
        ){
            this.socialCount = 1;
        }
    },
    mounted(){},
    methods:{},
}
</script>

<style scoped>

</style>
