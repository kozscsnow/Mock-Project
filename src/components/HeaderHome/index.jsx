import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { PageHeader, Button, Descriptions, Menu } from 'antd';

function HeaderHome(props) {
  const history = useHistory();
  return (
    <div className="site-page-header-ghost-wrapper">
      {/* <div className="logo">Logo</div> */}
      {/* <Menu mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu> */}
      <PageHeader
        ghost={false}
        onBack={() => window.history.back()}
        title="Home Page"
        subTitle="Covid-19"
        extra={[
          <Link key="3" to="/news">
            News
          </Link>,
          <Button key="2">Operation</Button>,
          <Button onClick={() => history.push('/login')} key="1" type="primary">
            Login
          </Button>,
        ]}
      >
        <Descriptions size="small" column={3}>
          <Descriptions.Item label="Created">Nguyễn Nhật Khánh</Descriptions.Item>

          <Descriptions.Item label="Creation Time">08-08-2021</Descriptions.Item>
          <Descriptions.Item label="Effective Time">08-08-2021</Descriptions.Item>
          <Descriptions.Item label="Remarks">Nguyễn Nhật Khánh</Descriptions.Item>
        </Descriptions>
      </PageHeader>
    </div>
  );
}

export default HeaderHome;
