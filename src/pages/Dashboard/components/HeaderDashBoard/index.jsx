import React, { useState } from 'react';
import './HeaderDashboard.scss';
import {
  QuestionCircleOutlined,
  AliwangwangOutlined,
  SearchOutlined,
  CloseCircleOutlined,
} from '@ant-design/icons';
import { useHistory } from 'react-router';

function HeaderDashboard(props) {
  const [isSearchClick, setIsSearchClick] = useState(false);
  const history = useHistory();
  const handleSearchClick = (params) => {
    setIsSearchClick(!isSearchClick);
  };
  return (
    <div>
      <header className="header-dashboard">
        <div className="header-dashboard__content">
          <div className="header-dashboard__logo">
            <img
              src="./images/logo/reactjs-icon.svg"
              onClick={() => history.push('/')}
            />
          </div>
          {isSearchClick ? (
            <>
              <input
                type="text"
                className="header-dashboard__input"
                style={{}}
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
            Coronavirus (COVID-19) Dashboard
          </p>
        </div>
      </header>
    </div>
  );
}

export default HeaderDashboard;
