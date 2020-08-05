import React from 'react';
import ReactDOM from 'react-dom';
import routes from './router/config'
import { RouteWithSubRoutes } from './router/router'
import { BrowserRouter, Switch } from "react-router-dom";
ReactDOM.render(<BrowserRouter>
    <Switch>
        <RouteWithSubRoutes routes={routes} />
    </Switch>
</BrowserRouter>, document.getElementById('root'))









