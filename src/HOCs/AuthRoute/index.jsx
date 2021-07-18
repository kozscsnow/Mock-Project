import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

function AuthRoute({ component: Component, ...rest }) {
  const isLoggedIn = useSelector((state) => state.GlobalReducer.isLoggedIn);
  const checkLoggedIn = () => {
    // let usernameLocalStorage = localStorage.getItem('username');
    // let passwordLocalStorage = localStorage.getItem('password');
    // if (usernameLocalStorage === 'admin' && passwordLocalStorage === 'admin') {
    //   return true;
    // }
    // return false;
    // const isLoggedIn = localStorage.getItem('isLoggedIn');

    return isLoggedIn;
  };

  return (
    <Route
      {...rest}
      render={(props) =>
        checkLoggedIn() ? (
          <Redirect
            to={{
              pathname: '/',
              state: { from: props.location },
            }}
          />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}

export default AuthRoute;
