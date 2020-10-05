Vue.component("channel-notification", require("./components/ChannelNotification.vue").default);
var element = document.getElementById("channel-notification");
if (typeof element != "undefined" && element != null) {
    const cart = new Vue({
        el: "#channel-notification"
    });
}
