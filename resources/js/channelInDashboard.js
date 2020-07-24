window.Vue = require("vue");
Vue.component("channel-in-dashboard", require("./components/ChannelInDashboard.vue").default);
var element = document.getElementById("channelInDashboard");
if (typeof element != "undefined" && element != null) {
    const cart = new Vue({
        el: "#channelInDashboard"
    });
}
