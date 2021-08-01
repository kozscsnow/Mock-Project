import {
  CloseCircleOutlined,
  QuestionCircleOutlined,
  SearchOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import { Dropdown, Menu, Switch } from 'antd';
import MenuMobile from 'components/MenuMobile';
import i18next from 'i18next';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { GlobalActions } from 'redux/rootAction';
import styled from 'styled-components';
import CountriesSearchInput from '../ContriesSearchInput';
import './HeaderDashboard.scss';

const StyleImg = styled.img`
  background: ${(props) => props.theme.backgroundLogoColor};
`;

const StyleCloseCircleOutlined = styled(CloseCircleOutlined)`
  color: ${(props) => props.theme.iconColor};
`;
const StyleSearchOutlined = styled(SearchOutlined)`
  color: ${(props) => props.theme.iconColor};
`;
const StyleText = styled.p`
  color: ${(props) => props.theme.textColor};
`;
const StyleMenu = styled(Menu)`
  min-width: 60px;

  text-align: center;
`;
function HeaderDashboard(props) {
  const { t } = useTranslation();
  const { listInfoCovidCountries } = props;
  const [isSearchClick, setIsSearchClick] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const themeStore = useSelector((state) => state.GlobalReducer.theme);

  const handleSearchClick = (params) => {
    setIsSearchClick(!isSearchClick);
  };
  const handleThemeChange = () => {
    dispatch(GlobalActions.setTheme(themeStore === 'light' ? 'dark' : 'light'));
  };
  const menu = (
    <StyleMenu key="menu">
      <Menu.Item key="menu item 1">
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
      </Menu.Item>
      <Menu.Item key="menu item 2" onClick={() => i18next.changeLanguage('en')}>
        En
      </Menu.Item>
      <Menu.Item key="menu item 3" onClick={() => i18next.changeLanguage('vi')}>
        Vi
      </Menu.Item>
    </StyleMenu>
  );
  return (
    <div className="header-dashboard__container">
      <header className="header-dashboard">
        <div className="header-dashboard__content">
          <div className="header-dashboard__logo">
            <StyleImg
              src="https://camo.githubusercontent.com/48d099290b4cb2d7937bcd96e8497cf1845b54a810a6432c70cf944b60b40c77/68747470733a2f2f7261776769742e636f6d2f676f72616e67616a69632f72656163742d69636f6e732f6d61737465722f72656163742d69636f6e732e737667"
              onClick={() => history.push('/')}
            />
          </div>
          <div className="header-dashboard__input">
            {isSearchClick ? (
              <>
                <CountriesSearchInput
                  listInfoCovidCountries={listInfoCovidCountries}
                />
                <StyleCloseCircleOutlined
                  onClick={handleSearchClick}
                  className="header-dashboard__icon"
                />
              </>
            ) : (
              <StyleSearchOutlined
                onClick={handleSearchClick}
                className="header-dashboard__icon"
              />
            )}
          </div>
          <div className="header-dashboard__contact mobileHidden">
            <QuestionCircleOutlined
              className="header-dashboard__contact-icon"
              style={{ color: 'rgb(0, 216, 255)', margin: '4px' }}
            />
            <Dropdown
              overlay={menu}
              trigger={['click']}
              placement="bottomCenter"
            >
              <SettingOutlined
                className="header-dashboard__contact-icon"
                style={{ color: 'rgb(0, 216, 255)', margin: '4px' }}
              />
            </Dropdown>
            ,
          </div>
          <div className="mobileVisible">
            <MenuMobile />
          </div>
        </div>

        <div className="header-dashboard__nav">
          <StyleText className="header-dashboard__text">
            {t('header-dashboard_title')}
          </StyleText>
        </div>
      </header>
    </div>
  );
}

export default HeaderDashboard;
