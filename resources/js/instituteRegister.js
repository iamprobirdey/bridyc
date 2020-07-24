Vue.component("institute-register", require("./components/InstituteRegister.vue").default);
var element = document.getElementById("institute-register");
if (typeof element != "undefined" && element != null) {
    const cart = new Vue({
        el: "#institute-register"
    });
}
