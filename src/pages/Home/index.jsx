import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import HeaderHome from '../../components/HeaderHome';
import { GlobalActions } from '../../redux/rootAction';
import { Breadcrumb, Layout, Menu } from 'antd';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import SidebarHome from '../../components/SidebarHome';
import './Home.scss';

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
        <Header className="header">
          <HeaderHome />
        </Header>
      </Layout>
    </div>
  );
}

export default HomePage;
