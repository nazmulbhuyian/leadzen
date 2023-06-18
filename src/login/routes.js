import { createBrowserRouter } from "react-router-dom";
import First from "./First";
import Followers from "./Followers";
import Following from "./Following";
import Login from "./login";
import Main from "./main";
import Register from "./register";
import User from "./user";
import Leadzen from "../components/Leadzen";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Leadzen></Leadzen>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/user/:username',
                element: <User></User>,
                loader: ({ params }) => fetch(`http://localhost:5000/users/${params.username}`)
            },
            {
                path: '/user/:username/followers',
                element: <Followers></Followers>,
                loader: ({ params }) => fetch(`http://localhost:5000/users/${params.username}/followers`)
            },
            {
                path: '/user/:username/following',
                element: <Following></Following>,
                loader: ({ params }) => fetch(`http://localhost:5000/users/${params.username}/following`)
            }
        ]
    }

])

export default router