import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDNjuWb882zKvo3usbq2174riUgahT7kyo",
    authDomain: "clone-99ff0.firebaseapp.com",
    projectId: "clone-99ff0",
    storageBucket: "clone-99ff0.appspot.com",
    messagingSenderId: "1052102179538",
    appId: "1:1052102179538:web:20199cbc542a4d583f8b0b",
    measurementId: "G-93TWSMZJHC"
});

const db=firebaseApp.firestore();
const auth=firebase.auth();

export {db,auth};