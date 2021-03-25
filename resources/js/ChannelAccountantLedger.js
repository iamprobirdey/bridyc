Vue.component("channel-accountant-ledger", require("./components/ChannelAccountantLedger.vue").default);
var element = document.getElementById("channel-accountant-ledger");
if (typeof element != "undefined" && element != null) {
    const cart = new Vue({
        el: "#channel-accountant-ledger"
    });
}
