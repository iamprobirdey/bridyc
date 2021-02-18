Vue.component("channel-supervisor", require("./components/ChannelSupervisor.vue").default);
var element = document.getElementById("channel-supervisor");
if (typeof element != "undefined" && element != null) {
    const cart = new Vue({
        el: "#channel-supervisor"
    });
}
