import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
const generateDataOption = (dataInfoCovid) => {
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
            name: 'Số ca mắc',
            y: dataInfoCovid.cases,
            sliced: true,
            selected: true,
          },
          {
            name: 'Số ca hồi phục',
            y: dataInfoCovid.recovered,
          },
          {
            name: 'Số ca tử vong',
            y: dataInfoCovid.deaths,
          },
        ],
      },
    ],
  };
};

function PieChart(props) {
  const { cases, deaths, recovered, type } = props;
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
        options={generateDataOption(dataInfoCovid)}
        // constructorType={'mapChart'}
      />
    </div>
  );
}

export default PieChart;
