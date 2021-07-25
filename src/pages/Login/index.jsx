import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { GlobalActions } from '../../redux/rootAction';
import LoginForm from './components/LoginForm';
// import './LoginPage.css';
import styles from './Login.module.css';
import formStyles from '../../assets/moduleCss/form.module.css';
import SocialMedia from './components/SocialMedia';
import { useTranslation } from 'react-i18next';
import './Login.scss';
// import login_image from '../../assets/images/login-image.svg';

// const history = createBrowserHistory();
function Login(props) {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const validate = () => {
    let errorMessage = '';
    let usernameLocalStorage = localStorage.getItem('username');
    let passwordLocalStorage = localStorage.getItem('password');

    if (username === 'admin' && password === 'admin') {
      return true;
    }
    if (
      username !== usernameLocalStorage ||
      password !== passwordLocalStorage
    ) {
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
      localStorage.setItem('isLoggedIn', true);
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
    <div className="login__wrapper">
      <div className={formStyles.formContainer}>
        <div className={styles.imageContainer}>
          <img
            src="./images/login-image.svg"
            alt="login_image"
            className={styles.image}
          />
        </div>
        <LoginForm
          onLoginFormSubmit={handleLoginFormSubmit}
          username={username}
          handleGetUsername={handleGetUsername}
          password={password}
          handleGetPassword={handleGetPassword}
          errorMessage={errorMessage}
        />
        <Link to="/register" className={styles.loginButtonRegis}>
          {t('login_create-your-account')}
        </Link>
        <SocialMedia />
      </div>
    </div>
  );
}

export default Login;
