import { Result, Button } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { GlobalActions } from '../../../../redux/rootAction';
import './SuccessRegisBox.css';
function SuccessRegisBox(props) {
  const { onRegisSuccess } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GlobalActions.setIsLoading(true));
    const loadingFake = setTimeout(() => {
      dispatch(GlobalActions.setIsLoading(false));
    }, 500);
    return () => {
      clearTimeout(loadingFake);
    };
  });

  const handleBtnRegisClick = () => {
    if (!onRegisSuccess) return;
    onRegisSuccess();
  };
  return (
    <Result
      status="success"
      title="Successfully Register!"
      subTitle="Congratulation"
      extra={[
        <Link to="/login" type="primary" key="goLogin">
          Go Login
        </Link>,
        <Button onClick={handleBtnRegisClick} key="regisAgain">
          Register another account
        </Button>,
      ]}
    />
  );
}

export default SuccessRegisBox;
