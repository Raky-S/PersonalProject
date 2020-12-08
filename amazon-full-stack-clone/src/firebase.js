// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCOc1Iot7l439cyxQpcNq3na4NhVt16qdo",
    authDomain: "clone-7e2a7.firebaseapp.com",
    databaseURL: "https://clone-7e2a7.firebaseio.com",
    projectId: "clone-7e2a7",
    storageBucket: "clone-7e2a7.appspot.com",
    messagingSenderId: "898612290435",
    appId: "1:898612290435:web:7b8056f5b4f6315c394cb6",
    measurementId: "G-2BR3ST0CNE"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };