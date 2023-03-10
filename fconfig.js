import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyDT6gFDKu5WZPRkMvF9VKTq2Q3UthaOclw",
    authDomain: "realtime-database-ba074.firebaseapp.com",
    databaseURL: "https://realtime-database-ba074-default-rtdb.firebaseio.com",
    projectId: "realtime-database-ba074",
    storageBucket: "realtime-database-ba074.appspot.com",
    messagingSenderId: "57020606258",
    appId: "1:57020606258:web:ecda8db6be20a36922d92b",
    measurementId: "G-S85EV6TZXB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);