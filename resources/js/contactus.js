
Vue.component("contact-us", require("./components/ContactUs.vue").default);
var element = document.getElementById("contact-us");
if (typeof element != "undefined" && element != null) {
    const cart = new Vue({
        el: "#contact-us"
    });
}
