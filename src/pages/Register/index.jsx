import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { GlobalActions } from '../../redux/rootAction';
import RegisForm from './components/RegisForm';
import SuccessRegisBox from './components/SuccessRegisBox';
import RegisterStyles from './Register.module.css';
import styles from '../../assets/moduleCss/form.module.css';
import { useTranslation } from 'react-i18next';
import './Register.scss';

function Register(props) {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const history = useHistory();
  const [isRegisSuccess, setIsRegisSuccess] = useState(false);
  //Fake Loading
  useEffect(() => {
    const loadingFake = setTimeout(() => {
      dispatch(GlobalActions.setIsLoading(false));
    }, 500);
    return () => {
      clearTimeout(loadingFake);
    };
  });

  const handleRegisSuccess = () => {
    setIsRegisSuccess(!isRegisSuccess);
  };

  return (
    <div className="register__wrapper">
      <img
        src="./images/register-image.svg"
        alt="register"
        className="register__image-main"
      />
      {/* <div className="register__image-blob">
        <img
          src="./images/register-blob-1.svg"
          alt="register"
          className="register__image-blob--1"
        />
      </div> */}

      <div className="register__content">
        {isRegisSuccess ? (
          <SuccessRegisBox onRegisSuccess={handleRegisSuccess} />
        ) : (
          <div>
            <Link to="/login" className={RegisterStyles.regisButtonLogin}>
              {t('login')}
            </Link>
            <RegisForm onRegisSuccess={handleRegisSuccess} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Register;
