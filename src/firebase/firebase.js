import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDj5nF3zsCWrsIFeDLxuLJQ5TnmymKlCbQ",
  authDomain: "expensify-f9314.firebaseapp.com",
  databaseURL: "https://expensify-f9314.firebaseio.com",
  projectId: "expensify-f9314",
  storageBucket: "expensify-f9314.appspot.com",
  messagingSenderId: "276932573557"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };
