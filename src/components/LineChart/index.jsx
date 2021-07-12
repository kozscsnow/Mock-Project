import React, { useEffect, useState } from 'react';
// import HighChartsReact from 'highcharts-react-official';
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
      title: {
        text: 'Toàn thế giới',
      },

      subtitle: {
        text: 'Số ca toàn thế giới',
      },

      yAxis: {
        min: 0,
        title: {
          text: 'Số ca nhiễm',
        },
      },

      xAxis: {
        categories: categories,
      },
      colors: ['#FF4757', '#70A1FF', '#FFA502'],
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
      },
      tooltip: {
        headerFormat:
          '<span style="font-size:10px">ngày {point.key}</span><table>',
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
          name: 'Số ca nhiễm',
          data: [...listCases],
        },
        {
          name: 'Số ca hồi phục',
          data: [...listRecovered],
        },
        {
          name: 'Số ca tử vong',
          data: [...listDeaths],
        },
      ],

      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500,
            },
            chartOptions: {
              legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
              },
            },
          },
        ],
      },
    };
  }
};

function LineChart(props) {
  const { infoCovidHistory } = props;
  const [options, setOptions] = useState({});
  console.log(infoCovidHistory);
  // useEffect(() => {
  //   if (infoCovidHistory) {
  //     setOptions(generateDataOption(infoCovidHistory));
  //   }
  // }, [infoCovidHistory]);
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

export default LineChart;
