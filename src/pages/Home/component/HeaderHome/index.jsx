import React, { useEffect, useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Anchor, Avatar, Col, Drawer, Row, Switch, Menu, Dropdown } from 'antd';
import {
  LogoutOutlined,
  UserOutlined,
  MenuFoldOutlined,
  GlobalOutlined,
  CheckOutlined,
  CloseOutlined,
} from '@ant-design/icons';

// import Button from '@material-ui/core/Button';
// import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { PageHeader, Button, Descriptions } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalActions } from '../../../../redux/rootAction';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';
import './HeaderHome.scss';

import styled from 'styled-components';
const Wrapper = styled.div`
  background-color: ${(props) => props.theme.pageBackground};
  transition: 0.3s ease;
`;
const StyleLink = styled(Link)`
  color: ${(props) => props.theme.linkColor};
  &:hover {
    color: #13a8a8;
    border-bottom: #13a8a8 4px solid;
  }
`;
const StyleGlobalOutlined = styled(GlobalOutlined)`
  color: ${(props) => props.theme.iconColor};
`;

const StyleDrawer = styled(Drawer)`
  .ant-drawer-wrapper-body {
    background-color: ${(props) => props.theme.pageBackground};
  }
`;
const StyleMenuFoldOutlined = styled(MenuFoldOutlined)`
  color: ${(props) => props.theme.iconColor};
`;
const StyleText = styled.span`
  color: ${(props) => props.theme.textColor};
`;
const StyleLogoutOutlined = styled(LogoutOutlined)`
  color: ${(props) => props.theme.iconColor};
`;
function HeaderHome(props) {
  const { t } = useTranslation();

  const history = useHistory();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.GlobalReducer.isLoggedIn);
  const handleLogout = () => {
    dispatch(GlobalActions.setIsLoggedIn(false));
    // dispatch(GlobalActions.resetStoreRedux());
    localStorage.setItem('isLoggedIn', false);
  };
  const [visible, setVisible] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const themeStore = useSelector((state) => state.GlobalReducer.theme);
  console.log(themeStore);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleChangeLanguage = (language) => {
    i18next.changeLanguage(language);
    setOpen(false);
  };
  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const handleThemeChange = () => {
    dispatch(GlobalActions.setTheme(themeStore === 'light' ? 'dark' : 'light'));
  };

  const menu = (
    <Menu>
      <Menu.Item onClick={() => i18next.changeLanguage('en')}>En</Menu.Item>
      <Menu.Item onClick={() => i18next.changeLanguage('vi')}>Vi</Menu.Item>
    </Menu>
  );
  return (
    <Wrapper className="header-home__wrapper">
      <div className="logo">
        <img src="./images/logo/reactjs-icon.svg" />
      </div>

      <div className="mobileHidden">
        <Anchor className="header-home__nav">
          <StyleLink to="/news" className="header-home__link">
            {t('home_header_news')}
          </StyleLink>
          <StyleLink to="/dashboard" className="header-home__link">
            {t('home_header_dashboard')}
          </StyleLink>
          <StyleLink className="header-home__link">
            {t('home_header_alert')}
          </StyleLink>
          <StyleLink className="header-home__link">
            {t('home_header_analytics')}
          </StyleLink>
          <StyleLink className="header-home__link">
            {t('home_header_about')}
          </StyleLink>
          <StyleLink className="header-home__link">
            {t('home_header_contact')}
          </StyleLink>
        </Anchor>
      </div>

      <Switch
        checkedChildren="Dark"
        unCheckedChildren="Light"
        onChange={handleThemeChange}
      />

      <div className="mobileHidden">
        <div className="header-home__user">
          {/* <GlobalOutlined onClick={handleClick} /> */}
          <Dropdown
            overlay={menu}
            arrow
            placement="bottomCenter"
            className="header-home__language-icon"
          >
            <StyleGlobalOutlined />
          </Dropdown>
          {isLoggedIn ? (
            <>
              <p>
                <StyleText>{t('home_header_user')}</StyleText>
                <span className="header-home__user-name"> Admin</span>
              </p>
              <img
                src="./images/avatar.png"
                alt="avatar"
                className="header-home__avatar"
              />
              <StyleLogoutOutlined
                onClick={handleLogout}
                className="header-home__icon"
              />
            </>
          ) : (
            <>
              <UserOutlined
                className="header-home__icon"
                style={{ color: 'rgb(0,216,255)' }}
              />
              <Link
                type="primary"
                to="/login"
                className="header-home__btn-login"
              >
                {t('home_header_login')}
              </Link>
            </>
          )}
        </div>
      </div>

      <div className="mobileVisible ">
        <div className="header-home__user-mobile">
          <Button
            ref={anchorRef}
            aria-controls={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          >
            <StyleGlobalOutlined />
          </Button>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === 'bottom' ? 'center top' : 'center bottom',
                }}
              >
                <Paper>
                  {/* <ClickAwayListener onClickAway={handleChangeLanguage}> */}
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem onClick={() => handleChangeLanguage('en')}>
                      En
                    </MenuItem>
                    <MenuItem onClick={() => handleChangeLanguage('vi')}>
                      Vi
                    </MenuItem>
                  </MenuList>
                  {/* </ClickAwayListener> */}
                </Paper>
              </Grow>
            )}
          </Popper>
          <StyleMenuFoldOutlined
            onClick={showDrawer}
            className="header-home__menu"
          />
          <StyleDrawer
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <Anchor className="header-home__nav">
              <StyleLink to="/news" className="header-home__link">
                {t('home_header_news')}
              </StyleLink>
              <StyleLink to="/dashboard" className="header-home__link">
                {t('home_header_dashboard')}
              </StyleLink>
              <StyleLink className="header-home__link">
                {t('home_header_alert')}
              </StyleLink>
              <StyleLink className="header-home__link">
                {t('home_header_analytics')}
              </StyleLink>
              <StyleLink className="header-home__link">
                {t('home_header_about')}
              </StyleLink>
              <StyleLink className="header-home__link">
                {t('home_header_contact')}
              </StyleLink>
            </Anchor>

            <div className="header-home__user">
              {isLoggedIn ? (
                <>
                  <p>
                    <StyleText>{t('home_header_user')}</StyleText>
                    <span className="header-home__user-name"> Admin</span>
                  </p>
                  <img
                    src="./images/avatar.png"
                    alt="avatar"
                    className="header-home__avatar"
                  />
                  <StyleLogoutOutlined
                    onClick={handleLogout}
                    className="header-home__icon"
                  />
                </>
              ) : (
                <Link
                  type="primary"
                  to="/login"
                  className="header-home__btn-login"
                >
                  {t('home_header_login')}
                </Link>
              )}
            </div>
          </StyleDrawer>
        </div>
      </div>
    </Wrapper>
  );
}

export default HeaderHome;
