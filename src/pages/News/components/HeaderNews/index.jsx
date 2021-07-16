import React, { useState } from 'react';
import styles from './HeaderNews.module.css';
import {
  MenuOutlined,
  SearchOutlined,
  UserOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { useHistory } from 'react-router';
import './HeaderNews.scss';
import { Button, Drawer } from 'antd';
import { CloseOutlined } from '@material-ui/icons';

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
    <header className="header-news">
      <div className="header-news__menu mobileVisible mobile">
        <div>
          <MenuUnfoldOutlined
            onClick={showDrawer}
            className="header-news__menu-btn"
          />
        </div>
        <Drawer
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
                <a href=" #" className="header-news__nav-link">
                  Xuất bản
                </a>
              </li>
              <li className="header-news__nav-item">
                <a href=" #" className="header-news__nav-link">
                  Sách
                </a>
              </li>
              <li className="header-news__nav-item">
                <a href=" #" className="header-news__nav-link">
                  Tác giả
                </a>
              </li>
              <li className="header-news__nav-item">
                <a href=" #" className="header-news__nav-link">
                  Xã hội
                </a>
              </li>
              <li className="header-news__nav-item">
                <a href=" #" className="header-news__nav-link">
                  Thế giơi
                </a>
              </li>
              <li className="header-news__nav-item">
                <a href=" #" className="header-news__nav-link">
                  Kinh doanh
                </a>
              </li>
              <li className="header-news__nav-item">
                <a href=" #" className="header-news__nav-link">
                  Công nghệ
                </a>
              </li>
              <li className="header-news__nav-item">
                <a href=" #" className="header-news__nav-link">
                  Thể thao
                </a>
              </li>
              <li className="header-news__nav-item">
                <a href=" #" className="header-news__nav-link">
                  Giải trí
                </a>
              </li>
              <li className="header-news__nav-item">
                <a href=" #" className="header-news__nav-link">
                  Đời sống
                </a>
              </li>
            </ul>
          </nav>
        </Drawer>
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
              <a href=" #" className="header-news__nav-link">
                Xuất bản
              </a>
            </li>
            <li className="header-news__nav-item">
              <a href=" #" className="header-news__nav-link">
                Sách
              </a>
            </li>
            <li className="header-news__nav-item">
              <a href=" #" className="header-news__nav-link">
                Tác giả
              </a>
            </li>
            <li className="header-news__nav-item">
              <a href=" #" className="header-news__nav-link">
                Xã hội
              </a>
            </li>
            <li className="header-news__nav-item">
              <a href=" #" className="header-news__nav-link">
                Thế giới
              </a>
            </li>
            <li className="header-news__nav-item">
              <a href=" #" className="header-news__nav-link">
                Kinh doanh
              </a>
            </li>
            <li className="header-news__nav-item">
              <a href=" #" className="header-news__nav-link">
                Công nghệ
              </a>
            </li>
            <li className="header-news__nav-item">
              <a href=" #" className="header-news__nav-link">
                Thể thao
              </a>
            </li>
            <li className="header-news__nav-item">
              <a href=" #" className="header-news__nav-link">
                Giải trí
              </a>
            </li>
            <li className="header-news__nav-item">
              <a href=" #" className="header-news__nav-link">
                Đời sống
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header-news__user">
        <SearchOutlined className="header-news__user-icon header-news__user-icon-search" />
        <UserOutlined className="header-news__user-icon header-news__user-icon-user" />
      </div>
    </header>
  );
}

export default HeaderNews;
