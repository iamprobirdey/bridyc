Vue.component(
    "admin-verification",
    require("./components/admin/Verification.vue").default
);
var element = document.getElementById("admin-verification");
if (typeof element != "undefined" && element != null) {
    const cart = new Vue({
        el: "#admin-verification"
    });
}
