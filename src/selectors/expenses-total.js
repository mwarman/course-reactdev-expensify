export default (expenses = []) => {
  return expenses
    .map((expense) => expense.amount)
    .reduce((subTotal, itemAmount) => subTotal + itemAmount, 0);
};
