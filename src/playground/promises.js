const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({
    //   name: 'Matthew',
    //   age: 33
    // });
    reject('Something went wrong!');
  }, 3000);
});

console.log('Async logic invoked and I have the promise.');

promise.then((data) => {
  console.log('Promise resolved with data:', data);
}).catch((error) => {
  console.log('Promise rejected with error:', error);
});
