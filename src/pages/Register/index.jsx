import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { GlobalActions } from '../../redux/rootAction';
import RegisForm from './components/RegisForm';
import SuccessRegisBox from './components/SuccessRegisBox';
import RegisterStyles from './Register.module.css';
import styles from '../../assets/moduleCss/form.module.css';

function Register(props) {
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

        {isRegisSuccess ? (
          <SuccessRegisBox onRegisSuccess={handleRegisSuccess} />
        ) : (
          <div>
            <Link to="/login" className={RegisterStyles.regisButtonLogin}>
              Log in
            </Link>
            <RegisForm onRegisSuccess={handleRegisSuccess} />
          </div>
        )}
      </div>
    </>
  );
}

export default Register;
