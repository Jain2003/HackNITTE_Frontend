import {Login,Admin,AdminPanel,Home,Profile,Register} from "../Pages";



const routes = [
    {
        title : "Login",
        path : "/",
        description : "Login Page",
        element  : <Login />,
    },
    {
        title : "Admin",
        path : "/admin/Login",
        description : "Admin Login Page",
        element  : <Admin />,
    },
    {
        title : "Admin Home",
        path : "/admin/home",
        description : "Admin Panel Page",
        element  : <AdminPanel />,
    },
    {
        title:"User home",
        path:"/home",
        description:" ",
        element:<Home/>,
    },
    {
        title:"User profile",
        path:"/prof",
        description:" ",
        element:<Profile/>,
    },

        title : "Register",
        path : "/register",
        description : "Register Page",
        element  : <Register />,
    },
];


export default routes;