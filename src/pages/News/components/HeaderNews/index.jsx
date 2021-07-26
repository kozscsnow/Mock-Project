import {
  MenuUnfoldOutlined,
  SearchOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Drawer } from 'antd';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';
import './HeaderNews.scss';
import styled from 'styled-components';

const StyleHeader = styled.header`
  background: ${(props) => props.theme.backgroundColor};
`;

const StyleLink = styled.a`
  color: ${(props) => props.theme.linkColor};
`;
const StyleSearchOutlined = styled(SearchOutlined)`
  color: ${(props) => props.theme.iconColor};
`;
const StyleUserOutlined = styled(UserOutlined)`
  color: ${(props) => props.theme.iconColor};
`;
const StyleMenuUnfoldOutlined = styled(MenuUnfoldOutlined)`
  color: ${(props) => props.theme.iconColor};
`;
const StyleDrawer = styled(Drawer)`
  .ant-drawer-content {
    background: ${(props) => props.theme.backgroundColor};
  }
`;
function HeaderNews(props) {
  const history = useHistory();
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <StyleHeader className="header-news">
      <div className="header-news__menu mobileVisible mobile">
        <div>
          <StyleMenuUnfoldOutlined
            onClick={showDrawer}
            className="header-news__menu-btn"
          />
        </div>
        <StyleDrawer
          title="Chuyên mục"
          placement="left"
          closable={false}
          onClose={onClose}
          visible={visible}
          closable={true}
          width="100%"
          style={{ 'text-align': 'center' }}
        >
          <nav className="header-news__nav">
            <ul className="header-news__nav-list">
              <li className="header-news__nav-item">
                <StyleLink href=" #" className="header-news__nav-link">
                  Xuất bản
                </StyleLink>
              </li>
              <li className="header-news__nav-item">
                <StyleLink href=" #" className="header-news__nav-link">
                  Sách
                </StyleLink>
              </li>
              <li className="header-news__nav-item">
                <StyleLink href=" #" className="header-news__nav-link">
                  Tác giả
                </StyleLink>
              </li>
              <li className="header-news__nav-item">
                <StyleLink href=" #" className="header-news__nav-link">
                  Xã hội
                </StyleLink>
              </li>
              <li className="header-news__nav-item">
                <StyleLink href=" #" className="header-news__nav-link">
                  Thế giơi
                </StyleLink>
              </li>
              <li className="header-news__nav-item">
                <StyleLink href=" #" className="header-news__nav-link">
                  Kinh doanh
                </StyleLink>
              </li>
              <li className="header-news__nav-item">
                <StyleLink href=" #" className="header-news__nav-link">
                  Công nghệ
                </StyleLink>
              </li>
              <li className="header-news__nav-item">
                <StyleLink href=" #" className="header-news__nav-link">
                  Thể thao
                </StyleLink>
              </li>
              <li className="header-news__nav-item">
                <StyleLink href=" #" className="header-news__nav-link">
                  Giải trí
                </StyleLink>
              </li>
              <li className="header-news__nav-item">
                <StyleLink href=" #" className="header-news__nav-link">
                  Đời sống
                </StyleLink>
              </li>
            </ul>
          </nav>
        </StyleDrawer>
      </div>
      <div className="header-news__logo">
        <img
          src="./images/logo/reactjs-icon.svg"
          alt=""
          onClick={() => history.push('/')}
        />
      </div>
      <div className="mobileHidden">
        <nav className="header-news__nav">
          <ul className="header-news__nav-list">
            <li className="header-news__nav-item">
              <StyleLink href=" #" className="header-news__nav-link">
                Xuất bản
              </StyleLink>
            </li>
            <li className="header-news__nav-item">
              <StyleLink href=" #" className="header-news__nav-link">
                Sách
              </StyleLink>
            </li>
            <li className="header-news__nav-item">
              <StyleLink href=" #" className="header-news__nav-link">
                Tác giả
              </StyleLink>
            </li>
            <li className="header-news__nav-item">
              <StyleLink href=" #" className="header-news__nav-link">
                Xã hội
              </StyleLink>
            </li>
            <li className="header-news__nav-item">
              <StyleLink href=" #" className="header-news__nav-link">
                Thế giới
              </StyleLink>
            </li>
            <li className="header-news__nav-item">
              <StyleLink href=" #" className="header-news__nav-link">
                Kinh doanh
              </StyleLink>
            </li>
            <li className="header-news__nav-item">
              <StyleLink href=" #" className="header-news__nav-link">
                Công nghệ
              </StyleLink>
            </li>
            <li className="header-news__nav-item">
              <StyleLink href=" #" className="header-news__nav-link">
                Thể thao
              </StyleLink>
            </li>
            <li className="header-news__nav-item">
              <StyleLink href=" #" className="header-news__nav-link">
                Giải trí
              </StyleLink>
            </li>
            <li className="header-news__nav-item">
              <StyleLink href=" #" className="header-news__nav-link">
                Đời sống
              </StyleLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header-news__user">
        <StyleSearchOutlined className="header-news__user-icon header-news__user-icon-search" />
        <StyleUserOutlined className="header-news__user-icon header-news__user-icon-user" />
      </div>
    </StyleHeader>
  );
}

export default HeaderNews;
