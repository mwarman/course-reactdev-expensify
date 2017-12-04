import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, NavLink, Switch, Route } from 'react-router-dom';

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

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <nav>
      <ul>
        <li><NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink></li>
        <li><NavLink to="/create" activeClassName="is-active">Add Expense</NavLink></li>
        <li><NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink></li>
        <li><NavLink to="/help" activeClassName="is-active">Help</NavLink></li>
      </ul>
    </nav>
  </header>
);

const NotFoundPage = () => (
  <div>404 - <Link to="/">Go Home</Link></div>
);

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={ExpenseDashboardPage} />
        <Route exact path="/" component={ExpenseDashboardPage} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
