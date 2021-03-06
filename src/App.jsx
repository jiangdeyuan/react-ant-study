import React from 'react';
import { RouteWithSubRoutes } from './router/router'
import { Switch } from "react-router-dom";
const App = ({ routes }) => {
    console.log(routes);
    return (
        <div id="app">
            app
            <Switch>
                <RouteWithSubRoutes routes={routes} />
            </Switch>
        </div>
    );
}
export default App;