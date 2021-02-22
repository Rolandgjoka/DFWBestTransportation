import React from "react";
import { Redirect, Route } from "react-router-dom";
import StorageService from "./services/storageService";


export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    StorageService.getValueFromKey("userId") ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
);

