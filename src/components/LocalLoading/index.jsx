import React from 'react';
import { useSelector } from 'react-redux';
// import styles from './GlobalLoading.module.css';
// import { Roller } from 'react-awesome-spinners';
import { Spin } from 'antd';

function LocalLoading({ children }) {
  const isLocalLoading = useSelector(
    (state) => state.GlobalReducer.isLocalLoading
  );
  return (
    <div>
      <Spin
        tip="Loading..."
        size="large"
        spinning={isLocalLoading}
        style={{ maxHeight: '100%' }}
      >
        {children}
      </Spin>
    </div>
  );
}

export default LocalLoading;
