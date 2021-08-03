import { CircularProgress } from '@material-ui/core';
import { Card, Col, Row } from 'antd';
import React from 'react';
import CountUp from 'react-countup';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const StyleCol = styled(Col)`
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  .ant-card.ant-card-bordered.ant-card-hoverable{
    width: 100%;
  }
}
`;

InfoCovidBox.defaultProps = {
  cases: 0,
  deaths: 0,
  recovered: 0,
};
function InfoCovidBox(props) {
  const { t } = useTranslation();
  const { cases, deaths, recovered, isLocalLoading } = props;

  return (
    <>
      <div className="site-card-wrapper">
        <Row gutter={[8, 8]}>
          <StyleCol xs={24} md={8}>
            {isLocalLoading ? (
              <CircularProgress />
            ) : (
              <Card
                hoverable={true}
                title={t('total_cases')}
                bordered={true}
                loading={false}
                headStyle={{
                  textAlign: 'center',
                  backgroundColor: '#FED7D7',
                  color: '#E53E3E',
                }}
                bodyStyle={{
                  textAlign: 'center',
                  backgroundColor: '#FFF5F5',
                  color: '#E53E3E',
                  fontSize: '30px',
                }}
              >
                <CountUp end={cases} duration={2} separator="," />
              </Card>
            )}
          </StyleCol>
          <br />
          <StyleCol xs={24} md={8}>
            {isLocalLoading ? (
              <CircularProgress />
            ) : (
              <Card
                hoverable={true}
                title={t('total_recovered')}
                bordered={true}
                headStyle={{
                  textAlign: 'center',
                  backgroundColor: '#C6F6D5',
                  color: '#38A169',
                }}
                bodyStyle={{
                  textAlign: 'center',
                  backgroundColor: '#F0FFF4',
                  color: '#38A169',
                  fontSize: '30px',
                }}
              >
                <CountUp end={recovered} duration={2} separator="," />
              </Card>
            )}
          </StyleCol>
          <br />
          <StyleCol xs={24} md={8}>
            {isLocalLoading ? (
              <CircularProgress />
            ) : (
              <Card
                hoverable={true}
                title={t('total_deaths')}
                bordered={true}
                headStyle={{
                  textAlign: 'center',
                  backgroundColor: '#E2E8F0',
                  color: '#718096',
                }}
                bodyStyle={{
                  textAlign: 'center',
                  backgroundColor: '#EDF2F7',
                  color: '#718096',
                  fontSize: '30px',
                }}
              >
                <CountUp end={deaths} duration={2} separator="," />
              </Card>
            )}
          </StyleCol>
        </Row>
      </div>
    </>
  );
}

export default React.memo(InfoCovidBox);
