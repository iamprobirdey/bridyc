<template>
    <div class="mx-lg-5 mx-0">
        <main class="container-fluid px-1">
    <!--coverpic addition-->
    <div class="mx-lg-5 mt-lg-5 pt-lg-3">
      <img :src="channelData.cover_avatar != null ? domainUrl+'/media/channel/'+channel.user_id+'/'+channelData.cover_avatar : '/images/banner2.png'" class="inscover mt-n3">
      <div class="blankdiv shadow">
        <!--i class="fa fa-share-alt btnshare" aria-hidden="true"></i-->
        <div class="row mt-lg-n2 mx-0">
          <div class="col-md-6 d-flex flex-column">
            <!--p class="ml-n2 mb-1">A unit of abc society askjfhj kkhh fdbdf</p-->
         <a class="ml-n4 insweb px-1 mt-n1 mt-md-3" :target="channelData.website_link === null ? '_self' : '_blank'" :href="channelData.website_link === null ? 'javascript:void(0)' : channelData.website_link">Visit Website <i class="fa fa-external-link" aria-hidden="true"></i></a>
          </div>


        <div class="col-md-6 phemdiv text-md-right ml-n4">
          <p class="m-1 mr-2"><i class="fa fa-phone mr-1" aria-hidden="true" ></i>{{phoneNo}}</p>
          <p class="m-1 mr-2"><i class="fa fa-envelope mr-1" aria-hidden="true"></i>{{userData.email}}</p>
        </div>
       </div>
      </div>

        <div class="d-flex logo-title">
                 <img :src="channelData.icon_avatar != null ? domainUrl+'/media/channel/'+channel.user_id+'/'+channelData.icon_avatar : '/images/college logo.jpg'" alt="Institute logo" class="img-fluid logoinstitute">
                 <h1 class="ml-1 ml-sm-3 institle">{{channelData.title}}</h1>
        </div>
    </div>
<!-- social links-->
<div class="inssocial">
                <div class="d-flex flex-column flex-lg-row" v-if="socialCount === 0">
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
                <div v-if="socialCount === 1">
                    Socials: NA
                </div>
              </div>
<br>
<br>
<br>

<div class="inspills mx-lg-5">
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
       <div class="description mb-5 px-0">
                  <h2 class="mb-4 text-uppercase">Welcome to {{channelData.title}}</h2>
                <p>
                    {{
                        channelData.description != null ?
                        channelData.description : ''
                    }}
                </p>
            </div>
      <div class="row mb-5 mx-0 px-0">
           <div class="card notice shadow-sm border-0 mx-0 col-md-5 col-lg-4 px-0">
                  <div class="card-body">
                    <div class="card-title my-n2"><h5 class="text-uppercase text-center">News and Notifications</h5></div>
                    <hr class="w-25">
                    <div class="mt-5">
                      <p><i class="fa fa-long-arrow-right" aria-hidden="true"></i> Shads sdjahbdk skasdk jashdas jasdkn <span class="badge badge-info">New</span></p>
                      <p><i class="fa fa-long-arrow-right" aria-hidden="true"></i> Shads sdjahbdk skasdk jashdas jasdkn sbsakd jasdkas</p>
                      <p><i class="fa fa-long-arrow-right" aria-hidden="true"></i> Shads sdjahbdk skasdk jashdas jasdkn sbsakd jasdkas</p>
                      <p><i class="fa fa-long-arrow-right" aria-hidden="true"></i> Shads sdjahbdk skasdk jashdas </p>
                      <p><i class="fa fa-long-arrow-right" aria-hidden="true"></i> Shads sdjahbdk skasdk jashdas jasdkn sbsakd</p>
                    </div>
                  </div>
                </div>

              <div id="carouid" class="carousel slide inscarou col-md-7 col-lg-8" data-ride="carousel">
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


      <div class="container-fluid facultyachieve mt-lg-5 px-0">
         <h2 class="text-uppercase">Our Achievements</h2>
         <hr class="mt-n2">
        <div class="row mb-5 mt-5">
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

    <div id="about" class="container-fluid tab-pane fade">          
           <div class="princidiv mb-5">
                            <div class="d-flex">
                            <img class="mt-2" src="/images/checkmark.svg">
                            <h3 class="mt-2 text-uppercase">Message From The Principal</h3>
                            </div>
                <div class="row mt-3">
                     <div class="col-md-6">                  
                            <p class="principal-message">Lorem ipsum dolor sit amet, consectetur 
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
                <div>
                  <h6 class="text-uppercase mt-2">Mission & Vision</h6>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque iaculis risus quis tortor eleifend, non facilisis ante vulputate.
                    Donec iaculis, ex in euismod sagittis, turpis felis malesuada nisi, a facilisis ex enim ut nunc. Vestibulum ut tincidunt justo, 
                    sit amet faucibus elit.</p>
                </div>
           </div>


          <div class="container-fluid mt-5">
               <h2 class="text-uppercase">Additional Information</h2>
               <hr class="mt-n2">
             <div class="insadditionalinfo mt-4">
                      <p><img src="/images/address.svg" alt="address icon">  Address:  {{channelData.district.name}},
                                   {{channelData.state.name}}
                      </p>
                      <p><img src="/images/mailbox.svg" alt="pin code icon"> Pin Code:   {{userData.verification.pin}}</p>
                      <p><img src="/images/translation.svg" alt="language icon"> Medium:  {{channelData.village.name}}</p>
                      <p><img src="/images/grade.svg" alt="Exam board icon"> Board: xxxx</p>
                      <p><img src="/images/deed.svg" alt="ownership icon"> Ownership:  {{userData.verification.ownership}}</p>
                      <p><img src="/images/calendar.svg" alt="calender icon"> Founded:  {{userData.verification.founded}}</p>        
             </div>
          </div>

    </div>
    <div id="faculty" class="container-fluid tab-pane fade"><br>
       <div class="container-fluid facultyachieve">
         <h2 class="text-uppercase">Our Faculties</h2>
         <hr class="mt-n2">
        <div class="row mb-5 mt-5">
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
          <h2 class="text-uppercase">Infrastructure</h2>
          <hr class="mt-n2">
          
           <div class="row facilitydiv py-3 mt-5">
             <div class="col-sm-4">
                  <p><img class="mr-2" src="/images/electricity.svg" alt="Electricity Image"> Electricity:<strong class="ml-1">Yes</strong></p>
                  <p><img class="mr-2" src="/images/computer.svg" alt="computer Image"> Computer:<strong class="ml-1">Yes</strong></p>
                  <p><img class="mr-2" src="/images/fence.svg" alt="fence Image"> Boundary:<strong class="ml-1">Yes</strong></p>
             </div>
             <div class="col-sm-4">
                  <p><img class="mr-2" src="/images/playground.svg" alt="playground Image"> Playground:<strong class="ml-1">Yes</strong></p>
                  <p><img class="mr-2" src="/images/library.svg" alt="Library Image"> Library:<strong class="ml-1">Yes</strong></p>
                  <p><img class="mr-2" src="/images/book.svg" alt="Books Image"> No of Books:<strong class="ml-1">300</strong></p>
             </div>
             <div class="col-sm-4">
                  <p><img class="mr-2" src="/images/hostel.svg" alt="Hostel Image"> Hostel:<strong class="ml-1">Yes</strong></p>
                  <p><img class="mr-2" src="/images/bus.svg" alt="Bus Image"> Bus Services:<strong class="ml-1">Yes</strong></p>
             </div>
           </div>
    </div>
  </div>
</div>   
      </main>
<br>
    </div>
</template>

<script>
export default {
    data(){
        return{
            channelData: {},
            userData: {},
            domainUrl: location.origin,
            userId: null,
            phoneNo: '',
            socialCount: 0
        };
    },
    props:{
        user:{
            type : Object,
            default : null
        },
        id: {
            type : Number,
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
        this.userId = this.id;
        this.phoneNo = this.userData.phone ? this.userData.phone : 'Not provided';
            if(
                this.channelData.extra_attributes.social.facebook === null &&
                this.channelData.extra_attributes.social.linkedin === null &&
                this.channelData.extra_attributes.social.youtube === null
            ){
                this.socialCount = 1;
            }
        console.log(this.channelData);
        console.log(this.userData);
    },
    mounted(){},
    methods:{

    }
}
</script>

<style>

</style>
