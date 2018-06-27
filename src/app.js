import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
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

const EditExpensePAge = () => (
    <div>
    this is from my edit expense component
    </div>
);

const routes = (
<BrowserRouter>
    <div>
    <Route path="/" component={ExpenseDashboardPage} exact={true}/>
    <Route path="/create" component={AddExpensePage} />
    <Route path="/edit" component={EditExpensePAge} />
    </div>
    
</BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));