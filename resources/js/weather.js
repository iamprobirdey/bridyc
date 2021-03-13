Vue.component("weather", require("./components/Weather.vue").default);
var element = document.getElementById("weather");
if (typeof element != "undefined" && element != null) {
    const cart = new Vue({
        el: "#weather"
    });
}
