import React from 'react';
import LineChart from '../../../../components/LineChart';
import MapChart from '../../../../components/MapChart';
import { Col, Row } from 'antd';
import PieChart from '../../../../components/PieChart';

function Chart(props) {
  const { listInfoCovidCountries, infoCovidAll, infoCovidHistory } = props;
  return (
    <div>
      <Row>
        <Col xs={24} lg={12}>
          <LineChart infoCovidHistory={infoCovidHistory} />
        </Col>
        <Col xs={24} lg={12}>
          <MapChart listInfoCovidCountries={listInfoCovidCountries} />
        </Col>
      </Row>
      <Row>
        <Col xs={24} lg={12}>
          <PieChart infoCovidAll={infoCovidAll} type={'all'} />
        </Col>
        <Col xs={24} lg={12}>
          <PieChart infoCovidAll={infoCovidAll} type={'all'} />
        </Col>
      </Row>
    </div>
  );
}

export default Chart;
