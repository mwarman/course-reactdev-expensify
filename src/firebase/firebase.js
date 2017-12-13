import * as firebase from 'firebase';
import moment from 'moment';

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

// Push Expenses onto the DB
// const expenses = [{
//   description: 'Gum',
//   note: 'Bad breath',
//   amount: 195,
//   createdAt: moment().valueOf()
// }, {
//   description: 'Rent',
//   note: 'Gotta live somewhere',
//   amount: 109500,
//   createdAt: moment().subtract(4, 'days').valueOf()
// }, {
//   description: 'Credit Card',
//   note: 'Healthy credit score is a priority',
//   amount: 4500,
//   createdAt: moment().add(4, 'days').valueOf()
// }];
//
// expenses.forEach((expense) => {
//   database.ref('expenses').push(expense);
// });

// const snapshotToArray = (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   return expenses;
// };

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = snapshotToArray(snapshot);
//     console.log('expenses', expenses);
//   }).catch((err) => {
//     console.log('Fetch once failed.', err);
//   });

// Event: value -- all value changes
// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = snapshotToArray(snapshot);
//     console.log('expenses', expenses);
//   }, (err) => {
//     console.log('failed to process changed snapshot', err);
//   });

// Event: child_removed -- expense deleted
// database.ref('expenses')
//   .on('child_removed', (snapshot) => {
//     console.log(`child_removed key:${snapshot.key}, value:${JSON.stringify(snapshot.val())}`);
//   }, (err) => {
//     console.log('failed to process changed snapshot', err);
//   });

// Event: child_changed -- expense updated
// database.ref('expenses')
//   .on('child_changed', (snapshot) => {
//     console.log(`child_changed key:${snapshot.key}, value:${JSON.stringify(snapshot.val())}`);
//   }, (err) => {
//     console.log('failed to process changed snapshot', err);
//   });

// Event: child_added -- new expense inserted
// database.ref('expenses')
//   .on('child_added', (snapshot) => {
//     console.log(`child_added key:${snapshot.key}, value:${JSON.stringify(snapshot.val())}`);
//   }, (err) => {
//     console.log('failed to process changed snapshot', err);
//   });

// Push an Object onto an Array (collection)
// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React Native, Angular, Python'
// });

// Set data (on the root)
// database.ref()
//   .set({
//     name: 'Matthew Warman',
//     age: 39,
//     stressLevel: 6,
//     job: {
//       title: 'Software Developer',
//       company: 'Google'
//     },
//     location: {
//       city: 'Raleigh',
//       country: 'United States'
//     }
//   }).then(() => {
//     console.log('Set succeeded.');
//   }).catch((err) => {
//     console.log('Set failed.', err);
//   });

// Fetch data once
// database.ref()
//   .once('value')
//   .then((data) => {
//     const val = data.val();
//     console.log('Fetch succeeded.', val);
//   }).catch((err) => {
//     console.log('Fetch failed.', err);
//   });

// Fetch data when data change events occur
// const onValueChange = database.ref()
//   .on('value', (data) => {
//     console.log('Fetch succeeded.', data.val());
//   }, (err) => {
//     console.log('Fetch failed.', err);
//   });
//
// setTimeout(() => {
//   database.ref('age').set(55);
// }, 3000);
//
// setTimeout(() => {
//   database.ref().off('value', onValueChange);
// }, 6000);
//
// setTimeout(() => {
//   database.ref('age').set(30);
// }, 9000);

// Challenge - Subscribe to Data Value Changes
// const onValueChange = (snapshot) => {
//   const data = snapshot.val();
//   console.log(`${data.name} is a ${data.job.title} at ${data.job.company}.`);
// };
// database.ref()
//   .on('value', onValueChange, (err) => {
//     console.log('Problem subscribing to value changes.', err);
//   });
// setTimeout(() => {
//   database.ref('name').set('Matt Warman');
// }, 3000);
// setTimeout(() => {
//   database.ref('job/title').set('Engineer');
// }, 6000);
// setTimeout(() => {
//   database.ref('job/company').set('Amazon');
// }, 9000);

// database.ref()
//   .update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
//   }).then(() => {
//     console.log('Update succeeded.');
//   }).catch((err) => {
//     console.log('Update failed.', err);
//   });

// database.ref()
//   .remove()
//   .then(() => {
//     console.log('Remove succeeded.');
//   }).catch((err) => {
//     console.log('Remove failed.', err);
//   });
