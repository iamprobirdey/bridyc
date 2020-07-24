window.Vue = require("vue");
//Vue.use(VeeValidate, { events: "blur" });
Vue.component("quote-and-time", require("./components/QuoteTime.vue").default);
var element = document.getElementById("quote_and_time");
if (typeof element != "undefined" && element != null) {
    const cart = new Vue({
        el: "#quote_and_time"
    });
}
