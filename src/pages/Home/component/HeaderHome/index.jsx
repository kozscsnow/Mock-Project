import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Anchor, Avatar, Col, Drawer, Row } from 'antd';
import {
  LogoutOutlined,
  UserOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import { PageHeader, Button, Descriptions, Menu } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalActions } from '../../../../redux/rootAction';
import './HeaderHome.scss';

function HeaderHome(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.GlobalReducer.isLoggedIn);
  const handleLogout = () => {
    dispatch(GlobalActions.setIsLoggedIn(false));
    // dispatch(GlobalActions.resetStoreRedux());
  };
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <div className="header-home__wrapper">
      <Row justify="space-between" align="middle">
        <Col>
          <div className="logo">
            <img src="./images/logo/reactjs-icon.svg" />
          </div>
        </Col>

        <div className="mobileHidden">
          <Anchor className="header-home__nav">
            <Link to="/news" className="header-home__link">
              HOME
            </Link>
            <Link className="header-home__link">Dashboard</Link>
            <Link className="header-home__link">Travel Alert</Link>
            <Link className="header-home__link">Analytics</Link>
            <Link className="header-home__link">About</Link>
            <Link className="header-home__link">Contact</Link>
          </Anchor>
        </div>
        <div className="mobileHidden">
          <div className="header-home__user">
            <div className="header-home__avatar"></div>
            <UserOutlined
              className="header-home__icon"
              style={{ color: 'rgb(0,216,255)' }}
            />
            {isLoggedIn ? (
              <LogoutOutlined
                onClick={handleLogout}
                className="header-home__icon"
              />
            ) : (
              <Link type="primary" to="/login">
                Login
              </Link>
            )}
          </div>
        </div>

        <div className="mobileVisible">
          <MenuFoldOutlined
            onClick={showDrawer}
            className="header-home__menu"
          />
          {/* <Button type="primary" onClick={showDrawer}>
              Open
            </Button> */}
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <Anchor className="header-home__nav">
              <Link to="/news" className="header-home__link">
                HOME
              </Link>
              <Link className="header-home__link">Dashboard</Link>
              <Link className="header-home__link">Travel Alert</Link>
              <Link className="header-home__link">Analytics</Link>
              <Link className="header-home__link">About</Link>
              <Link className="header-home__link">Contact</Link>
            </Anchor>

            <div className="header-home__user">
              {/* <div className="header-home__avatar"></div> */}
              <UserOutlined
                className="header-home__icon"
                style={{ color: 'rgb(0,216,255)' }}
              />
              {isLoggedIn ? (
                <LogoutOutlined
                  onClick={handleLogout}
                  className="header-home__icon"
                />
              ) : (
                <Link
                  type="primary"
                  to="/login"
                  className="header-home__btn-login"
                >
                  Login
                </Link>
              )}
            </div>
          </Drawer>
        </div>
      </Row>
    </div>
  );
}

export default HeaderHome;
