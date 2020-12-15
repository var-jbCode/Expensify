import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import React from 'react';
import Add from '../components/Add'
import Header from '../components/Header'
import NotFound from '../components/NotFound'
import Help from '../components/Help'
import Dashboard from '../components/Dashboard';
import Edit from '../components/Edit';


const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path="/" component={Dashboard} exact={true} />
                    <Route path="/create" component={Add} />
                    <Route path="/edit/:id" component={Edit} />
                    <Route path="/help" component={Help} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default AppRouter;

