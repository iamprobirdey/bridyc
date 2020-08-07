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
    .browserSync("http://127.0.0.1:8000/")
    .version();
