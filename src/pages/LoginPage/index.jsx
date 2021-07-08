import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { GlobalActions } from '../../redux/rootAction';
import LoginForm from './components/LoginForm';
// import './LoginPage.css';
import styles from './LoginPage.module.css';
import formStyles from '../../assets/moduleCss/form.module.css';

// const history = createBrowserHistory();
function LoginPage(props) {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const dispatch = useDispatch();

  const validate = () => {
    let errorMessage = '';
    let usernameLocalStorage = localStorage.getItem('username');
    let passwordLocalStorage = localStorage.getItem('password');

    if (username === 'admin' && password === 'admin') {
      return true;
    }
    if (username !== usernameLocalStorage || password !== passwordLocalStorage) {
      errorMessage = 'Your User or Password is Invalid';
    }
    if (errorMessage) {
      setErrorMessage(errorMessage);
      return false;
    }

    return true;
  };

  const handleLoginFormSubmit = (e) => {
    e.preventDefault();
    let isFormValid = validate();
    if (isFormValid) {
      history.push('/');
      dispatch(GlobalActions.setIsLoggedIn(true));
      //Clear errorMessage
      setErrorMessage('');
    }
  };

  const handleGetUsername = (e) => {
    setUsername(e.target.value);
    // localStorage.setItem('username', e.target.value);
  };
  const handleGetPassword = (e) => {
    setPassword(e.target.value);
    // localStorage.setItem('password', e.target.value);
  };
  //Fake Loading
  useEffect(() => {
    const loadingFake = setTimeout(() => {
      dispatch(GlobalActions.setIsLoading(false));
    }, 500);
    return () => {
      clearTimeout(loadingFake);
    };
  });

  return (
    <div>
      <div className={formStyles.formContainer}>
        <LoginForm
          onLoginFormSubmit={handleLoginFormSubmit}
          username={username}
          handleGetUsername={handleGetUsername}
          password={password}
          handleGetPassword={handleGetPassword}
          errorMessage={errorMessage}
        />
        <Link to="/register" className={styles.loginButtonRegis}>
          Creat Your Account
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
