Vue.component("login-signup-model", require("./components/loginSignupModal.vue").default);
var element = document.getElementById("login-signup-model");
if (typeof element != "undefined" && element != null) {
    const cart = new Vue({
        el: "#login-signup-model"
    });
}
