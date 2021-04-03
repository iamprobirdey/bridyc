const mix = require("laravel-mix");
mix.js("resources/js/app.js", "public/js")
    .js("resources/js/verification.js", "public/js")
    .js("resources/js/adminVerification.js", "public/js")
    .js("resources/js/dashboardBlade.js", "public/js")
    .js("resources/js/dashboard.js", "public/js")
    .js("resources/js/editChannel.js", "public/js")
    .js("resources/js/channel.js", "public/js")
    .js("resources/js/channelwithslug.js", "public/js")
    .js("resources/js/channelInDashboard.js", "public/js")
    .js("resources/js/loginSignupModal.js", "public/js")
    .js("resources/js/instituteRegister.js", "public/js")
    .js("resources/js/ChannelProfile.js", "public/js")
    .js("resources/js/contactus.js", "public/js")
    .js("resources/js/profile.js", "public/js")
    .js("resources/js/achievement.js", "public/js")
    .js("resources/js/channelteacher.js", "public/js")
    .js("resources/js/teacherProfile.js", "public/js")
    .js("resources/js/ChannelNotification.js", "public/js")
    //Service Worker
    .js("resources/js/firebase-messaging-sw.js", "public/")
    //Accountant
    .js("resources/js/ChannelAccountant.js", "public/js")
    .js("resources/js/ChannelAccountantLedger.js", "public/js")
    .js("resources/js/ChannelAccountantCashbook.js", "public/js")
    .js("resources/js/ChannelAccountantAdmission.js", "public/js")
    .js("resources/js/ChannelAccountantAdmissionMonthly.js", "public/js")


    .js("resources/js/application.js", "public/js")
    .js("resources/js/adminUserInformation.js", "public/js")
    .js("resources/js/ChannelSupervisor.js", "public/js")
    .js("resources/js/weather.js", "public/js")

    // .sass("resources/sass/studentIndex.scss", "public/css")
    // .sass("resources/sass/institutedashboard.scss", "public/css")
    .sass("resources/sass/app.scss", "public/css")
    .sass("resources/sass/index.scss", "public/css")
    .sass("resources/sass/application.scss", "public/css")
    .sass("resources/sass/faq.scss", "public/css")
    .sass("resources/sass/contact.scss", "public/css")
    .sass("resources/sass/privacy.scss", "public/css")
    .sass("resources/sass/institutedashboard.scss", "public/css")
    .sass("resources/sass/institutelandingpage.scss", "public/css")
    .sass("resources/sass/profile.scss", "public/css")
    .sass("resources/sass/about.scss", "public/css")
    .sass("resources/sass/login-register.scss", "public/css")
    .sass("resources/sass/error.scss", "public/css")
    .sass("resources/sass/blogs.scss", "public/css")
    .browserSync("http://127.0.0.1:8000/")
    .version();
