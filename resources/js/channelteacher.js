Vue.component("channel-teacher", require("./components/ChannelTeacher.vue").default);
var element = document.getElementById("channelTeacher");
if (typeof element != "undefined" && element != null) {
    const cart = new Vue({
        el: "#channelTeacher"
    });
}
