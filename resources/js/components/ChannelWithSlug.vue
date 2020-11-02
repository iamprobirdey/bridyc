<template>
  <div class="mx-lg-5 mx-0">
    <main class="container-fluid px-1">
      <!--coverpic addition-->
      <div class="mt-lg-5 pt-lg-3">
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
            channelData.cover_avatar === 'institute-cover-default.jpg'
              ? '/images/' + channelData.cover_avatar
              : domainUrl +
                '/media/channel/' +
                channelData.user_id +
                '/cover/' +
                channelData.cover_avatar
          "
          class="inscover mt-n3"
        />
      </div>
      <div class="blankdiv shadow">
        <!--i class="fa fa-share-alt btnshare" aria-hidden="true"></i-->
        <div class="row mx-0">
          <div class="col-md-6 d-flex flex-column">
            <!--p class="ml-n2 mb-1">A unit of abc society askjfhj kkhh fdbdf</p-->
            <div
              class="insweb text-center"
              v-if="channelData.website_link === null"
            >
              Website: NA
            </div>

            <div v-else>
              <a
                class="insweb insweb-available px-2 py-1 mt-n1 mt-md-3"
                :target="channelData.website_link === null ? '_self' : '_blank'"
                :href="
                  channelData.website_link === null
                    ? 'javascript:void(0)'
                    : channelData.website_link
                "
              >
                <!--{{
                channelData.website_link === null
                  ? "No Website"
                  : "Visit Website"
              }}-->
                Visit website
                <img
                  src="/images/external-link-symbol.svg"
                  class="mt-n1"
                  alt="external link symbol"
                />
              </a>
            </div>
          </div>

          <div class="col-md-6 phemdiv text-md-right ml-n4 mb-n5">
            <p class="m-1 mr-2">
              <i class="fa fa-phone mr-1" aria-hidden="true"></i>
              {{ phoneNo }}
            </p>
            <p class="m-1 mr-2">
              <i class="fa fa-envelope mr-1" aria-hidden="true"></i
              >{{ userData.email }}
            </p>
          </div>
        </div>
        <div class="d-flex logo-title">
          <img
            :src="
              channelData.icon_avatar === 'institute-logo-default.jpg'
                ? '/images/' + channelData.icon_avatar
                : domainUrl +
                  '/media/channel/' +
                  channel.user_id +
                  '/avatar/' +
                  channelData.icon_avatar
            "
            alt="Institute logo"
            class="img-fluid logoinstitute"
          />
          <h1 class="ml-1 ml-sm-3 institle text-capitalize">
            {{ channelData.title }}
          </h1>
        </div>
      </div>

      <!-- social links-->
      <div class="inssocial">
        <div
          class="d-flex flex-lg-row justify-content-center"
          v-if="socialCount === 0"
        >
          <a
            class="mr-1"
            target="_blank"
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
            target="_blank"
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
            target="_blank"
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
            target="_blank"
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
        <div v-if="socialCount === 1">Social Links: NA</div>
      </div>

      <div class="faculty-request" v-if="isTeacher">
        <button
          class="btn btn-sm btn-warning"
          v-if="channelRequestDecider === 'can-request'"
          @click="requestForChannel()"
        >
          Add Institute
        </button>
        <button
          class="btn btn-sm btn-secondary"
          v-if="channelRequestDecider === 'in-progress'"
        >
          Request Sent
        </button>
        <button
          class="btn btn-sm btn-success"
          v-if="channelRequestDecider === 'accepted'"
        >
          <img src="/images/check-mark.svg" alt="correct symbol" />
          Your Institute
        </button>
      </div>
      <br />
      <br />
      <br />

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
          <div id="home" class="container-fluid tab-pane active">
            <br />
            <!-- home content from  below STARTS-->
            <div class="description mb-5 px-0">
              <h2 class="mb-4 text-uppercase">
                Welcome to {{ channelData.title }}
              </h2>
              <p>
                {{
                  channelData.description != null ? channelData.description : ""
                }}
              </p>
            </div>
            <div class="row mb-5 mx-0 px-0">
              <div
                class="card notice shadow-sm border-0 mx-0 col-md-5 col-lg-4 px-0"
              >
                <div class="card-body px-0">
                  <div class="card-title my-n2">
                    <h5 class="text-uppercase text-center">
                      News and Notifications
                    </h5>
                  </div>
                  <hr class="w-25" />
                  <div class="mt-5 mx-1">
                    <p
                      v-for="(notification, index) in channelData.notification"
                      :key="index"
                    >
                      {{ notification.notify }}
                      <span class="badge badge-info" v-if="index === 0"
                        >New</span
                      >
                    </p>
                  </div>
                </div>
              </div>

              <div
                id="carouid"
                class="carousel slide inscarou col-md-7 col-lg-8"
                data-ride="carousel"
              >
                
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
              </div>
            </div>

            <div class="container-fluid facultyachieve mt-lg-5 px-0">
              <h2 class="text-uppercase">Our Achievements</h2>
              <hr class="mt-n2" />
              <div class="row my-5" v-if="channelData.achievement != null">
                <div
                  class="card shadow mx-auto facultyachievecard mb-5"
                  v-for="(achievement, index) in channelData.achievement"
                  :key="index"
                >
                  <img
                    :src="
                      domainUrl +
                      '/' +
                      'media/channel/' +
                      channelData.user_id +
                      '/achievement/' +
                      achievement.image_path
                    "
                  />
                  <div class="card-body mt-n1">
                    <h6 class="card-title my-n1">{{ achievement.title }}</h6>
                    <p class="card-text">
                      {{ achievement.description.substr(0, 20) }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="text-center" v-else>No Achievements Provided</div>
            </div>
            <!-- home content from below ends-->
          </div>

          <div id="about" class="container-fluid tab-pane fade">
            <div class="princidiv mb-5">
              <div class="d-flex">
                <img class="mt-2" src="/images/checkmark.svg" />
                <h3 class="mt-2 text-uppercase">Message From The Principal</h3>
              </div>
              <div class="row mt-3">
                <div class="col-md-6">
                  <p class="principal-message">
                    {{
                      userData.message != null
                        ? userData.message
                        : "Message from Institute not provided"
                    }}
                  </p>
                </div>
                <div class="col-md-6">
                  <div class="card principalcard">
                    <img
                      :src="
                        userData.avatar === 'default.jpg'
                          ? '/images/' + userData.avatar
                          : domainUrl +
                            '/media/channel/' +
                            userData.id +
                            '/profile/' +
                            userData.avatar
                      "
                    />
                    <!-- <img src="/image/default.jpg" /> -->
                    <div class="card-body mt-n1">
                      <h4 class="card-title my-n1 text-capitalize">
                        {{ userData.name }}
                      </h4>
                      <p class="card-text text-capitalize">
                        Principal, {{ channel.title }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h6 class="text-uppercase mt-2">Mission & Vision</h6>
                <p>
                  {{
                    userData.vission != null
                      ? userData.vission
                      : "Vission from Institute not provided"
                  }}
                </p>
              </div>
            </div>

            <div class="container-fluid mt-5">
              <h2 class="text-uppercase">Additional Information</h2>
              <hr class="mt-n2" />
              <div class="insadditionalinfo mt-4 text-capitalize">
                <p>
                  <img src="/images/address.svg" alt="address icon" /> Address:
                  {{ channelData.district.name }},
                  {{ channelData.state.name }}
                </p>
                <p>
                  <img src="/images/mailbox.svg" alt="pin code icon" /> Pin
                  Code: {{ userData.verification.pin }}
                </p>
                <p>
                  <img src="/images/translation.svg" alt="language icon" />
                  Medium: {{ channelData.language.name }}
                </p>
                <p>
                  <img src="/images/grade.svg" alt="Exam board icon" /> Board:
                  <button
                    class="btn btn-info m-1"
                    v-for="(board, index) in channelData.board"
                    :key="index"
                  >
                    {{ board.name }}
                  </button>
                </p>
                <p>
                  <img src="/images/deed.svg" alt="ownership icon" /> Ownership:
                  {{ userData.verification.ownership }}
                </p>
                <p>
                  <img src="/images/calendar.svg" alt="calender icon" />
                  Founded: {{ userData.verification.founded }}
                </p>
              </div>
            </div>
          </div>
          <div id="faculty" class="container-fluid tab-pane fade">
            <br />
            <div class="container-fluid facultyachieve">
              <h2 class="text-uppercase">Our Faculties</h2>
              <hr class="mt-n2" />
              <div class="row my-5">
                <div
                  class="card shadow mx-auto facultyachievecard mb-5"
                  v-for="(teacher, index) in channelData.teacher"
                  :key="index"
                >
                  <img
                    :src="
                      teacher.user.avatar === 'default.jpg'
                        ? '/images/default.jpg'
                        : '/media/teacher/' +
                          teacher.user.id +
                          '/profile/s-' +
                          teacher.user.avatar
                    "
                  />
                  <div class="card-body">
                    <h6 class="card-title mt-3 text-center">
                      {{ teacher.user.name }}
                    </h6>
                    <!--p class="card-text mx-n2 text-center">Qualification</p-->
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="facility" class="container-fluid tab-pane fade">
            <br />
            <h2 class="text-uppercase">Infrastructure</h2>
            <hr class="mt-n2" />

            <div class="row facilitydiv py-3 mt-md-5">
              <div class="col-sm-4">
                <p>
                  <img
                    class="mr-2"
                    src="/images/stationery.svg"
                    alt="stationery Image"
                  />
                  Stationary:<strong class="ml-1 text-capitalize">
                    {{
                      channelData.stationary != null
                        ? channelData.stationary
                        : "Not Provided"
                    }}
                  </strong>
                </p>
                <p>
                  <img
                    class="mr-2"
                    src="/images/computer.svg"
                    alt="computer Image"
                  />
                  Computer:<strong class="ml-1 text-capitalize">
                    {{
                      channelData.computer_learning != null
                        ? channelData.computer_learning
                        : "Not Provided"
                    }}
                  </strong>
                </p>
                <p>
                  <img
                    class="mr-2"
                    src="/images/hostel.svg"
                    alt="Hostel Image"
                  />
                  Boys Hostel:<strong class="ml-1 text-capitalize">
                    {{
                      channelData.boys_hostel != null
                        ? channelData.boys_hostel
                        : "Not Provided"
                    }}
                  </strong>
                </p>
                <p>
                  <img
                    class="mr-2"
                    src="/images/hostel.svg"
                    alt="hostel Image"
                  />
                  Girls Hostel:<strong class="ml-1 text-capitalize">
                    {{
                      channelData.girls_hostel != null
                        ? channelData.girls_hostel
                        : "Not Provided"
                    }}
                  </strong>
                </p>
              </div>
              <div class="col-sm-4">
                <p>
                  <img
                    class="mr-2"
                    src="/images/playground.svg"
                    alt="playground Image"
                  />
                  Playground:<strong class="ml-1 text-capitalize">
                    {{
                      channelData.playground != null
                        ? channelData.playground
                        : "Not Provided"
                    }}
                  </strong>
                </p>
                <p>
                  <img
                    class="mr-2"
                    src="/images/library.svg"
                    alt="Library Image"
                  />
                  Library:<strong class="ml-1 text-capitalize">
                    {{
                      channelData.library != null
                        ? channelData.library
                        : "Not Provided"
                    }}
                  </strong>
                </p>
                <p>
                  <img class="mr-2" src="/images/book.svg" alt="Books Image" />
                  No of Books:<strong class="ml-1 text-capitalize">
                    {{
                      channelData.no_of_books != null
                        ? channelData.no_of_books
                        : "Not Provided"
                    }}
                  </strong>
                </p>
              </div>
              <div class="col-sm-4">
                <p>
                  <img
                    class="mr-2"
                    src="/images/canteen.svg"
                    alt="canteen Image"
                  />
                  Canteen:<strong class="ml-1 text-capitalize">
                    {{
                      channelData.canteen != null
                        ? channelData.canteen
                        : "Not Provided"
                    }}
                  </strong>
                </p>
                <p>
                  <img class="mr-2" src="/images/bus.svg" alt="Bus Image" /> Bus
                  Services:<strong class="ml-1 text-capitalize">
                    {{
                      channelData.bus_services != null
                        ? channelData.bus_services
                        : "Not Provided"
                    }}
                  </strong>
                </p>
                <p>
                  <img class="mr-2" src="/images/fence.svg" alt="fence Image" />
                  Boundary:<strong class="ml-1 text-capitalize">
                    {{
                      channelData.wall != null
                        ? channelData.wall
                        : "Not Provided"
                    }}
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      channelData: {},
      userData: {},
      currentuserData: {},
      domainUrl: location.origin,
      phoneNo: "",
      socialCount: 0,
      sessionUrl: window.location.pathname.split("/")[2],
      userID: "",
      isTeacher: false,
      channelRequestDecider: "",
      channelFacker: false,
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
    currentuser: {
      type: Object,
      default: null,
    },
    userid: {
      type: Number,
      default: null,
    },
    isteacher: {
      type: Boolean,
      default: null,
    },
  },
  created() {
    this.userData = this.user;
    this.channelData = this.channel;
    this.currentuserData = this.currentuser;
    console.log(this.currentuserData);
    this.phoneNo = this.userData.phone ? this.userData.phone : "Not provided";
    this.userID = this.userid;
    this.isTeacher = this.isteacher;
    if (
      this.channelData.extra_attributes.social.facebook === null &&
      this.channelData.extra_attributes.social.linkedin === null &&
      this.channelData.extra_attributes.social.youtube === null
    ) {
      this.socialCount = 1;
    }
  },
  mounted() {
    this.getChannelSession();
    this.requestChannelSatisfier();
  },
  methods: {
    requestChannelSatisfier() {
      if (this.isTeacher && this.currentuserData != null) {
        if (this.currentuserData.request === "in-progress")
          this.channelRequestDecider = "in-progress";

        if (this.currentuserData.request === "accepted")
          this.channelRequestDecider = "accepted";

        if (
          this.currentuserData.request === "rejected" &&
          this.currentuserData.channel_id != this.channelData.id
        )
          this.channelRequestDecider = "can-request";
      }
      if (this.isTeacher && this.currentuserData == null) {
        this.channelRequestDecider = "can-request";
        this.channelFacker = true;
      }
    },
    requestForChannel() {
      if (this.channelFacker) {
        axios
          .get(
            "/api/teacher/request/for/channel/" +
              this.userID +
              "/" +
              this.channelData.id
          )
          .then((response) => {
            if (response.data.message) {
              this.channelRequestDecider = "in-progress";
              this.channelFacker = false;
            }
          })
          .catch((errors) => {});
      }
    },
    getChannelSession() {
      if (sessionStorage.getItem([this.sessionUrl]) != this.channelData.id) {
        sessionStorage.setItem([this.sessionUrl], this.channelData.id);
        this.goForMostViewed(this.channelData.id);
      }
    },
    goForMostViewed(channelId) {
      axios
        .get("/api/store/channel/session/" + channelId)
        .then((response) => {
          if (!response.data.message) this.goForMostViewed();
        })
        .catch((errors) => {});
    },
    teacherDecider(teacher) {
      if (teacher.avatar === "default.jpg") return "/images/teacher.jpg";
    },
  },
};
</script>

<style>
</style>
