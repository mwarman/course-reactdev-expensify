//
// Object Destructuring
//
// const person = {
//   // name: 'Matthew',
//   age: 43,
//   location: {
//     city: 'Raleigh',
//     temp: 60
//   }
// };
//
// // Destructuring with a default value
// const { name = 'Anonymous', age } = person;
// console.log(`${name} is ${age}.`);
//
// // Destructuring with renamed attribute
// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It is ${temperature} in ${city}.`);
// }
//
// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };
//
// const { name: publisherName = 'Self-Published' } = book.publisher;
//
// console.log(publisherName);

//
// Array Destructuring
//

// const address = ['101 E First St', 'Raleigh', 'North Carolina', '27081'];
// const [, city, state = 'New York'] = address;
// console.log(`You are in ${city} ${state}.`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [name, smPrice, mdPrice, lgPrice] = item;
console.log(`A medium ${name} costs ${mdPrice}.`);
