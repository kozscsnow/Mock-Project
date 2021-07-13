import React from 'react';
import './FooterDashboard.scss';
function FooterDashboard(props) {
  return (
    <footer className="footer-dashboard">
      <div className="footer-dashboard__wrapper">
        <div className="footer-dashboard__icon">
          <img src="./images/logo/reactjs-icon.svg" />
        </div>
        <p className="footer-dashboard__text">nguyen nhat khanh</p>
      </div>
    </footer>
  );
}

export default FooterDashboard;
