import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import HeaderHome from './component/HeaderHome';
import { GlobalActions } from '../../redux/rootAction';
import { Breadcrumb, Layout, Menu } from 'antd';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import SidebarHome from '../../components/SidebarHome';
import './Home.scss';
import IntroHome from 'pages/Home/component/IntroHome';
import MainContent from './component/MainContent';
import NewsHome from './component/NewsHome';
import covidAllAPI from 'apis/covidAllAPI';
import FooterHome from './component/FooterHome/indejx';
import ScrollToTopButton from 'components/ScrollToTopButton';
import styled from 'styled-components';
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
