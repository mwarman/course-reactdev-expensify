import { createStore, combineReducers } from 'redux';

// Action Types
// ADD_EXPENSE
// REMOVE_EXPENSE
// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// Reducers
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  };
};

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  };
};

// Store
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

console.log(store.getState());

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
