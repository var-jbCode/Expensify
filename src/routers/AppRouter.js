import { Router, Route, Switch } from 'react-router-dom'
import React from 'react';
import createHistory from 'history/createBrowserHistory'
import Login from '../components/Login'
import Add from '../components/Add'
import NotFound from '../components/NotFound'
import Help from '../components/Help'
import Dashboard from '../components/Dashboard';
import Edit from '../components/Edit';
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export const history = createHistory();


const AppRouter = () => {
    return (
        <Router history={history}>
            <div>
                <Switch>
                    <PublicRoute path="/" component={Login} exact={true} />
                    <PrivateRoute path="/dashboard" component={Dashboard} />
                    <PrivateRoute path="/create" component={Add} />
                    <PrivateRoute path="/edit/:id" component={Edit} />
                    <Route path="/help" component={Help} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </Router>
    );
}

export default AppRouter;

