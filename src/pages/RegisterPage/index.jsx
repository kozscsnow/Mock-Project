import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { GlobalActions } from '../../redux/rootAction';
import RegisForm from './components/RegisForm';
import SuccessRegisBox from './components/SuccessRegisBox';
import RegisterPageStyles from './RegisterPage.module.css';
import styles from '../../assets/moduleCss/form.module.css';

function RegisterPage(props) {
  const dispatch = useDispatch();
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
    <>
      <div>
        {/* <SuccessRegisBox /> */}
        {/* <button onClick={handleButtonLoginClick}>Log in</button> */}
        <Link to="/login" className={RegisterPageStyles.regisButtonLogin}>
          Log in
        </Link>

        {isRegisSuccess ? (
          <SuccessRegisBox onRegisSuccess={handleRegisSuccess} />
        ) : (
          <RegisForm onRegisSuccess={handleRegisSuccess} />
        )}
      </div>
    </>
  );
}

export default RegisterPage;
