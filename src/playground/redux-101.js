import { createStore } from 'redux';

// Action Generators - Functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});
const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});
const setCount = ({ count } = {}) => ({
  type: 'SET',
  count
});
const resetCount = () => ({
  type: 'RESET'
});

// Reducers
//   1. Reducers are pure functions. i.e. the output is ONLY determined by the inputs; nothing outside the function
//   2. Never change the state or action input values

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
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
};

// Redux Store - a container for application state

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
})

// Redux Action - an object that is sent to the store

// Increment the count state
store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());

// Reset the count state
store.dispatch(resetCount());

// Decrement the count state
store.dispatch(decrementCount({ decrementBy: 5 }));
store.dispatch(decrementCount());

// Explicitly set the count state
store.dispatch(setCount({ count: 101 }));