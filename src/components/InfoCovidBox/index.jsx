import React from 'react';
import { Card, Col, Row } from 'antd';
import { useTranslation } from 'react-i18next';

function InfoCovidBox(props) {
  const { t } = useTranslation();
  const { cases, deaths, recovered } = props;

  const formatNumber = Intl.NumberFormat('en');
  return (
    <>
      <div className="site-card-wrapper">
        <Row gutter={[8, 8]}>
          <Col xs={24} md={8} style={{ marginBottom: '16px' }}>
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
              {formatNumber.format(cases ? cases : 0)}
            </Card>
          </Col>
          <br />
          <Col xs={24} md={8} style={{ marginBottom: '16px' }}>
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
              {formatNumber.format(recovered ? recovered : 0)}
            </Card>
          </Col>
          <br />
          <Col xs={24} md={8} style={{ marginBottom: '16px' }}>
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
              {formatNumber.format(deaths ? deaths : 0)}
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default InfoCovidBox;
