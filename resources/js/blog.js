Vue.component("blog", require("./components/Blog.vue").default);
var element = document.getElementById("blog");
if (typeof element != "undefined" && element != null) {
    const cart = new Vue({
        el: "#blog"
    });
}
