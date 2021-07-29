import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import { useTranslation } from 'react-i18next';
const generateDataOption = (dataInfoCovid, t) => {
  return {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
    },
    title: {
      text: dataInfoCovid.type === 'all' ? 'Toàn thế giới' : dataInfoCovid.type,
    },
    colors: ['#FF4757', '#70A1FF', '#FFA502'],
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
    },
    accessibility: {
      point: {
        valueSuffix: '%',
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
        },
      },
    },
    series: [
      {
        name: 'Brands',
        colorByPoint: true,
        data: [
          {
            name: `${t('cases')}`,
            y: dataInfoCovid.cases,
            sliced: true,
            selected: true,
          },
          {
            name: `${t('recovered')}`,
            y: dataInfoCovid.recovered,
          },
          {
            name: `${t('deaths')}`,
            y: dataInfoCovid.deaths,
          },
        ],
      },
    ],
  };
};

function PieChart(props) {
  const { cases, deaths, recovered, type } = props;
  const { t } = useTranslation();
  const dataInfoCovid = {
    cases,
    deaths,
    recovered,
    type,
  };
  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={generateDataOption(dataInfoCovid, t)}
      />
    </div>
  );
}

export default React.memo(PieChart);
