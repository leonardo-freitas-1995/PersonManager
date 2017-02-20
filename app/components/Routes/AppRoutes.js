import React from 'react';
import { Router, Route, browserHistory, Redirect } from 'react-router'
import {IndexPage, PersonPage, NewPersonPage, EditPersonPage} from './../Pages/'

class AppRoutes extends React.Component {
    render(){
        return (
            <Router history={browserHistory}>
                <Redirect from="/" to="/index"/>
                <Route path="/index" component={IndexPage}/>
                <Route path="/new_person" component={NewPersonPage}/>
                <Route path="/edit_person/:id" component={EditPersonPage}/>
                <Route path="/person/:id" component={PersonPage}/>
            </Router>
        )
    }
}

export default AppRoutes;