import { FacebookOutlined, TwitterOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import LoadingSpin from 'components/LoadingSpin';
import React from 'react';
import CountUp from 'react-countup';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import './CovidOverViewBox.scss';

const StyleTwitterOutlined = styled(TwitterOutlined)`
  color: ${(props) => props.theme.twitterIconColor};
  margin: 0px 4px;
`;
const StyleFacebookOutlined = styled(FacebookOutlined)`
  color: ${(props) => props.theme.facebookIconColor};
  margin: 0px 4px;
`;
const StyleText = styled.p`
  color: ${(props) => props.theme.textColor};
`;

CovidOverViewBox.defaultProps = {
  cases: 0,
  deaths: 0,
  recovered: 0,
  todayCases: 0,
  todayDeaths: 0,
  todayRecovered: 0,
};
function CovidOverViewBox(props) {
  const {
    country,
    cases,
    deaths,
    recovered,
    todayCases,
    todayDeaths,
    todayRecovered,
    countryInfo,
    isLocalLoading,
  } = props;
  const formatterNumber = new Intl.NumberFormat('en');
  const { t } = useTranslation();
  return (
    <div className="covid-overview-box__container">
      <Row>
        <Col xs={24} sm={24} lg={24}>
          <div className="border-box">
            <div className="covid-overview-box__info">
              <div className="covid-overview-box__info-header">
                {isLocalLoading ? (
                  <LoadingSpin height={'200px'} />
                ) : (
                  <h3>
                    <img src={countryInfo?.flag} alt="flag country" />
                    <StyleText className="covid-overview-box__info-header-country-name">
                      {country} {t('overview')}
                    </StyleText>
                  </h3>
                )}

                <StyleText>
                  {t('share')}:
                  <StyleTwitterOutlined className="covid-overview-box__info-header-icon" />
                  <StyleFacebookOutlined className="covid-overview-box__info-header-icon" />
                </StyleText>
              </div>

              <Row
                gutter={[48, 48]}
                className="covid-overview-box__info-content"
              >
                <Col xs={24} md={16} lg={8}>
                  <div className="covid-overview-box__info-item">
                    <h4 className="info-item__confirmed confirmed">
                      <CountUp end={cases} duration={2} separator="," />
                    </h4>
                    <StyleText>{t('confirmed')}</StyleText>
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
                      <CountUp end={recovered} duration={2} separator="," />
                    </h4>
                    <StyleText>{t('recovered')}</StyleText>
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
                      <CountUp end={deaths} duration={2} separator="," />
                    </h4>
                    <StyleText> {t('deaths')}</StyleText>
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

export default React.memo(CovidOverViewBox);
