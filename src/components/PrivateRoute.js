import React from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import {Home} from "../pages";
const PrivateRoute = ({auth}) => {
  return auth.isAuthenticated ? <Home /> : <Navigate to="/login" />;
};
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
