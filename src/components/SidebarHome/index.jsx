import React, { useState } from 'react';
import { Layout, Menu, Button } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;
const { SubMenu } = Menu;

function SidebarHome(props) {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Sider>
      <Menu defaultSelectedKeys={['dashboard']} defaultOpenKeys={['info']} mode="inline">
        <Menu.Item key="dashboard">Dashboard</Menu.Item>
        <SubMenu icon={<MailOutlined />} title="Navigation One" key="info">
          <Menu.ItemGroup key="info" title="Item 1">
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="title 1">Title 1</Menu.Item>
        <SubMenu icon={<AppstoreOutlined />} title="Navigation Two">
          <Menu.ItemGroup key="chart" title="Item 1">
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="title 2">Title 2</Menu.Item>
        <SubMenu icon={<DesktopOutlined />} title="Navigation Three">
          <Menu.ItemGroup key="more" title="Item 1">
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
    </Sider>
  );
}

export default SidebarHome;
