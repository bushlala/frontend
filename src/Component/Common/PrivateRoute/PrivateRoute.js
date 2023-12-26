import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { isAuthSelector } from "../../Store/Auth.js";
//import { warning } from "reactjs-toastr/lib/react-toast";
function PrivateRoute({children}) {
  const isAuth = useSelector(isAuthSelector);
  const user = JSON.parse(localStorage.getItem('userData')) ;
  return user ? children  : <Navigate to="/login" />;
  //return isAuth ? children  : <Navigate to="/login" />;
  //return isAuth ? <Route {...props} /> : <Navigate to="/login" />;
}

export default PrivateRoute;
