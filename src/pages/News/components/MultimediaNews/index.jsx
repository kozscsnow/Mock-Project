import { Col, Row } from 'antd';
import React from 'react';

function MultimediaNews(props) {
  return (
    <div className="main-multimedia__container">
      <div className="main-multimedia__header">
        <h2 className="main-multimedia__header-title">MULTIMEDIA</h2>
        <ul className="main-multimedia__list">
          <li className="main-multimedia__item">VIDEO</li>
          <li className="main-multimedia__item">LONGFORM</li>
          <li className="main-multimedia__item">VOICES</li>
          <li className="main-multimedia__item">STORY</li>
          <li className="main-multimedia__item">QUIZ</li>
        </ul>
      </div>
      <Row gutter={[8, 8]} className="main-multimedia__content">
        <Col lg={12} className="main-multimedia__item">
          1
        </Col>
        <Col lg={6} className="main-multimedia__item">
          2
        </Col>
        <Col lg={6} className="main-multimedia__item">
          3
        </Col>
      </Row>
    </div>
  );
}

export default MultimediaNews;
