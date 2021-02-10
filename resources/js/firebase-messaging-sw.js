
importScripts('https://www.gstatic.com/firebasejs/8.2.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.2/firebase-messaging.js');

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

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    const title = 'Hello World';
    const options = {
        body: payload.data.status
    };
    return self.registration.showNotification(title, options);
});
