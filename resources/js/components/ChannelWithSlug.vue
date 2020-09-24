<template>
  <div>
    <main class="container-fluid">
      <!--coverpic addition-->
      <img
        :srcset="
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
        "
        :src="
          channelData.cover_avatar != null
            ? domainUrl +
              '/media/channel/' +
              channelData.user_id +
              '/' +
              channelData.cover_avatar
            : '/images/banner2.png'
        "
        class="inscover insusercover"
      />
      <div class="blankdiv">
        <i class="fa fa-share-square-o btnshare" aria-hidden="true"></i>
        <div class="d-flex mt-n4">
          <div class="d-flex flex-column">
            <!-- <p class="ml-n3 mb-1">A unit of abc society askjfhjkkhh</p> -->
            <a
              class="ml-n3 insweb"
              :target="channelData.website_link === null ? '_self' : '_blank'"
              :href="
                channelData.website_link === null
                  ? 'javascript:void(0)'
                  : channelData.website_link
              "
            >
              Visit Website
              <i class="fa fa-external-link" aria-hidden="true"></i>
            </a>
          </div>

          <div class="ml-auto phemdiv">
            <p class="m-1 mr-2">
              <i class="fa fa-phone mr-1" aria-hidden="true"></i>
              {{ phoneNo }}
            </p>
            <p class="m-1 mr-2">
              <i class="fa fa-envelope mr-1" aria-hidden="true"></i>
              {{ userData.email }}
            </p>
            <button
              class="btn btn-primary"
              v-if="channelRequestChecker"
              @click="requestForChannel()"
            >
              Request Channel to accept
            </button>
            <button class="btn btn-success" v-if="channelRequestsuccefull">
              Channel Successfully Requested
            </button>
          </div>
        </div>
      </div>

      <div class="d-flex mt-5 logo-title">
        <img
          :src="
            channelData.icon_avatar != null
              ? domainUrl +
                '/media/channel/' +
                channelData.user_id +
                '/' +
                channelData.icon_avatar
              : '/images/college logo.jpg'
          "
          alt="Institute logo"
          class="img-fluid logoinstitute"
        />
        <h1 class="ml-4 institle">{{ channelData.title }}</h1>
      </div>

      <div class="row">
        <div class="col-sm-3">
          <div class="card achievecard shadow">
            <div class="card-body">
              <div class="card-title">
                Achievements
                <i class="fa fa-trophy" aria-hidden="true"></i>
              </div>
              <hr />
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
        </div>
        <div class="col-sm-9 mb-n5">
          <div class="description">
            <h4>Overview</h4>
            <hr />
            <p>
              {{
                channelData.description != null ? channelData.description : ""
              }}
            </p>
          </div>

          <div class="container mt-3">
            <div
              id="carouid"
              class="carousel slide inscarou"
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
                <div class="carousel-item active">
                  <img src="/images/testcollege.jpg" />
                </div>
                <div class="carousel-item">
                  <img src="/images/testcollege2.jpg" />
                </div>
                <div class="carousel-item">
                  <img src="/images/testcollege3.jpg" />
                </div>
                <div class="carousel-item">
                  <img src="/images/testcollege4.jpg" />
                </div>
                <div class="carousel-item">
                  <img src="/images/testcollege5.jpg" />
                </div>
              </div>
            </div>
          </div>
          <div class="insimages mt-3">
            <img
              id="imgmain"
              src="/images/testcollege.jpg"
              class="border p-1"
            />
            <span class="sub-img">
              <img
                src="/images/testcollege.jpg"
                class="imgpreview border p-1"
              />
              <img
                src="/images/testcollege2.jpg"
                class="imgpreview border p-1"
              />
              <img
                src="/images/testcollege3.jpg"
                class="imgpreview border p-1"
              />
              <img
                src="/images/testcollege4.jpg"
                class="imgpreview border p-1"
              />
              <img
                src="/images/testcollege5.jpg"
                class="imgpreview border p-1"
              />
            </span>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div class="row mx-auto mt-5">
          <div class="col-sm-5 insaddress">
            <h4 class="shadow">Contact Us</h4>
            <div class="addbody">
              <ul class="nav flex-column">
                <li>
                  Address:
                  {{ channelData.title }}, {{ channelData.district.name }},
                  {{ channelData.state.name }}
                  {{ userData.verification.pin }}
                  ,India
                </li>
                <li>Email: {{ userData.email }}</li>
                <li>Phone No: {{ phoneNo }}</li>
                <li v-if="socialCount === 0">
                  Socials:
                  <a
                    v-if="channelData.extra_attributes.social.facebook != null"
                    :href="
                      channelData.extra_attributes.social.facebook != null
                        ? channelData.extra_attributes.social.facebook
                        : 'javascript:void(0)'
                    "
                  >
                    <i
                      :class="'fa fa-facebook-official'"
                      aria-hidden="true"
                    ></i>
                  </a>
                  <a
                    v-if="channelData.extra_attributes.social.linkedin != null"
                    :href="
                      channelData.extra_attributes.social.linkedin != null
                        ? channelData.extra_attributes.social.linkedin
                        : 'javascript:void(0)'
                    "
                  >
                    <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                  </a>
                  <a
                    v-if="channelData.extra_attributes.social.youtube != null"
                    :href="
                      channelData.extra_attributes.social.youtube != null
                        ? channelData.extra_attributes.social.youtube
                        : 'javascript:void(0)'
                    "
                  >
                    <i class="fa fa-youtube-square" aria-hidden="true"></i>
                  </a>
                </li>
                <li v-if="socialCount === 1">Socials: Not provided</li>
              </ul>
            </div>
          </div>
          <div class="col-sm-1"></div>
          <div class="col-sm-5 card info shadow">
            <div class="card-body">
              <div class="card-title">College Information</div>
              <hr />
              <ul class="nav flex-column">
                <li>Regd No: xxxxxxxxxxxxxxxxxxxx</li>
                <li>
                  Location: {{ channelData.village.name }},{{
                    channelData.district.name
                  }}
                </li>
                <li>Ownership: {{ userData.verification.ownership }}</li>
                <li>Founded: {{ userData.verification.founded }}</li>
              </ul>
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
      channelRequestChecker: false,
      channelRequestsuccefull: false,
      userID: "",
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
  },
  created() {
    this.userData = this.user;
    this.channelData = this.channel;
    this.currentuserData = this.currentuser;
    this.phoneNo = this.userData.phone ? this.userData.phone : "Not provided";
    this.userID = this.userid;
    if (
      this.channelData.extra_attributes.social.facebook === null &&
      this.channelData.extra_attributes.social.linkedin === null &&
      this.channelData.extra_attributes.social.youtube === null
    ) {
      this.socialCount = 1;
    }
    console.log(this.currentuser);
  },
  mounted() {
    this.getChannelSession();
    this.requestChannelSatisfier();
  },
  methods: {
    requestChannelSatisfier() {
      if (this.currentuserData != null) {
        if (
          this.currentuserData.request === "in-progress" &&
          this.currentuserData.channel_id == this.channelData.id
        ) {
          this.channelRequestsuccefull = true;
        }
        if (
          this.currentuserData.request === "rejected" &&
          this.currentuserData.channel_id != this.channelData.id
        ) {
          this.channelRequestChecker = true;
        }
        this.channelRequestChecker = false;
      }
      if (this.currentuserData == null) this.channelRequestChecker = true;
    },
    requestForChannel() {
      axios
        .get(
          "/api/teacher/request/for/channel/" +
            this.userID +
            "/" +
            this.channelData.id
        )
        .then((response) => {
          if (response.data.message) {
            this.channelRequestChecker = false;
            this.channelRequestsuccefull = true;
          }
        })
        .catch((errors) => {});
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
  },
};
</script>

<style>
</style>
