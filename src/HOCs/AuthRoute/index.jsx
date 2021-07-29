import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function AuthRoute({ component: Component, ...rest }) {
  // const isLoggedIn = useSelector((state) => state.GlobalReducer.isLoggedIn);
  const checkLoggedIn = () => {
    // let usernameLocalStorage = localStorage.getItem('username');
    // let passwordLocalStorage = localStorage.getItem('password');
    // if (usernameLocalStorage && passwordLocalStorage) {
    //   return true;
    // }
    // return false;
    const isLoggedIn = localStorage.getItem('isLoggedIn');
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
