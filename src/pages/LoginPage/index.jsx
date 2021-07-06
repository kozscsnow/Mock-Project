import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { GlobalActions } from '../../redux/rootAction';
import LoginForm from './components/LoginForm';
import './LoginPage.css';

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
    } else if (
      username !== usernameLocalStorage ||
      password !== passwordLocalStorage
    ) {
      errorMessage = 'Your User or Password is Invalid';
    } else if (errorMessage) {
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

  const handleButtonCreateClick = () => {
    history.push('/register');
  };
  return (
    <div>
      <div className="login__container">
        <LoginForm
          onLoginFormSubmit={handleLoginFormSubmit}
          username={username}
          handleGetUsername={handleGetUsername}
          password={password}
          handleGetPassword={handleGetPassword}
          errorMessage={errorMessage}
        />
        <button to="/register">Creat Your Account</button>
      </div>
    </div>
  );
}

export default LoginPage;
