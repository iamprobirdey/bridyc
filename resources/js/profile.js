
Vue.component("student-profile", require("./components/Profile.vue").default);
var element = document.getElementById("student-profile");
if (typeof element != "undefined" && element != null) {
    const cart = new Vue({
        el: "#student-profile"
    });
}
