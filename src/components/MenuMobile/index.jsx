import { MenuFoldOutlined } from '@ant-design/icons';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import { Drawer, Menu, Switch } from 'antd';
import i18next from 'i18next';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalActions } from 'redux/rootAction';
import styled from 'styled-components';

const StyleMenu = styled(Menu)`
  min-width: 60px;

  text-align: center;
  background: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
  border: none;

  .ant-menu-item:active.ant-menu-submenu-title:active {
    background: ${(props) => props.theme.backgroundColor};
  }
  .ant-menu-item-selected .ant-menu:not(.ant-menu-horizontal) {
    background: none;
  }
`;
const StyleMenuFoldOutlined = styled(MenuFoldOutlined)`
  color: ${(props) => props.theme.iconColor};
  font-size: 30px;
`;
const StyleDrawer = styled(Drawer)`
  color: ${(props) => props.theme.textColor};
  .ant-drawer-body,
  .ant-drawer-header,
  .ant-drawer-title,
  .ant-drawer-close {
    border: none;
    background: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.textColor};
  }
`;
function MenuMobile(props) {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  const themeStore = useSelector((state) => state.GlobalReducer.theme);
  const { t } = useTranslation();
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const handleThemeChange = () => {
    dispatch(GlobalActions.setTheme(themeStore === 'light' ? 'dark' : 'light'));
  };
  return (
    <div>
      <StyleMenuFoldOutlined onClick={showDrawer} />
      <StyleDrawer
        title={t('setting')}
        placement="right"
        closable={true}
        onClose={onClose}
        visible={visible}
        key="right"
        style={{ textAlign: 'center' }}
      >
        <StyleMenu key="menu">
          <li key="menu item 1">
            <Switch
              checkedChildren={
                <Brightness4Icon fontSize="small" style={{ display: 'flex' }} />
              }
              unCheckedChildren={
                <Brightness7Icon fontSize="small" style={{ display: 'flex' }} />
              }
              onChange={handleThemeChange}
              checked={themeStore === 'dark'}
            />
          </li>
          <Menu.Item
            key="menu item 2"
            onClick={() => i18next.changeLanguage('en')}
          >
            En
          </Menu.Item>
          <Menu.Item
            key="menu item 3"
            onClick={() => i18next.changeLanguage('vi')}
          >
            Vi
          </Menu.Item>
        </StyleMenu>
      </StyleDrawer>
    </div>
  );
}

export default MenuMobile;
