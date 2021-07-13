import HeaderHome from 'pages/Home/component/HeaderHome';
import IntroHome from 'pages/Home/component/IntroHome';
import MainContent from 'pages/Home/component/MainContent';
import React from 'react';

function Wrapper(Component) {
  return (props) => {
    return (
      <>
        <HeaderHome />
        <Component {...props} />
      </>
    );
  };
}

export default Wrapper;
