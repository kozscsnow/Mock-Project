import React, { useEffect, useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Anchor, Avatar, Col, Drawer, Row } from 'antd';
import {
  LogoutOutlined,
  UserOutlined,
  MenuFoldOutlined,
  GlobalOutlined,
} from '@ant-design/icons';

// import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
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
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
  const handleChangeLanguage = (event, language) => {
    i18next.changeLanguage(language);
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

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
              {t('header_home_news')}
            </Link>
            <Link to="/dashboard" className="header-home__link">
              {t('header_home_dashboard')}
            </Link>
            <Link className="header-home__link">{t('header_home_alert')}</Link>
            <Link className="header-home__link">
              {t('header_home_analytics')}
            </Link>
            <Link className="header-home__link">{t('header_home_about')}</Link>
            <Link className="header-home__link">
              {t('header_home_contact')}
            </Link>
          </Anchor>
        </div>
        <div className="mobileHidden">
          <div className="header-home__user">
            {/* <GlobalOutlined onClick={handleClick} /> */}

            <Button
              ref={anchorRef}
              aria-controls={open ? 'menu-list-grow' : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
            >
              <GlobalOutlined />
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

            <button onClick={() => i18next.changeLanguage('en')}>En</button>
            <button onClick={() => i18next.changeLanguage('vi')}>Vi</button>
            {isLoggedIn ? (
              <>
                <p>
                  {t('header_home_user')}
                  <span>Admin</span>
                </p>
                <img
                  src="./images/avatar.png"
                  alt="avatar"
                  className="header-home__avatar"
                />
                <LogoutOutlined
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
                  {t('header_home_login')}
                </Link>
              </>
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
                {t('header_home_news')}
              </Link>
              <Link to="/dashboard" className="header-home__link">
                {t('header_home_dashboard')}
              </Link>
              <Link className="header-home__link">
                {t('header_home_alert')}
              </Link>
              <Link className="header-home__link">
                {t('header_home_analytics')}
              </Link>
              <Link className="header-home__link">
                {t('header_home_about')}
              </Link>
              <Link className="header-home__link">
                {t('header_home_contact')}
              </Link>
            </Anchor>

            <div className="header-home__user">
              {isLoggedIn ? (
                <>
                  <p>
                    {t('header_home_user')}
                    <span>Admin</span>
                  </p>
                  <img
                    src="./images/avatar.png"
                    alt="avatar"
                    className="header-home__avatar"
                  />
                  <LogoutOutlined
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
                  {t('header_home_login')}
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
