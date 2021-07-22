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
        text: 'Monthly Average Rainfall',
      },
      subtitle: {
        text: 'Source: WorldClimate.com',
      },
      xAxis: {
        categories: [...categories],
        crosshair: true,
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Rainfall (mm)',
        },
        colors: ['#FF4757', '#70A1FF', '#FFA502'],
      },
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
        {
          name: 'Số ca mắc',
          data: [...listCases],
        },
        {
          name: 'Số ca khỏi',
          data: [...listRecovered],
        },
        {
          name: 'Số ca tử vong',
          data: [...listDeaths],
        },
      ],
    };
  }
};
function ColumnChart(props) {
  const { infoCovidHistory } = props;
  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={generateDataOption(infoCovidHistory)}
        // constructorType={'mapChart'}
      />
    </div>
  );
}

export default ColumnChart;
