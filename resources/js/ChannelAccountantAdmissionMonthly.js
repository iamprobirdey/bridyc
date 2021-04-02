Vue.component("channel-accountant-admission-monthly", require("./components/accountant/MonthlyBill.vue").default);
var element = document.getElementById("channel-accountant-admission-monthly");
if (typeof element != "undefined" && element != null) {
    const cart = new Vue({
        el: "#channel-accountant-admission-monthly"
    });
}
