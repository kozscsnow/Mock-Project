import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import HeaderHome from '../../components/HeaderHome';
import { GlobalActions } from '../../redux/rootAction';
import { Breadcrumb, Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import SidebarHome from '../../components/SidebarHome';

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
      {/* <Header /> */}
      <Layout>
        <HeaderHome />
        <Layout>
          <SidebarHome />
          <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
              <Breadcrumb.Item>Covid</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ minHeight: '280px', padding: '24px', background: '#fff' }}>Content</div>
          </Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}

export default HomePage;
