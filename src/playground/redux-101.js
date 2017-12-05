import { createStore } from 'redux';

// Redux Store - a container for application state

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy
      };
    case 'DECREMENT':
      const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy
      };
    case 'SET':
      return {
        count: action.count
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  };
});

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
})

// Redux Action - an object that is sent to the store

// Increment the count state
store.dispatch({
  type: 'INCREMENT',
  incrementBy: 5
});
store.dispatch({
  type: 'INCREMENT'
});

// Reset the count state
store.dispatch({
  type: 'RESET'
});

// Decrement the count state
store.dispatch({
  type: 'DECREMENT',
  decrementBy: 5
});
store.dispatch({
  type: 'DECREMENT'
});

// Explicitly set the count state
store.dispatch({
  type: 'SET',
  count: 101
})
