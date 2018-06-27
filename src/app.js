import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>
    this is from my dashboard component
    </div>

);

const AddExpensePage = () => (
    <div>
    this is from my add expense component
    </div>

);

const EditExpensePage = () => (
    <div>
    this is from my edit expense component
    </div>
);

const HelpPage = () => (
    <div>
    this is from my help expense component
    </div>
);

const NotFoundPage = () => (
    <div>
    404! - <Link to="/">Go home</Link>
    </div>
);

const Header = () => (
    <header>
    <h1>Expernsify</h1>
    <Link to="/">Dashboard</Link>
    <Link to="/create">Create Expense</Link>
    <Link to="/edit">Edit Expense</Link>
    <Link to="/help">Help</Link>
    </header>
);

const routes = (
<BrowserRouter>
    <div>
    <Header />
    <Switch>
    <Route path="/" component={ExpenseDashboardPage} exact={true}/>
    <Route path="/create" component={AddExpensePage} />
    <Route path="/edit" component={EditExpensePage} />
    <Route path="/help" component={HelpPage} />
    <Route  component={NotFoundPage} />
    </Switch>
    </div>
</BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));