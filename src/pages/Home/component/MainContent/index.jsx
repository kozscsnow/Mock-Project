import { Button, Col, InputNumber, Row } from 'antd';
import React from 'react';
import ChartBox from './components/ChartBox';
import { LikeOutlined } from '@ant-design/icons';
import './MainContent.scss';
import Form from 'antd/lib/form/Form';
import { Input } from '@material-ui/core';

function MainContent(props) {
  return (
    <div className="main-content__container">
      <Row gutter={[16, 16]}>
        <Col xs={24}>
          <div className="border-box">
            <ChartBox />
          </div>
        </Col>
      </Row>
      <br />
      <Row gutter={[16, 16]}>
        <Col xs={24}>
          <div className="border-box">
            <ChartBox />
          </div>
        </Col>
      </Row>
      <br />

      <div className="main-home__verify-news">
        <p>VERIFY NEWS</p>
        <div>
          <Button type="primary" className="main-home__verify-button">
            <LikeOutlined />
            Like
          </Button>
          <Button type="primary" className="main-home__verify-button">
            Share
          </Button>
        </div>
      </div>
      <br />
      <div className="main-home__tag">
        <div>
          <button className="main-home__tag-item">English</button>
          <button className="main-home__tag-item">Bahasha Melayu</button>
          <button className="main-home__tag-item">简体中文 </button>
          <button className="main-home__tag-item">繁體中文</button>
          <button className="main-home__tag-item">日本語</button>
          <button className="main-home__tag-item">Bahasa Indonesia</button>
          <button className="main-home__tag-item">Tiếng Việt</button>
          <button className="main-home__tag-item">ภาษาไทย</button>
          <button className="main-home__tag-item">코리언</button>
          <button className="main-home__tag-item">हिन्दी</button>
          <button className="main-home__tag-item">தமிழ்</button>
        </div>
        <p>Clear all</p>
      </div>

      <div className="mobileHidden">news</div>
    </div>
  );
}

export default MainContent;
