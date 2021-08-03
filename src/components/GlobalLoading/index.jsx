// import { Roller } from 'react-awesome-spinners';
import { Spin } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';

function GlobalLoading({ children }) {
  const isLoading = useSelector((state) => state.GlobalReducer.isLoading);
  return (
    <div>
      <Spin
        tip="Loading..."
        size="large"
        spinning={isLoading}
        style={{ maxHeight: '100%' }}
      >
        {children}
      </Spin>
    </div>
  );
}

export default GlobalLoading;
