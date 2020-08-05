import React from 'react';
import { RouteWithSubRoutes } from '../router/router'
import { Switch } from "react-router-dom";
const Layouts = ({ routes }) => {
    return (
        <div id="layouts">
            layouts
            <Switch>
                <RouteWithSubRoutes routes={routes} />
            </Switch>
        </div>
    );
}

export default Layouts;



