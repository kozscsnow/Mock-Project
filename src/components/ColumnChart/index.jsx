import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

import React from 'react';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import './ColumnChart.scss';

const filterTitleTypeOfChart = (type, t) => {
  if (type === 'cases') return `${t('column-chart_title-cases')}`;
  if (type === 'recovered') return `${t('column-chart_title-recovered')}`;
  if (type === 'deaths') return `${t('column-chart_title-deaths')}`;
};

const filterDataTypeOfChart = (
  type,
  t,
  listCases,
  listRecovered,
  listDeaths
) => {
  if (type === 'cases')
    return {
      name: `${t('cases')}`,
      data: [...listCases],
    };
  if (type === 'recovered')
    return {
      name: `${t('recovered')}`,
      data: [...listRecovered],
    };
  if (type === 'deaths')
    return {
      name: `${t('deaths')}`,
      data: [...listDeaths],
    };
};
const filterColorTypeOfChart = (type) => {
  if (type === 'cases') return ['#FF4757'];
  if (type === 'recovered') return ['#70A1FF'];
  if (type === 'deaths') return ['#FFA502'];
};
const generateDataOption = (infoCovidHistory, type, t) => {
  if (
    infoCovidHistory.cases &&
    infoCovidHistory.deaths &&
    infoCovidHistory.recovered
  ) {
    const listCases = Object.values(infoCovidHistory.cases);
    const listDeaths = Object.values(infoCovidHistory.deaths);
    const listRecovered = Object.values(infoCovidHistory.recovered);
    const listDate = Object.keys(infoCovidHistory.cases);
    const listDateFormated = listDate.map((item) =>
      moment(item).format('DD/MM/YYYY')
    );

    const categories = [...listDateFormated];
    return {
      chart: {
        type: 'column',
      },
      title: {
        text: filterTitleTypeOfChart(type, t),
      },
      subtitle: {
        text: `${t('column-chart_sub-title')}`,
      },
      xAxis: {
        categories: [...categories],
        crosshair: true,
      },
      yAxis: {
        min: 0,
        title: {
          text: `${t('column-chart_title-horizontal')}`,
        },
      },
      colors: filterColorTypeOfChart(type),
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat:
          '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y} ca</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true,
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      series: [
        filterDataTypeOfChart(type, t, listCases, listRecovered, listDeaths),
      ],
    };
  }
};

const StyleLoadingOutlined = styled(LoadingOutlined)`
  font-size: 60px;
  color: ${(props) => props.theme.iconColor};
`;
const StyleSpin = styled(Spin)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
`;
function ColumnChart(props) {
  const { t } = useTranslation();
  const { infoCovidHistory, type = 'cases', isLocalLoading } = props;
  return (
    <div className="column-chart__container">
      {isLocalLoading ? (
        <StyleSpin indicator={<StyleLoadingOutlined />} />
      ) : (
        <HighchartsReact
          highcharts={Highcharts}
          options={generateDataOption(infoCovidHistory, type, t)}
        />
      )}
    </div>
  );
}

export default React.memo(ColumnChart);
