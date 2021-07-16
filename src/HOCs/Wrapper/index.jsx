import HeaderHome from 'pages/Home/component/HeaderHome';
import IntroHome from 'pages/Home/component/IntroHome';
import MainContent from 'pages/Home/component/MainContent';
import React from 'react';

function Wrapper(WrappedComponent) {
  return function NewComponent(props) {
    return (
      <>
        <HeaderHome />
        <WrappedComponent {...props} />
      </>
    );
  };
}

export default Wrapper;
