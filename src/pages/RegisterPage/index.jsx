import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { GlobalActions } from '../../redux/rootAction';
import RegisForm from './components/RegisForm';
import SuccessRegisBox from './components/SuccessRegisBox';
import './RegisterPage.css';

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
  const handleButtonLoginClick = () => {
    history.push('/login');
  };
  return (
    <>
      {/* <SuccessRegisBox /> */}
      {/* <button onClick={handleButtonLoginClick}>Log in</button> */}
      <Link to="/login">Log in</Link>

      {isRegisSuccess ? (
        <SuccessRegisBox onRegisSuccess={handleRegisSuccess} />
      ) : (
        <RegisForm onRegisSuccess={handleRegisSuccess} />
      )}
    </>
  );
}

export default RegisterPage;
