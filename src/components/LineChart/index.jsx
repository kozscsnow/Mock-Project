import React, { useEffect, useState } from 'react';
// import HighChartsReact from 'highcharts-react-official';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

const generateDataOption = (infoCovidHistory) => {
  console.log(infoCovidHistory);
  if (infoCovidHistory) {
    const { cases } = infoCovidHistory;
    console.log(cases);
    // console.log(Object.keys(cases));
    const categories = [1, 2, 3, 4, 5];
    return {
      title: {
        text: 'Solar',
      },

      subtitle: {
        text: 'Source: thesolarfoundation.com',
      },

      yAxis: {
        min: 0,
        title: {
          text: 'Number of Employees',
        },
      },

      xAxis: {
        categories: categories,
      },

      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
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
          name: 'Số ca nhiễm',
          data: [],
        },
        {
          name: 'Số ca tử vong',
          data: [],
        },
        {
          name: 'Số ca hồi phục',
          data: [],
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
