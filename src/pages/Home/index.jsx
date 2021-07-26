import { Layout } from 'antd';
import covidAllAPI from 'apis/covidAllAPI';
import ScrollToTopButton from 'components/ScrollToTopButton';
import IntroHome from 'pages/Home/component/IntroHome';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { GlobalActions } from '../../redux/rootAction';
import FooterHome from './component/FooterHome/indejx';
import HeaderHome from './component/HeaderHome';
import MainContent from './component/MainContent';
import NewsHome from './component/NewsHome';
import './Home.scss';
const Wrapper = styled.div`
  background-color: ${(props) => props.theme.pageBackground};
  transition: 0.3s ease;
`;

const { Header, Content, Footer, Sider } = Layout;
function HomePage(props) {
  const dispatch = useDispatch();
  const [infoCovidAll, setInfoCovidAll] = useState({});

  // Fetch Covid All
  useEffect(() => {
    dispatch(GlobalActions.setIsLoading(true));

    const fetchCovidAll = async () => {
      try {
        const InfoCovidAll = await covidAllAPI.getAll();
        setInfoCovidAll(InfoCovidAll);
      } catch (error) {
        alert(`
      Something wrong !!!
      Please try again or check your connection
      `);
      }
      dispatch(GlobalActions.setIsLoading(false));
    };
    fetchCovidAll();
  }, [dispatch]);
  return (
    <Wrapper className="container">
      <Layout className="main-layout">
        <HeaderHome />
        <Wrapper className="home-body">
          <IntroHome infoCovidAll={infoCovidAll} />
          <MainContent />
          <NewsHome />
        </Wrapper>
        <FooterHome />
      </Layout>
      <ScrollToTopButton />
    </Wrapper>
  );
}

export default HomePage;
