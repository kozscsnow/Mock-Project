import React, { useState } from 'react';
import './HeaderDashboard.scss';
import {
  QuestionCircleOutlined,
  AliwangwangOutlined,
  SearchOutlined,
  CloseCircleOutlined,
} from '@ant-design/icons';
import { useHistory } from 'react-router';
import CountriesSearchInput from '../ContriesSearchInput';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

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
function HeaderDashboard(props) {
  const { t } = useTranslation();
  const { listInfoCovidCountries } = props;
  const [isSearchClick, setIsSearchClick] = useState(false);
  const history = useHistory();
  const handleSearchClick = (params) => {
    setIsSearchClick(!isSearchClick);
  };
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

          <div className="header-dashboard__contact">
            <QuestionCircleOutlined
              className="header-dashboard__contact-icon"
              style={{ color: 'rgb(0, 216, 255)', margin: '4px' }}
            />

            <AliwangwangOutlined
              className="header-dashboard__contact-icon"
              style={{ color: 'rgb(0, 216, 255)', margin: '4px' }}
            />
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
