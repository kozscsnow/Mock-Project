import React from 'react';
import './FooterDashboard.scss';
import styled from 'styled-components';

const StyleText = styled.p`
  color: ${(props) => props.theme.textColor};
`;
function FooterDashboard(props) {
  return (
    <footer className="footer-dashboard">
      <div className="footer-dashboard__wrapper">
        <div className="footer-dashboard__icon">
          <img src="https://camo.githubusercontent.com/48d099290b4cb2d7937bcd96e8497cf1845b54a810a6432c70cf944b60b40c77/68747470733a2f2f7261776769742e636f6d2f676f72616e67616a69632f72656163742d69636f6e732f6d61737465722f72656163742d69636f6e732e737667" />
        </div>
        <StyleText className="footer-dashboard__text">
          nguyen nhat khanh
        </StyleText>
      </div>
    </footer>
  );
}

export default FooterDashboard;
