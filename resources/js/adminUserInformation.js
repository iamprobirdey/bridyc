Vue.component(
    "admin-user-information",
    require("./components/admin/UserInformation.vue").default
);
var element = document.getElementById("admin-user-information");
if (typeof element != "undefined" && element != null) {
    const vue = new Vue({
        el: "#admin-user-information"
    });
}
