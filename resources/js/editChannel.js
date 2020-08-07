// import VeeValidate from "vee-validate";
// window.Vue = require("vue");
// Vue.use(VeeValidate, { events: "blur" });
Vue.component("edit-channel", require("./components/EditChannel.vue").default);
var element = document.getElementById("edit_channel");
if (typeof element != "undefined" && element != null) {
    const cart = new Vue({
        el: "#edit_channel"
    });
}
