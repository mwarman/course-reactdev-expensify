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

database.ref().set({
  name: 'Matthew Warman',
  age: 39,
  isSingle: false,
  location: {
    city: 'Raleigh',
    country: 'United States'
  }
}).then(() => {
  console.log('Data is saved!');
}).catch((err) => {
  console.log('Firebase error:', err);
});

// database.ref().set('This is my data.');

// database.ref('age').set(33);
// database.ref('location/city').set('Wilmington');

database.ref('attributes').set({
  height: 76,
  weight: 175
}).then(() => {
  console.log('Attributes are set!');
}).catch((err) => {
  console.log('Firebase error:', err);
});
