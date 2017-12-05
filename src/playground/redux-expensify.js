import { createStore, combineReducers } from 'redux';

const demoState = {
  expenses: [{
    id: 'randomStringOfCharacters',
    description: 'January Rent',
    note: 'This is the rent payment',
    amount: 54500, // in cents USD
    createdAt: 0   // timestamp in millis
  }],
  filters: {
    text: 'rent',
    sortBy: 'date', // 'date' or 'amount'
    startDate: undefined,
    endDate: undefined
  }
};
