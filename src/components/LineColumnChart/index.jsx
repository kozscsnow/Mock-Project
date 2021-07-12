import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import moment from 'moment';
const generateDataOption = (infoCovidHistory) => {
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
        zoomType: 'xy',
      },
      title: {
        text: 'Line and Column Chart',
      },
      subtitle: {
        text: 'Covid 19 All Data',
      },
      xAxis: [
        {
          categories: categories,
          crosshair: true,
        },
      ],
      yAxis: [
        {
          // Primary yAxis
          labels: {
            format: '{value}',
            style: {
              color: Highcharts.getOptions().colors[0],
            },
          },
          title: {
            text: 'Cases',
            style: {
              color: Highcharts.getOptions().colors[0],
            },
          },
        },
        {
          // Secondary yAxis
          title: {
            text: 'Recovered',
            style: {
              color: Highcharts.getOptions().colors[1],
            },
          },
          labels: {
            format: '{value}',
            style: {
              color: Highcharts.getOptions().colors[1],
            },
          },
          opposite: true,
        },
      ],
      tooltip: {
        shared: true,
      },
      legend: {
        layout: 'vertical',
        align: 'left',
        x: 120,
        verticalAlign: 'top',
        y: 100,
        floating: true,
        backgroundColor:
          Highcharts.defaultOptions.legend.backgroundColor || // theme
          'rgba(255,255,255,0.25)',
      },
      series: [
        {
          name: 'Cases',
          type: 'column',
          yAxis: 1,
          data: [...listCases],
          tooltip: {
            valueSuffix: '',
          },
        },
        {
          name: 'Recovered',
          type: 'spline',
          data: [...listRecovered],
          tooltip: {
            valueSuffix: '',
          },
        },
      ],
    };
  }
};
function LineColumnChart(props) {
  const { infoCovidHistory } = props;
  console.log(infoCovidHistory);
  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={generateDataOption(infoCovidHistory)}
      />
    </div>
  );
}

export default LineColumnChart;
