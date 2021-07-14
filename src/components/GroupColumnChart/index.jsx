import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

import React from 'react';
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
        type: 'column',
      },

      title: {
        text: 'Column Chart',
      },

      xAxis: {
        categories: categories,
      },

      yAxis: {
        allowDecimals: false,
        min: 0,
        title: {
          text: 'Cases',
        },
      },

      tooltip: {
        formatter: function () {
          return (
            '<b>' +
            this.x +
            '</b><br/>' +
            this.series.name +
            ': ' +
            this.y +
            '<br/>' +
            'Total: ' +
            this.point.stackTotal
          );
        },
      },
      colors: ['#FF4757', '#70A1FF'],
      plotOptions: {
        column: {
          stacking: 'normal',
        },
      },

      series: [
        {
          name: 'Confirmed',
          data: [...listCases],
        },
        {
          name: 'Deaths',
          data: [...listRecovered],
        },
      ],
    };
  }
};
function GroupColumnChart(props) {
  const { infoCovidHistory, type } = props;

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={generateDataOption(infoCovidHistory)}
      />
    </div>
  );
}

export default GroupColumnChart;
