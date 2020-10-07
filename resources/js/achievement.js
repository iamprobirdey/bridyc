Vue.component("channel-achievement", require("./components/Achievement.vue").default);
var element = document.getElementById("channelAchievement");
if (typeof element != "undefined" && element != null) {
    const cart = new Vue({
        el: "#channelAchievement"
    });
}
