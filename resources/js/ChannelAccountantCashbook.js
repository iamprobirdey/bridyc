Vue.component("channel-accountant-cashbook", require("./components/ChannelAccountantCashbook.vue").default);
var element = document.getElementById("channel-accountant-cashbook");
if (typeof element != "undefined" && element != null) {
    const cart = new Vue({
        el: "#channel-accountant-cashbook"
    });
}
