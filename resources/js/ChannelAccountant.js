Vue.component("channel-accountant", require("./components/ChannelAccountant.vue").default);
var element = document.getElementById("channel-accountant");
if (typeof element != "undefined" && element != null) {
    const cart = new Vue({
        el: "#channel-accountant"
    });
}
