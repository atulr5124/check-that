// const firebaseConfig = {
//     apiKey: "AIzaSyCPpdSWyMxJ10kR190DWAhtjgVdG0i3hnY",
//     authDomain: "check-that-70299.firebaseapp.com",
//     databaseURL: "https://check-that-70299.firebaseio.com",
//     projectId: "check-that-70299",
//     storageBucket: "check-that-70299.appspot.com",
//     messagingSenderId: "431923448453",
//     appId: "1:431923448453:web:164cf383b7860aa16d77ec",
//     measurementId: "G-EK751H5CZH"
//   };

import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCPpdSWyMxJ10kR190DWAhtjgVdG0i3hnY",
    authDomain: "check-that-70299.firebaseapp.com",
    databaseURL: "https://check-that-70299.firebaseio.com",
    projectId: "check-that-70299",
    storageBucket: "check-that-70299.appspot.com",
    messagingSenderId: "431923448453",
    appId: "1:431923448453:web:164cf383b7860aa16d77ec",
    measurementId: "G-EK751H5CZH"
})

const db = firebaseApp.firestore()

export default db