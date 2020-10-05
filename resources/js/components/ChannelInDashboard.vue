<template>
  <div class="mx-lg-5 mt-lg-4">
    <main role="main" class="col-lg-10 ml-lg-auto">
      <!-- :srcset="
          channelData.cover_avatar != null
            ? domainUrl +
              '/media/channel/' +
              channelData.user_id +
              '/m-' +
              channelData.cover_avatar +
              ',' +
              domainUrl +
              '/media/channel/' +
              channelData.user_id +
              '/s-' +
              channelData.cover_avatar
            : '/images/banner2.png'
        " -->
      <img
        :src="
          channelData.cover_avatar != null
            ? domainUrl +
              '/media/channel/' +
              channelData.user_id +
              '/cover/' +
              channelData.cover_avatar
            : '/images/banner2.png'
        "
        class="inscover"
      />

      <div class="blankdiv">
        <div class="d-flex">
          <div class="d-flex flex-column">
            <p class="m-1">
              {{ channelData.title }}
            </p>
            <a
              class="m-1 insweb"
              :target="channelData.website_link === null ? '_self' : '_blank'"
              :href="
                channelData.website_link === null
                  ? 'javascript:void(0)'
                  : channelData.website_link
              "
              >Visit Website
              <i class="fa fa-external-link-square" aria-hidden="true"></i
            ></a>
          </div>

          <div class="ml-auto phemdiv">
            <p class="m-1 mr-2">
              <i
                class="fa fa-phone mr-1 d-none d-sm-inline"
                aria-hidden="true"
              ></i>
              Call us at {{ phoneNo }}
            </p>
            <p class="m-1 mr-2">
              <i
                class="fa fa-envelope mr-1 d-none d-sm-inline"
                aria-hidden="true"
              ></i>
              {{ userData.email }}
            </p>
          </div>
        </div>
      </div>

      <!--demotable-->
      <div class="container">
        <div class="d-flex mt-5 logo-title">
          <img
            :src="
              channelData.icon_avatar != null
                ? domainUrl +
                  '/media/channel/' +
                  channel.user_id +
                  '/avatar/' +
                  channelData.icon_avatar
                : '/images/college logo.jpg'
            "
            alt="Institute logo"
            class="img-fluid logoinstitute"
          />
          <h1 class="ml-1 ml-sm-4 institle">{{ channelData.title }}</h1>
        </div>
      </div>

      <div class="inssocial">
        <div class="d-flex" v-if="socialCount === 0">
          <a
            class="mr-1"
            v-if="channelData.extra_attributes.social.facebook != null"
            :href="
              channelData.extra_attributes.social.facebook != null
                ? channelData.extra_attributes.social.facebook
                : 'javascript:void(0)'
            "
          >
            <img src="/images/facebook.svg" alt="fb icon" />
          </a>
          <a
            class="mr-1"
            v-if="channelData.extra_attributes.social.linkedin != null"
            :href="
              channelData.extra_attributes.social.linkedin != null
                ? channelData.extra_attributes.social.linkedin
                : 'javascript:void(0)'
            "
          >
            <img src="/images/linkedin.svg" alt="li icon" />
          </a>
          <a
            class="mr-1"
            v-if="channelData.extra_attributes.social.instagram != null"
            :href="
              channelData.extra_attributes.social.instagram != null
                ? channelData.extra_attributes.social.instagram
                : 'javascript:void(0)'
            "
          >
            <img src="/images/instagram.svg" alt="ig icon" />
          </a>
          <a
            class="mr-1"
            v-if="channelData.extra_attributes.social.youtube != null"
            :href="
              channelData.extra_attributes.social.youtube != null
                ? channelData.extra_attributes.social.youtube
                : 'javascript:void(0)'
            "
          >
            <img src="/images/youtube.svg" alt="yt icon" />
          </a>
        </div>
        <div v-if="socialCount === 1" class="d-none">Socials: NA</div>
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
          <div id="home" class="container-fluid tab-pane active">
            <br />
            <!-- home content from  below STARTS-->
            <div class="row mb-5">
              <div class="card notice shadow-sm mx-0 col-sm-4">
                <div class="card-body">
                  <div class="card-title my-n2">
                    <h5>News and Notifications</h5>
                  </div>
                  <hr class="mx-n3" />
                  <ul class="nav">
                    <div class="mt-5">
                      <p
                        v-for="(notification,
                        index) in channelData.notification"
                        :key="index"
                      >
                        <i
                          class="fa fa-long-arrow-right"
                          aria-hidden="true"
                        ></i>
                        {{ notification.notify }}
                        <span class="badge badge-info" v-if="index === 0"
                          >New</span
                        >
                      </p>
                    </div>
                  </ul>
                </div>
              </div>

              <div
                id="carouid"
                class="carousel slide inscarou col-sm-8"
                data-ride="carousel"
              >
                <ul class="carousel-indicators">
                  <li
                    data-target="#carouid"
                    data-slide-to="0"
                    class="active"
                  ></li>
                  <li data-target="#carouid" data-slide-to="1"></li>
                  <li data-target="#carouid" data-slide-to="2"></li>
                  <li data-target="#carouid" data-slide-to="3"></li>
                  <li data-target="#carouid" data-slide-to="4"></li>
                </ul>
                <div class="carousel-inner">
                  <div
                    class="carousel-item"
                    :class="index === 0 ? 'active' : ''"
                    v-for="(college, index) in channelData.college_image"
                    :key="index"
                  >
                    <img
                      :src="
                        domainUrl +
                        '/media/channel/' +
                        channelData.user_id +
                        '/college/' +
                        college.image_path
                      "
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="container-fluid facultyachieve mt-n5 mt-sm-0">
              <h3 class="mx-auto">Achievements</h3>
              <div class="row mb-5 mt-4" v-if="channelData.achievement != null">
                <div
                  class="card shadow mx-auto facultyachievecard"
                  v-for="(achievement, index) in channelData.achievement"
                  :key="index"
                >
                  <img :src="domainUrl + '/' + achievement.image_path" />
                  <div class="card-body mt-n1">
                    <h6 class="card-title my-n1">{{ achievement.title }}</h6>
                    <p class="card-text">{{ achievement.description }}</p>
                  </div>
                </div>
              </div>
              <div v-else>No Achievements Provided</div>
            </div>
            <!-- home content from below ends-->
          </div>

          <div id="about" class="container-fluid tab-pane fade">
            <br />
            <div class="description shadow-sm mb-5">
              <h4 class="mb-4">Welcome to {{ channelData.title }}</h4>
              <p>
                {{
                  channelData.description != null ? channelData.description : ""
                }}
              </p>
            </div>

            <div class="princidiv mb-5">
              <div class="d-flex">
                <img src="/images/checkmark.svg" />
                <h3 class="mt-2">Message From The Principal</h3>
              </div>
              <div class="row mt-3">
                <div class="col-md-6">
                  <p>
                    {{
                      userData.message != null
                        ? userData.message
                        : "Message from Institute not provided"
                    }}
                  </p>
                </div>
                <div class="col-md-6">
                  <div class="card principalcard">
                    <img :src="domainUrl + '/images/' + userData.avatar" />
                    <!-- <img src="/image/default.jpg" /> -->
                    <div class="card-body mt-n1">
                      <h4 class="card-title my-n1">
                        {{ userData.name }}
                      </h4>
                      <p class="card-text">Principal, {{ channel.title }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h6 class="text-uppercase mt-2">Mission & Vision</h6>
            <p>
              {{
                userData.vission != null
                  ? userData.vission
                  : "Vission from Institute not provided"
              }}
            </p>

            <div class="container-fluid additionalinfo">
              <h3 class="text-uppercase">Additional Information</h3>
              <hr />
              <div class="insadditionalinfo row">
                <ul class="col">
                  <li>
                    Address: {{ channelData.district.name }},
                    {{ channelData.state.name }}
                  </li>
                  <li>Pin Code: {{ userData.verification.pin }}</li>
                  <li>Founded: {{ userData.verification.founded }}</li>
                </ul>
                <ul class="col">
                  <li>Medium: {{ channelData.village.name }}</li>
                  <li>Board: xxxx</li>
                  <li>Ownership: {{ userData.verification.ownership }}</li>
                </ul>
              </div>
            </div>
          </div>
          <div id="faculty" class="container-fluid tab-pane fade">
            <br />
            <div class="container-fluid facultyachieve">
              <h3 class="mx-auto">Our Faculties</h3>
              <div class="row mb-5 mt-4">
                <div
                  class="card shadow mx-auto facultyachievecard"
                  v-for="(teacher, index) in channelData.teacher"
                  :key="index"
                >
                  <img
                    :src="
                      teacher.user.avatar === 'default.jpg'
                        ? '/images/teacher.jpg'
                        : '/images/' + teacher.user.avatar
                    "
                  />
                  <div class="card-body mt-n1">
                    <h6 class="card-title my-n1">{{ teacher.user.name }}</h6>
                    <p class="card-text">Qualification</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="facility" class="container-fluid tab-pane fade">
            <br />
            <h3>Our Facilities</h3>
            <hr />
            <br />
            <div class="row facilitydiv shadow py-3">
              <div class="col-sm-4 mb-n4">
                <div class="d-flex justify-content-center my-4">
                  <img
                    class="mr-2"
                    src="/images/electricity.svg"
                    alt="Electricity Image"
                  />
                  Electricity:<strong class="ml-1">Yes</strong>
                </div>
                <div class="d-flex justify-content-center my-4">
                  <img
                    class="mr-2"
                    src="/images/computer.svg"
                    alt="computer Image"
                  />
                  Computer:<strong class="ml-1">Yes</strong>
                </div>
                <div class="d-flex justify-content-center my-4">
                  <img class="mr-2" src="/images/fence.svg" alt="fence Image" />
                  Boundary:<strong class="ml-1">Yes</strong>
                </div>
              </div>
              <div class="col-sm-4 mb-n4">
                <div class="d-flex justify-content-center my-4">
                  <img
                    class="mr-2"
                    src="/images/playground.svg"
                    alt="playground Image"
                  />
                  Playground:<strong class="ml-1">Yes</strong>
                </div>
                <div class="d-flex justify-content-center my-4">
                  <img
                    class="mr-2"
                    src="/images/library.svg"
                    alt="Library Image"
                  />
                  Library:<strong class="ml-1">Yes</strong>
                </div>
                <div class="d-flex justify-content-center my-4">
                  <img class="mr-2" src="/images/book.svg" alt="Books Image" />
                  No of Books:<strong class="ml-1">300</strong>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="d-flex justify-content-center my-4">
                  <img
                    class="mr-2"
                    src="/images/hostel.svg"
                    alt="Hostel Image"
                  />
                  Hostel:<strong class="ml-1">Yes</strong>
                </div>
                <div class="d-flex justify-content-center my-4">
                  <img class="mr-2" src="/images/bus.svg" alt="Bus Image" /> Bus
                  Services:<strong class="ml-1">Yes</strong>
                </div>
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
  data() {
    return {
      userData: {},
      channelData: {},
      domainUrl: location.origin,
    };
  },
  props: {
    user: {
      type: Object,
      default: null,
    },
    channel: {
      type: Object,
      default: null,
    },
  },
  created() {
    this.userData = this.user;
    this.channelData = this.channel;
    this.phoneNo = this.userData.phone ? this.userData.phone : "Not provided";
    if (
      this.channelData.extra_attributes.social.facebook === null &&
      this.channelData.extra_attributes.social.linkedin === null &&
      this.channelData.extra_attributes.social.youtube === null
    ) {
      this.socialCount = 1;
    }
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped>
</style>
