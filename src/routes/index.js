import React from "react";
import { Redirect } from "react-router-dom";

// import Authentication
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import ChangePassword from "../pages/Authentication/ChangePassword";
import ForgotPassword from "../pages/Authentication/ForgotPassword";

// Import Dashboard

import Dashboard from "../pages/Dashboard/index"


// rutas públicas y rutas privadas

const publicRoutes = [
    {path: "/login", component:Login},
    {path: "/logout", component:Logout},
    {path: "/change-password", component:ChangePassword},
    {path: "/forgot-password", component:ForgotPassword},
    {path: "/dashboard", component:Dashboard},

]

const authPrivateRoutes =[
    //{path: "/dashboard", component:Dashboard},
    {path:"/", exact:true, component:()=><Redirect to="/login"/> }
]

export {publicRoutes, authPrivateRoutes}
