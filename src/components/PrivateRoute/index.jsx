import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
  const isLoggedIn = useSelector((state) => state.GlobalReducer.isLoggedIn);

  const checkLoggedIn = () => {
    // let usernameLocalStorage = localStorage.getItem('username');
    // let passwordLocalStorage = localStorage.getItem('password');
    // if (usernameLocalStorage === 'admin' && passwordLocalStorage === 'admin') {
    //   return true;
    // }
    // return false;
    return isLoggedIn;
  };

  return (
    <Route
      {...rest}
      render={(props) =>
        checkLoggedIn() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
