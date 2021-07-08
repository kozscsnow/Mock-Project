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
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="title 1">Title 1</Menu.Item>
        <SubMenu icon={<AppstoreOutlined />} title="Navigation Two" key="info1">
          <Menu.ItemGroup key="chart" title="Item 1">
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="title 2">Title 2</Menu.Item>
        <SubMenu icon={<DesktopOutlined />} title="Navigation Three" key="info2">
          <Menu.ItemGroup key="more" title="Item 1">
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
    </Sider>
  );
}

export default SidebarHome;
