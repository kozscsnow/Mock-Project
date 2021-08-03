import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import RegisForm from './components/RegisForm';
import SuccessRegisBox from './components/SuccessRegisBox';
import RegisterStyles from './Register.module.css';
import './Register.scss';

function Register(props) {
  const { t } = useTranslation();
  const [isRegisSuccess, setIsRegisSuccess] = useState(false);

  const handleRegisSuccess = () => {
    setIsRegisSuccess(!isRegisSuccess);
  };

  return (
    <div className="register__wrapper">
      <div className="register__content">
        {isRegisSuccess ? (
          <SuccessRegisBox onRegisSuccess={handleRegisSuccess} />
        ) : (
          <div>
            <div className="register__image">
              <img
                src="./images/register-image.svg"
                alt="register"
                className="register__image-main"
              />
            </div>
            <RegisForm onRegisSuccess={handleRegisSuccess} />
            <Link to="/login" className={RegisterStyles.regisButtonLogin}>
              {t('login')}
            </Link>
            <img
              src="./images/wavesOpacity.svg"
              alt="register"
              className="register__image-wave"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Register;
