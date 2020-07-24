window.Vue = require("vue");
Vue.component("channel", require("./components/Channel.vue").default);
var element = document.getElementById("channel");
if (typeof element != "undefined" && element != null) {
    const cart = new Vue({
        el: "#channel"
    });
}
