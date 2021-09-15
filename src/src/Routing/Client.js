import React from 'react'

import { Route, Switch } from 'react-router-dom';
import { InputCertificateId, InputValidation } from '../Pages/Client/Certificate';


function Client() {
    return (
        <Switch>
            <Route path='/Certificate/:id' component={InputValidation} />
            <Route path='/Certificate/' component={InputCertificateId} />
        </Switch>

    )
}

export default Client
