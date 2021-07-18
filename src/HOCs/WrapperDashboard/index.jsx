import ScrollToTopButton from 'components/ScrollToTopButton';
import FooterDashboard from 'pages/Dashboard/components/FooterDashboard';
import HeaderDashboard from 'pages/Dashboard/components/HeaderDashboard';
import React from 'react';
import { useSelector } from 'react-redux';

function WrapperDashboard(WrappedDashboard) {
  return function NewDashboard(props) {
    const listInfoCovidCountries = useSelector(
      (state) => state.CovidInfoReducer.listInfoCovidCountries
    );
    return (
      <div className="container">
        <HeaderDashboard listInfoCovidCountries={listInfoCovidCountries} />
        <WrappedDashboard {...props} />
        <FooterDashboard />
        <ScrollToTopButton />
      </div>
    );
  };
}

export default WrapperDashboard;
