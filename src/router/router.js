import React from 'react';
import { Route } from "react-router-dom";

function RouteWithSubRoutes({ routes }) {
    return (
        routes.map((route, i) => {
            return <Route
                key={i}
                path={route.path}
                render={() => (
                    <route.component routes={route.routes} />
                )}
            />
        })
    );
}
export {
    RouteWithSubRoutes
}

