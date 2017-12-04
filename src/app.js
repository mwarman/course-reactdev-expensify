import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

const ExpenseDashboardPage = () => (
  <div>Welcome to the Dashboard</div>
);

const AddExpensePage = () => (
  <div>Add an Expense</div>
);

const EditExpensePage = () => (
  <div>Edit an Expense</div>
);

const HelpPage = () => (
  <div>Get Help</div>
);

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const routes = (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={ExpenseDashboardPage} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
