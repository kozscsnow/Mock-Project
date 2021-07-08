import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Avatar } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { PageHeader, Button, Descriptions, Menu } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalActions } from '../../redux/rootAction';

function HeaderHome(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.GlobalReducer.isLoggedIn);
  const handleLogout = () => {
    dispatch(GlobalActions.setIsLoggedIn(false));
    // dispatch(GlobalActions.resetStoreRedux());
  };
  return (
    <div className="site-page-header-ghost-wrapper">
      {/* <div className="logo">Logo</div> */}
      {/* <Menu mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu> */}
      <PageHeader
        ghost={false}
        onBack={() => window.history.back()}
        title="Home Page"
        subTitle="Covid-19"
        extra={[
          <Link key="1" to="/news">
            News
          </Link>,
          <Link key="6" to="/dashboard">
            Dashboard
          </Link>,
          <Link key="7" to="/countries">
            Countries
          </Link>,

          <Button onClick={() => history.push('/login')} key="2">
            Register
          </Button>,
          <Button key="5">
            {isLoggedIn ? (
              <Link to="" onClick={handleLogout} key="3">
                Log Out
              </Link>
            ) : (
              <Link to="/login" key="4">
                {' '}
                Log In
              </Link>
            )}
          </Button>,
        ]}
      >
        <Descriptions size="small" column={3}>
          <Descriptions.Item label="Created">Nguyễn Nhật Khánh</Descriptions.Item>

          <Descriptions.Item label="Creation Time">08-08-2021</Descriptions.Item>
          <Descriptions.Item label="Effective Time">08-08-2021</Descriptions.Item>
          <Descriptions.Item label="Remarks">Nguyễn Nhật Khánh</Descriptions.Item>
        </Descriptions>
      </PageHeader>
    </div>
  );
}

export default HeaderHome;