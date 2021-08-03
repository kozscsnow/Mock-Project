import ScrollToTopButton from 'components/ScrollToTopButton';
import FooterHome from 'pages/Home/component/FooterHome';
import HeaderHome from 'pages/Home/component/HeaderHome';

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
