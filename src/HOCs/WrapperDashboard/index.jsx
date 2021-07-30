import HeaderPage from 'components/HeaderPage';
import ScrollToTopButton from 'components/ScrollToTopButton';
import FooterDashboard from 'pages/Dashboard/components/FooterDashboard';
import HeaderDashboard from 'pages/Dashboard/components/HeaderDashBoard';
import React from 'react';
import { useSelector } from 'react-redux';
import './WrapperDashboard.scss'

function WrapperDashboard(WrappedDashboard) {
  return function NewDashboard(props) {
    const listInfoCovidCountries = useSelector(
      (state) => state.CovidInfoReducer.listInfoCovidCountries
    );
    return (
      <div className="dashboard__container container">
        <HeaderDashboard listInfoCovidCountries={listInfoCovidCountries} />
        <WrappedDashboard {...props} />
        <FooterDashboard />
      </div>
    );
  };
}

export default WrapperDashboard;
