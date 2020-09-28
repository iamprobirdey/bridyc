
Vue.component("teacher-profile", require("./components/TeacherProfile.vue").default);
var element = document.getElementById("teacher-profile");
if (typeof element != "undefined" && element != null) {
    const cart = new Vue({
        el: "#teacher-profile"
    });
}
