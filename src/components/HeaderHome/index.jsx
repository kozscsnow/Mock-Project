import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Anchor, Avatar, Col, Row } from 'antd';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { PageHeader, Button, Descriptions, Menu } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalActions } from '../../redux/rootAction';
import './HeaderHome.scss';

function HeaderHome(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.GlobalReducer.isLoggedIn);
  const handleLogout = () => {
    dispatch(GlobalActions.setIsLoggedIn(false));
    // dispatch(GlobalActions.resetStoreRedux());
  };
  return (
    <div className="header__wrapper">
      <Row justify="space-between">
        <Col>
          <div className="logo"> Logo </div>
        </Col>

        <Anchor className="header__nav">
          <Link to="/news" className="header__link">
            news
          </Link>
          <Link to="/dashboard" className="header__link">
            dashboard
          </Link>
        </Anchor>

        <div className="header__user">
          <UserOutlined />
          {isLoggedIn ? (
            <LogoutOutlined onClick={handleLogout} />
          ) : (
            <Link type="primary" to="/login">
              Login
            </Link>
          )}
        </div>
      </Row>
    </div>
  );
}

export default HeaderHome;
