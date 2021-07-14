import { Col, Row } from 'antd';
import React from 'react';
import { TwitterOutlined, FacebookOutlined } from '@ant-design/icons';
import './IntroHome.scss';
import { Progress } from 'antd';

function IntroHome(props) {
  const { infoCovidAll } = props;
  console.log({ infoCovidAll });
  const {
    cases,
    deaths,
    recovered,
    todayCases,
    todayDeaths,
    todayRecovered,
    casesPerOneMillion,
    recoveredPerOneMillion,
    deathsPerOneMillion,
  } = infoCovidAll;

  const formatterNumber = new Intl.NumberFormat('en');
  let percentDeaths = parseFloat((deaths / cases) * 100).toFixed(2);
  console.log(percentDeaths);
  let percentRecovered = parseFloat((recovered / cases) * 100).toFixed(2);
  return (
    <div className="intro-container">
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} lg={12}>
          <div className="border-box">
            <div className="intro-home__info">
              <div className="intro-home__info-header">
                <h3>Overview</h3>
                <p>
                  Share: <TwitterOutlined style={{ color: '#1890FF' }} />
                  <FacebookOutlined style={{ color: '#285091' }} />
                </p>
              </div>
              <div className="intro-home__info-content">
                <Row gutter={[48, 48]}>
                  <Col xs={24} lg={8}>
                    <div className="intro-home__info-item">
                      <h4 className="info-item__confirmed confirmed">
                        {formatterNumber.format(cases)}
                      </h4>
                      <p>Confirmed</p>
                      <small className="info-item__confirmed confirmed">
                        +{formatterNumber.format(todayCases)}
                      </small>
                    </div>
                  </Col>
                  <Col xs={24} lg={8}>
                    <div className="intro-home__info-item">
                      <h4 className="info-item__recovered recovered">
                        {formatterNumber.format(recovered)}
                      </h4>
                      <p>Recovered</p>
                      <small className="info-item__confirmed recovered">
                        +{formatterNumber.format(todayRecovered)}
                      </small>
                    </div>
                  </Col>
                  <Col xs={24} lg={8}>
                    <div className="intro-home__info-item">
                      <h4 className="info-item__deaths deaths">
                        {formatterNumber.format(deaths)}
                      </h4>
                      <p>Deaths</p>
                      <small className="info-item__deaths deaths">
                        +{formatterNumber.format(todayDeaths)}
                      </small>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={12} lg={6}>
          <div className="border-box">
            <div className="intro-home__chart">
              <div>
                <Progress
                  type="circle"
                  percent={percentDeaths}
                  strokeColor={{
                    '100%': '#9B9B9B',
                  }}
                />
              </div>
              <p>Fatality Rate</p>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={12} lg={6}>
          <div className="border-box">
            <div className="intro-home__chart">
              <div>
                <Progress
                  type="circle"
                  percent={percentRecovered}
                  strokeColor={{
                    '100%': '#00E1FF',
                  }}
                />
              </div>
              <p>Recover Rate</p>
            </div>
          </div>
        </Col>
      </Row>
      <br />
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} lg={8}>
          <div className="border-box">
            <div className="intro-home__chart background-img">
              <div>
                <h5>Cases Per One Million</h5>
                <p className="text-large-size confirmed">
                  {formatterNumber.format(casesPerOneMillion)}
                </p>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} lg={8}>
          <div className="border-box">
            <div className="intro-home__chart background-img">
              <div>
                <h5>Recovered Per One Million</h5>
                <p className="text-large-size recovered">
                  {formatterNumber.format(recoveredPerOneMillion)}
                </p>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} lg={8}>
          <div className="border-box">
            <div className="intro-home__chart background-img">
              <div>
                <h5>Deaths Per One Million</h5>
                <p className="text-large-size deaths">
                  {formatterNumber.format(deathsPerOneMillion)}
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <br />
    </div>
  );
}

export default IntroHome;
