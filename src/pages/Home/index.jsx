import React, { useEffect } from 'react';
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

const { Header, Content, Footer, Sider } = Layout;
function HomePage(props) {
  const dispatch = useDispatch();
  // fake loading
  useEffect(() => {
    dispatch(GlobalActions.setIsLoading(true));
    const loadingFake = setTimeout(() => {
      dispatch(GlobalActions.setIsLoading(false));
    }, 500);
    return () => {
      clearTimeout(loadingFake);
    };
  });
  return (
    <div className="container">
      <Layout className="main-layout">
        <HeaderHome />
        <div className="home-body">
          <IntroHome />
          <MainContent />
          <NewsHome />
        </div>
      </Layout>
    </div>
  );
}

export default HomePage;
