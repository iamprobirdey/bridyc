
window.Vue = require("vue");
Vue.component("channel-profile", require("./components/ChannelProfile.vue").default);
var element = document.getElementById("channel-profile");
if (typeof element != "undefined" && element != null) {
    const cart = new Vue({
        el: "#channel-profile"
    });
}
