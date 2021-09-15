import React from 'react'
// import Dashboard from '../Pages/Admin/Dashboard';
// import Login from '../Pages/Admin/Login';
import ContextProvider from "../context/Provider";
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../Pages/Admin/Dashboard';
import Login from '../Pages/Admin/Login';

function Admin() {
    return (
        <ContextProvider>
            <Switch>
                <Route path='/Admin/Login' component={Login} />
                <Route path='/Admin/' component={Dashboard} />
            </Switch>
        </ContextProvider>
    )
}

export default Admin
