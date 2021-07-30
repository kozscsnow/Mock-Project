import Layout from 'antd/lib/layout/layout';
import ScrollToTopButton from 'components/ScrollToTopButton';
import FooterHome from 'pages/Home/component/FooterHome';
import HeaderHome from 'pages/Home/component/HeaderHome';
import styled from 'styled-components';
const Wrapper = styled.div`
  background-color: ${(props) => props.theme.pageBackground};
  transition: 0.3s ease;
`;
const WrapperPage = (WrappedPage) => {
  return function NewWrappedPage(props) {
    return (
      <>
        <HeaderHome />
        <WrappedPage {...props} />
        <FooterHome />
        <ScrollToTopButton />
      </>
    );
  };
};

export default WrapperPage;
