import React, { useEffect, useState } from 'react';
// import HighChartsReact from 'highcharts-react-official';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import moment from 'moment';
import { useTranslation } from 'react-i18next';

const generateDataOption = (infoCovidHistory, t) => {
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
        text: `${t('line-chart_title-cases')}`,
      },

      subtitle: {
        text: `${t('line-chart_sub-title-cases')}`,
      },

      yAxis: {
        min: 0,
        title: {
          text: `${t('line-chart_title-horizontal')}`,
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
        series: {
          events: {
            legendItemClick: function (bla) {
              if (this.visible) {
                var count = 0;
                for (var index in this.chart.series) {
                  if (this.chart.series[index].visible) {
                    count = count + 1;
                    if (count > 1) break;
                  }
                }
                if (count === 1) return false;
              }
            },
          },
        },
      },

      series: [
        {
          name: `${t('cases')}`,
          data: [...listCases],
        },
        {
          name: `${t('recovered')}`,
          data: [...listRecovered],
        },
        {
          name: `${t('deaths')}`,
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
  const { t } = useTranslation();
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
        options={generateDataOption(infoCovidHistory, t)}
        // constructorType={'mapChart'}
      />
    </div>
  );
}

export default React.memo(LineChart);
