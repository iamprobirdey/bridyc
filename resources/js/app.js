
// importScripts('https://www.gstatic.com/firebasejs/8.2.2/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/8.2.2/firebase-analytics.js');
// importScripts('https://www.gstatic.com/firebasejs/8.2.2/firebase-messaging.js');

{/* <script src="https://www.gstatic.com/firebasejs/8.2.2/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.2.2/firebase-analytics.js"></script> */}
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

window.Vue = require("vue");
//import Croppa from 'vue-croppa';
import Toasted from "vue-toasted";
import VeeValidate from "vee-validate";
import _, { includes } from "lodash";

Vue.use(Toasted);
Vue.use(VeeValidate);
//Vue.use(Croppa);


/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component(
    "example-component",
    require("./components/ExampleComponent.vue").default
);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


const app = new Vue({
    el: "#app"
});


var firebaseConfig = {
    apiKey: "AIzaSyD1QOe8gYXL9bLBkxjfK9yhBOMnF80W7sg",
    authDomain: "bridyc-89d72.firebaseapp.com",
    projectId: "bridyc-89d72",
    storageBucket: "bridyc-89d72.appspot.com",
    messagingSenderId: "774509716299",
    appId: "1:774509716299:web:4a4f7f5ac5f1185287bece",
    measurementId: "G-QF5FY5Y9NT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const messaging = firebase.messaging();

// messaging.requestPermission()
//     .then(function () {
//         console.log('Permission Granted');
//         return messaging.getToken();
//     })
//     .then(function (token) {
//         console.log(token);
//     })
//     .catch(function (err) {
//         console.log(err);
//     });

messaging.onMessage(function (payload) {
    console.log('On Message: ', payload);
});

// messaging.getToken({ vapidKey: 'AIzaSyD1QOe8gYXL9bLBkxjfK9yhBOMnF80W7sg' }).then((currentToken) => {
//     if (currentToken) {
//         sendTokenToServer(currentToken);
//         updateUIForPushEnabled(currentToken);
//     } else {
//         // Show permission request.
//         console.log('No registration token available. Request permission to generate one.');
//         // Show permission UI.
//         updateUIForPushPermissionRequired();
//         setTokenSentToServer(false);
//     }
// }).catch((err) => {
//     console.log('An error occurred while retrieving token. ', err);
//     showToken('Error retrieving registration token. ', err);
//     setTokenSentToServer(false);
// });
