window.Vue = require("vue");
Vue.component("channel-with-slug", require("./components/ChannelWithSlug.vue").default);
var element = document.getElementById("channelwithslug");
if (typeof element != "undefined" && element != null) {
    const cart = new Vue({
        el: "#channelwithslug"
    });
}
