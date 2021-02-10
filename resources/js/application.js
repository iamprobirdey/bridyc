Vue.component("application", require("./components/Application.vue").default);
var element = document.getElementById("application");
if (typeof element != "undefined" && element != null) {
    const cart = new Vue({
        el: "#application"
    });
}
