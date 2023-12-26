import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { isAuthSelector } from "../../Store/Auth.js";
function GuestRoute({ children }) {
    const isAuth = useSelector(isAuthSelector);
    const user = JSON.parse(localStorage.getItem('userData'));
    //return isAuth ? children : <Navigate to="/Home" />;
    return user ? <Navigate to="/dashboard" /> : children;
    //return isAuth ? <Navigate to="/" /> : <Route {...props} />;
}
export default GuestRoute;
