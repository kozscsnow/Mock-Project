import { Col, Row } from 'antd';
import React, { useState } from 'react';
import { TwitterOutlined, FacebookOutlined } from '@ant-design/icons';
import './CovidOverViewBox.scss';

function CovidOverViewBox(props) {
  // const { infoCovidAll } = props;
  //   const [country, setCountry] = useState('');
  //   const [cases, setCases] = useState(0);
  //   const [deaths, setDeaths] = useState(0);
  //   const [recovered, setRecovered] = useState(0);
  //   const [todayCases, setTodayCases] = useState(0);
  //   const [todayDeaths, setTodayDeaths] = useState(0);
  //   const [todayRecovered, setTodayRecovered] = useState(0);
  // const [flag, setFlag] = useState('');

  const {
    country,
    cases,
    deaths,
    recovered,
    todayCases,
    todayDeaths,
    todayRecovered,
    countryInfo,
  } = props;
  // const { flag } = countryInfo;
  // console.log(countryInfo);
  const formatterNumber = new Intl.NumberFormat('en');
  return (
    <div className="covid-overview-box__container">
      <Row>
        <Col xs={24} sm={24} lg={24}>
          <div className="border-box">
            <div className="covid-overview-box__info">
              <div className="covid-overview-box__info-header">
                <h3>
                  <img src={countryInfo?.flag} alt="flag country" />
                  <span> {country}</span> Overview
                </h3>
                <p>
                  Share: <TwitterOutlined style={{ color: '#1890FF' }} />
                  <FacebookOutlined style={{ color: '#285091' }} />
                </p>
              </div>
              <div className="covid-overview-box__info-content">
                <Row gutter={[48, 48]}>
                  <Col xs={24} lg={8}>
                    <div className="covid-overview-box__info-item">
                      <h4 className="info-item__confirmed confirmed">
                        {formatterNumber.format(cases)}
                      </h4>
                      <p>Confirmed</p>
                      <small className="info-item__confirmed confirmed">
                        Today Cases +{formatterNumber.format(todayCases)}
                      </small>
                    </div>
                  </Col>
                  <Col xs={24} lg={8}>
                    <div className="covid-overview-box__info-item">
                      <h4 className="info-item__recovered recovered">
                        {formatterNumber.format(recovered)}
                      </h4>
                      <p>Recovered</p>
                      <small className="info-item__confirmed recovered">
                        Today Recovered +
                        {formatterNumber.format(todayRecovered)}
                      </small>
                    </div>
                  </Col>
                  <Col xs={24} lg={8}>
                    <div className="covid-overview-box__info-item">
                      <h4 className="info-item__deaths deaths">
                        {formatterNumber.format(deaths)}
                      </h4>
                      <p>Deaths</p>
                      <small className="info-item__deaths deaths">
                        Today Deaths +{formatterNumber.format(todayDeaths)}
                      </small>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default CovidOverViewBox;
