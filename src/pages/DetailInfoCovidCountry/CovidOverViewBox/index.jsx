import { Col, Row } from 'antd';
import React, { useState } from 'react';
import { TwitterOutlined, FacebookOutlined } from '@ant-design/icons';
import './CovidOverViewBox.scss';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
  return (
    <div className="covid-overview-box__container">
      <Row>
        <Col xs={24} sm={24} lg={24}>
          <div className="border-box">
            <div className="covid-overview-box__info">
              <div className="covid-overview-box__info-header">
                <h3>
                  <img src={countryInfo?.flag} alt="flag country" />
                  <span> {country}</span> {t('overview')}
                </h3>
                <p>
                  {t('share')}: <TwitterOutlined style={{ color: '#1890FF' }} />
                  <FacebookOutlined style={{ color: '#285091' }} />
                </p>
              </div>

              <Row
                gutter={[48, 48]}
                className="covid-overview-box__info-content"
              >
                <Col xs={24} md={16} lg={8}>
                  <div className="covid-overview-box__info-item">
                    <h4 className="info-item__confirmed confirmed">
                      {formatterNumber.format(cases)}
                    </h4>
                    <p>{t('confirmed')}</p>
                    <small className="info-item__confirmed confirmed">
                      {t('today_cases')}
                    </small>
                    <small className="info-item__confirmed confirmed">
                      + {formatterNumber.format(todayCases)}
                    </small>
                  </div>
                </Col>
                <Col xs={24} md={16} lg={8}>
                  <div className="covid-overview-box__info-item">
                    <h4 className="info-item__recovered recovered">
                      {formatterNumber.format(recovered)}
                    </h4>
                    <p>{t('recovered')}</p>
                    <small className="info-item__confirmed recovered">
                      {t('today_recovered')}
                    </small>
                    <small className="info-item__confirmed recovered">
                      + {formatterNumber.format(todayRecovered)}
                    </small>
                  </div>
                </Col>
                <Col xs={24} md={16} lg={8}>
                  <div className="covid-overview-box__info-item">
                    <h4 className="info-item__deaths deaths">
                      {formatterNumber.format(deaths)}
                    </h4>
                    <p> {t('deaths')}</p>
                    <small className="info-item__confirmed deaths">
                      {t('today_deaths')}
                    </small>
                    <small className="info-item__deaths deaths">
                      + {formatterNumber.format(todayDeaths)}
                    </small>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default CovidOverViewBox;
