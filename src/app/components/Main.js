import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import { ConnectedDashboard } from './Dashboard';
import { ConnectedLogin } from './Login'
import { ConnectedSignup } from './Signup'
import { Router, Route } from 'react-router-dom';
import { history } from '../store/history';
import { ConnectedNavigation } from './Navigation';
import { ConnectTaskDetail } from './TaskDetail';
import { Redirect, Switch } from 'react-router';



const RouteGuard = Component => ({match}) =>{
    
    if (!store.getState().session.authenticated) {
        return <Redirect to="/"/>;

    } {
    return <Component match={match}/>
   }
}


export const Main = ()=>(
    <Router history={history} >
        <Switch>
             // this is an element which takes a provider as a prop
             // any connected components in this provider will have access to the store
            <Provider store={store} >
                <div className="container mt-3" >
                    < ConnectedNavigation/>
                    <Route exact path="/" component={ConnectedLogin} />
                    <Route exact path="/signup" component={ConnectedSignup}/>
                    <Route exact path="/dashboard" render={ RouteGuard(ConnectedDashboard)}/>
                    <Route exact path="/task/:id" render={RouteGuard(ConnectTaskDetail)} />
                </div>
            </Provider>
            </Switch>
    </Router>
);