import React from 'react';
import { useSelector } from 'react-redux';
import styles from './GlobalLoading.module.css';
import { Roller } from 'react-awesome-spinners';
// import { Spin, Alert } from 'antd';

function GlobalLoading({ children }) {
  const isLoading = useSelector((state) => state.GlobalReducer.isLoading);
  return (
    <div>
      {isLoading ? (
        <div className={styles.loading__container}>
          <Roller color="silver" />
        </div>
      ) : null}
      {/* <Spin tip="Loading..." size="large" spinning={true}>
        {children}
      </Spin> */}
    </div>
  );
}

export default GlobalLoading;
