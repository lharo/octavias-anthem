import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { DashboardScreen } from '../dashboard/DashboardScreen';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path = '/auth' component = { AuthRouter } />
                    <Route path = '/' component = { DashboardScreen } exact />
                    <Redirect to= '/' />
                </Switch>
            </div>
        </Router>
    )
}
