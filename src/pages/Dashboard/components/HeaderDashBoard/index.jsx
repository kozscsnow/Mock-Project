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
            <img
              src="https://camo.githubusercontent.com/48d099290b4cb2d7937bcd96e8497cf1845b54a810a6432c70cf944b60b40c77/68747470733a2f2f7261776769742e636f6d2f676f72616e67616a69632f72656163742d69636f6e732f6d61737465722f72656163742d69636f6e732e737667"
              onClick={() => history.push('/')}
            />
          </div>
          {isSearchClick ? (
            <>
              <CountriesSearchInput
                listInfoCovidCountries={listInfoCovidCountries}
              />
              <CloseCircleOutlined
                onClick={handleSearchClick}
                className="header-dashboard__icon"
              />
            </>
          ) : (
            <SearchOutlined
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
          <p className="header-dashboard__text">
            {t('header-dashboard_title')}
          </p>
        </div>
      </header>
    </div>
  );
}

export default HeaderDashboard;
