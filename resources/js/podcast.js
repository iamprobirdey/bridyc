Vue.component("podcast-for-admin", require("./components/Podcast.vue").default);
var element = document.getElementById("podcast");
if (typeof element != "undefined" && element != null) {
    const cart = new Vue({
        el: "#podcast"
    });
}
