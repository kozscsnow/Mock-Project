import ScrollToTopButton from 'components/ScrollToTopButton';
import FooterDashboard from 'pages/Dashboard/components/FooterDashboard';
import HeaderDashboard from 'pages/Dashboard/components/HeaderDashboard';
import React from 'react';

function WrapperDashboard(WrappedDashboard) {
  return function NewDashboard(props) {
    return (
      <div className="container">
        <HeaderDashboard />
        <WrappedDashboard {...props} />
        <FooterDashboard />
        <ScrollToTopButton />
      </div>
    );
  };
}

export default WrapperDashboard;
