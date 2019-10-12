import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB0fyW2H37v92RBcrTdi7eghrbqPVmq54o",
    authDomain: "jkim-blog.firebaseapp.com",
    databaseURL: "https://jkim-blog.firebaseio.com",
    projectId: "jkim-blog",
    storageBucket: "jkim-blog.appspot.com",
    messagingSenderId: "996033739782",
    appId: "1:996033739782:web:4ef2ba8a88068e7fdb1787"
});

const db = firebaseApp.firestore();

export { db };