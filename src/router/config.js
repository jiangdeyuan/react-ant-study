import App from '../app'
import Home from '../views/home/home'
import Layouts from '../layouts/layouts'
import Loging from '../views/loging/loging'
const MENU = [
    {
        path: "/",
        component: Layouts,
        routes: [
            {
                path: "/main/home",
                component: Home,
            }
        ]
    },
]
const OTHER = [
    {
        path: "/loging",
        component: Loging
    },
]
export default [
    {
        path: "/",
        component: App,
        routes: [
            ...OTHER,
            ...MENU
        ]
    },
]