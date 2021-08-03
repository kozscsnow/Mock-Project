import { Button, Result } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import './SuccessRegisBox.css';
function SuccessRegisBox(props) {
  const { onRegisSuccess } = props;

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
