import { createStore } from 'redux';

// Redux Store - a container for application state

const store = createStore((state = { count: 0 }, action) => {
  console.log('running', action);
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  };
});

console.log(store.getState());

// Redux Action - an object that is sent to the store

// Increment the count state
store.dispatch({
  type: 'INCREMENT'
});
store.dispatch({
  type: 'INCREMENT'
});
console.log(store.getState());

// Reset the count state
store.dispatch({
  type: 'RESET'
});
console.log(store.getState());

// Decrement the count state
store.dispatch({
  type: 'DECREMENT'
});
console.log(store.getState());
