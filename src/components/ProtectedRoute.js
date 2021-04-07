import React from 'react';
import {Redirect, Route} from 'react-router-dom';

export const ProtectedRoute = ({component: Component, ...props}) => {
  return (
      <Route>
        {
          () => props.loggedIn === true ? <Component {...props} /> : <Redirect to="/sign-in"/>
        }
      </Route>
  );
};