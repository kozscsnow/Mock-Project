import { Col, Row } from 'antd';
import React from 'react';
import { TwitterOutlined, FacebookOutlined } from '@ant-design/icons';
import './IntroHome.scss';
function IntroHome(props) {
  return (
    <div className="intro-container">
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} lg={12}>
          <div className="border-box">
            <div className="intro-home__info">
              <div className="intro-home__info-header">
                <h3>Vietname Overview</h3>
                <p>
                  Share: <TwitterOutlined style={{ color: '#1890FF' }} />
                  <FacebookOutlined style={{ color: '#285091' }} />
                </p>
              </div>
              <div className="intro-home__info-content">
                <div className="intro-home__info-item">
                  <h4 className="info-item__confirmed">34,333</h4>
                  <p>Confirmed</p>
                  <small className="info-item__confirmed">+436 cases</small>
                </div>
                <div className="intro-home__info-item">
                  <h4 className="info-item__recovered">34,333</h4>
                  <p>Recovered</p>
                </div>
                <div className="intro-home__info-item">
                  <h4 className="info-item__deaths">34,333</h4>
                  <p>Deaths</p>
                  <small className="info-item__deaths">+436 cases</small>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={12} lg={6}>
          <div className="border-box">
            <div className="intro-home__chart">
              <div>chart</div>
              <p>Fatality Rate</p>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={12} lg={6}>
          <div className="border-box">
            <div className="intro-home__chart">
              <div>chart</div>
              <p>Recover Rate</p>
            </div>
          </div>
        </Col>
      </Row>
      <br />
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={8} lg={8}>
          <div className="border-box">
            <div className="intro-home__chart">
              <div>
                <h5>Critical Cases treated in ICU</h5>
                <div></div>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={8} lg={8}>
          <div className="border-box">
            <div className="intro-home__chart">
              <h5>Critical Cases treated in ICU</h5>
              <div></div>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={8} lg={8}>
          <div className="border-box">
            <div className="intro-home__chart">
              <h5>Critical Cases treated in ICU</h5>
              <div></div>
            </div>
          </div>
        </Col>
      </Row>
      <br />
    </div>
  );
}

export default IntroHome;
