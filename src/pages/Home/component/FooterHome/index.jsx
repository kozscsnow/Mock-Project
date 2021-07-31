import React from 'react';
import './FooterHome.scss';
import styled from 'styled-components';

const TextStyle = styled.p`
  color: ${(props) => props.theme.textColor};
`;

const Wrapper = styled.div`
  background: ${(props) => props.theme.backgroundColor};
`;
function FooterHome(props) {
  return (
    <Wrapper className="footer-home__container container">
      <img src="./images/logo/reactjs-icon.svg" alt="" />
      <TextStyle>Nguyen Nhat Khanh</TextStyle>
    </Wrapper>
  );
}

export default FooterHome;
