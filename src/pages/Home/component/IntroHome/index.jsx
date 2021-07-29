import { Col, Row } from 'antd';
import React from 'react';
import { TwitterOutlined, FacebookOutlined } from '@ant-design/icons';
import './IntroHome.scss';
import { Progress } from 'antd';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import CountUp from 'react-countup';

const StyleOverview = styled.h3`
  color: ${(props) => props.theme.textColor};
`;
const StyleTwitterOutlined = styled(TwitterOutlined)`
  color: ${(props) => props.theme.twitterIconColor};
`;
const StyleFacebookOutlined = styled(FacebookOutlined)`
  color: ${(props) => props.theme.facebookIconColor};
`;
const StyleText = styled.p`
  color: ${(props) => props.theme.textColor};
`;
const StyleProgress = styled(Progress)`
  .ant-progress-text {
    color: ${(props) => props.theme.textColor};
  }
`;
const StyleHomeChart = styled.div`
  background: ${(props) => props.theme.backgroundColor};
`;
function IntroHome(props) {
  const { t } = useTranslation();
  const { infoCovidAll } = props;
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
  let percentRecovered = parseFloat((recovered / cases) * 100).toFixed(2);
  return (
    <div className="intro-container">
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} lg={12}>
          <div className="border-box">
            <div className="intro-home__info">
              <div className="intro-home__info-header">
                <StyleOverview>{t('home_intro_overview')}</StyleOverview>
                <StyleText>
                  {t('home_intro_share')}:
                  <StyleTwitterOutlined className="intro-home__info-header-icon" />
                  <StyleFacebookOutlined className="intro-home__info-header-icon" />
                </StyleText>
              </div>
              <div className="intro-home__info-content">
                <Row gutter={[48, 48]}>
                  <Col xs={24} lg={8}>
                    <div className="intro-home__info-item">
                      <h4 className="info-item__confirmed confirmed">
                        {
                          <CountUp
                            end={cases ? cases : 0}
                            duration={1}
                            separator=","
                          />
                        }
                      </h4>
                      <StyleText>{t('home_intro_confirmed')}</StyleText>
                      <small className="info-item__confirmed confirmed">
                        +
                        <CountUp
                          end={todayCases ? todayCases : 0}
                          duration={1}
                          separator=","
                        />
                      </small>
                    </div>
                  </Col>
                  <Col xs={24} lg={8}>
                    <div className="intro-home__info-item">
                      <h4 className="info-item__recovered recovered">
                        <CountUp
                          end={recovered ? recovered : 0}
                          duration={1}
                          separator=","
                        />
                      </h4>
                      <StyleText>{t('home_intro_recovered')}</StyleText>
                      <small className="info-item__confirmed recovered">
                        +
                        <CountUp
                          end={todayRecovered ? todayRecovered : 0}
                          duration={1}
                          separator=","
                        />
                      </small>
                    </div>
                  </Col>
                  <Col xs={24} lg={8}>
                    <div className="intro-home__info-item">
                      <h4 className="info-item__deaths deaths">
                        <CountUp
                          end={deaths ? deaths : 0}
                          duration={1}
                          separator=","
                        />
                      </h4>
                      <StyleText>{t('home_intro_deaths')}</StyleText>
                      <small className="info-item__deaths deaths">
                        +
                        <CountUp
                          end={todayDeaths ? todayDeaths : 0}
                          duration={1}
                          separator=","
                        />
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
                <StyleProgress
                  type="circle"
                  percent={percentDeaths}
                  strokeColor={{
                    '100%': '#9B9B9B',
                  }}
                />
              </div>
              <StyleText>{t('home_intro_fatality-rate')}</StyleText>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={12} lg={6}>
          <div className="border-box">
            <div className="intro-home__chart">
              <div>
                <StyleProgress
                  type="circle"
                  percent={percentRecovered}
                  strokeColor={{
                    '100%': '#00E1FF',
                  }}
                />
              </div>
              <StyleText>{t('home_intro_recover-rate')}</StyleText>
            </div>
          </div>
        </Col>
      </Row>
      <br />
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} lg={8}>
          <div className="border-box">
            <StyleHomeChart className="intro-home__chart background-img">
              <div>
                <h5>{t('home_intro_cases-per-one-million')}</h5>
                <p className="text-large-size confirmed">
                  <CountUp
                    end={casesPerOneMillion ? casesPerOneMillion : 0}
                    duration={1}
                    separator=","
                  />
                </p>
              </div>
            </StyleHomeChart>
          </div>
        </Col>
        <Col xs={24} sm={24} lg={8}>
          <div className="border-box">
            <div className="intro-home__chart background-img">
              <div>
                <h5>{t('home_intro_recovered-per-one-million')}</h5>
                <p className="text-large-size recovered">
                  <CountUp
                    end={recoveredPerOneMillion ? recoveredPerOneMillion : 0}
                    duration={1}
                    separator=","
                  />
                </p>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} lg={8}>
          <div className="border-box">
            <div className="intro-home__chart background-img">
              <div>
                <h5>{t('home_intro_deaths-per-one-million')}</h5>
                <p className="text-large-size deaths">
                  <CountUp
                    end={deathsPerOneMillion ? deathsPerOneMillion : 0}
                    duration={1}
                    separator=","
                  />
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
