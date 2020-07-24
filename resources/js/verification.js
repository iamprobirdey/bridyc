Vue.component("verification", require("./components/Verification.vue").default);
var element = document.getElementById("verification");
if (typeof element != "undefined" && element != null) {
    const cart = new Vue({
        el: "#verification"
    });
}
