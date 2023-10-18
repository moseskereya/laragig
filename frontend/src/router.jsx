import {Navigate, createBrowserRouter} from "react-router-dom"
import Darshbord from "./components/Darshbord"
import Gigs from "./components/Gigs"
import Login from "./components/Login"
import Register from "./components/Register"
import Guest from "./components/Layouts/Guest"
import Default from "./components/Layouts/Default"

const router = createBrowserRouter([

    {
        path: '/',
        element: <Default/>,
        children:[
            {
                path:'/darshbord',
                element:<Navigate to="/"/>
            },
            {
                path:'/',
                element:<Darshbord/>
            },
            {
                path:'/gigs',
                element:<Gigs/>
            },
        ]
    },

    {
        path:'/',
        element:<Guest/>,
        children:[
            {
                path:'/register',
                element:<Register/>
            },
            {
                path:'/login',
                element:<Login/>
            }
        ]
    },
])

export default router