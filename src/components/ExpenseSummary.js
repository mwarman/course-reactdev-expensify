import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';

import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpenseSummary = (props) => {
  const expenseWord = props.count === 1 ? 'expense' : 'expenses';

  return (
    <div>
      <h1>Viewing {props.count} {expenseWord} totalling {numeral(props.total / 100).format('$0,0.00')}.</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    count: visibleExpenses.length,
    total: selectExpensesTotal(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpenseSummary);
