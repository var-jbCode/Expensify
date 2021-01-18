import { Router, Route, Switch } from 'react-router-dom'
import React from 'react';
import createHistory from 'history/createBrowserHistory'
import Login from '../components/Login'
import Add from '../components/Add'
import Header from '../components/Header'
import NotFound from '../components/NotFound'
import Help from '../components/Help'
import Dashboard from '../components/Dashboard';
import Edit from '../components/Edit';

export const history = createHistory();


const AppRouter = () => {
    return (
        <Router history={history}>
            <div>
                <Header />
                <Switch>
                    <Route path="/" component={Login} exact={true} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/create" component={Add} />
                    <Route path="/edit/:id" component={Edit} />
                    <Route path="/help" component={Help} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </Router>
    );
}

export default AppRouter;

