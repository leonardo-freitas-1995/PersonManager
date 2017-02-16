import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'
import Home from './../Home/Home'

class AppRoutes extends React.Component {
    render(){
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Home}/>
            </Router>
        )
    }
}

export default AppRoutes;