import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import formStyles from '../../assets/moduleCss/form.module.css';
import LoginForm from './components/LoginForm';
import SocialMedia from './components/SocialMedia';
import styles from './Login.module.css';
import './Login.scss';

function Login(props) {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { t } = useTranslation();

  const validate = () => {
    let errorMessage = '';
    let listAccountsStorage = JSON.parse(
      localStorage.getItem('listAccountsStorage')
    );
    if (username === 'admin' && password === 'admin') {
      return true;
    }
    if (listAccountsStorage) {
      const checkAccount = listAccountsStorage.some((account) => {
        return username === account.username && password === account.password;
      });
      if (checkAccount) return checkAccount;
      errorMessage = 'Your User or Password is Invalid';
      setErrorMessage(errorMessage);
      return false;
    }
    errorMessage = 'Your User or Password is Invalid';
    setErrorMessage(errorMessage);
    return false;
  };
  const handleLoginFormSubmit = (e) => {
    e.preventDefault();
    let isFormValid = validate();
    if (isFormValid) {
      history.push('/');
      localStorage.setItem('isLoggedIn', true);
      //Clear errorMessage
      setErrorMessage('');
    }
  };
  const handleGetUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleGetPassword = (e) => {
    setPassword(e.target.value);
  };
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
